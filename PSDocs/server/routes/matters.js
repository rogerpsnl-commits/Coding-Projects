import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all matters
router.get('/', async (req, res) => {
  const { status, client_id, search } = req.query;

  let query = supabase
    .from('matters')
    .select('*, clients(id, name, abbreviation)')
    .order('created_at', { ascending: false });

  if (status) query = query.eq('status', status);
  if (client_id) query = query.eq('client_id', client_id);
  if (search) query = query.or(`title.ilike.%${search}%,nickname.ilike.%${search}%,file_number.ilike.%${search}%`);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET single matter with client and contact
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('matters')
    .select('*, clients(id, name, abbreviation), client_contacts(id, first_name, last_name, title, email, phone)')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// POST create matter
router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('matters')
    .insert(req.body)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT update matter
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('matters')
    .update({ ...req.body, updated_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE matter
router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('matters').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
