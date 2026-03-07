import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all staff
router.get('/', async (req, res) => {
  const { status, role, search } = req.query;

  let query = supabase
    .from('staff')
    .select('*')
    .order('last_name')
    .order('first_name');

  if (status) query = query.eq('status', status);
  if (role) query = query.eq('role', role);
  if (search) query = query.or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%`);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET single staff member
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('staff')
    .select('*')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// POST create staff member
router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('staff')
    .insert(req.body)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT update staff member
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('staff')
    .update({ ...req.body, updated_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE staff member
router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('staff').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
