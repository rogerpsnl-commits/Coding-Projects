import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all matters
router.get('/', async (req, res) => {
  const { status, client_id, search } = req.query;

  let query = supabase
    .from('matters')
    .select('*, clients(id, name, abbreviation), matter_staff(staff_id, hourly_rate, staff(id, first_name, last_name))')
    .order('created_at', { ascending: false });

  if (status) query = query.eq('status', status);
  if (client_id) query = query.eq('client_id', client_id);
  if (search) query = query.or(`title.ilike.%${search}%,nickname.ilike.%${search}%,file_number.ilike.%${search}%`);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET single matter with client, contact, and staff
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('matters')
    .select('*, clients(id, name, abbreviation), client_contacts(id, first_name, last_name, title, email, phone), matter_staff(staff_id, hourly_rate, staff(id, first_name, last_name, role, hourly_rate))')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// POST create matter
router.post('/', async (req, res) => {
  const { staff_assignments, ...matterData } = req.body;

  const { data, error } = await supabase
    .from('matters')
    .insert(matterData)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });

  if (staff_assignments && staff_assignments.length > 0) {
    await supabase.from('matter_staff').insert(
      staff_assignments.map(({ staff_id, hourly_rate }) => ({
        matter_id: data.id,
        staff_id,
        hourly_rate: hourly_rate ?? null,
      }))
    );
  }

  res.status(201).json(data);
});

// PUT update matter
router.put('/:id', async (req, res) => {
  const { staff_assignments, ...matterData } = req.body;

  const { data, error } = await supabase
    .from('matters')
    .update({ ...matterData, updated_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });

  // Replace staff assignments
  await supabase.from('matter_staff').delete().eq('matter_id', req.params.id);
  if (staff_assignments && staff_assignments.length > 0) {
    await supabase.from('matter_staff').insert(
      staff_assignments.map(({ staff_id, hourly_rate }) => ({
        matter_id: req.params.id,
        staff_id,
        hourly_rate: hourly_rate ?? null,
      }))
    );
  }

  res.json(data);
});

// DELETE matter
router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('matters').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
