import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all marketing activities
router.get('/', async (req, res) => {
  const { status, type, search } = req.query;

  let query = supabase
    .from('marketing_activities')
    .select('*')
    .order('start_date', { ascending: false });

  if (status) query = query.eq('status', status);
  if (type) query = query.eq('type', type);
  if (search) query = query.ilike('title', `%${search}%`);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET single marketing activity
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('marketing_activities')
    .select('*')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// POST create marketing activity
router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('marketing_activities')
    .insert(req.body)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT update marketing activity
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('marketing_activities')
    .update({ ...req.body, updated_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE marketing activity
router.delete('/:id', async (req, res) => {
  const { error } = await supabase
    .from('marketing_activities')
    .delete()
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
