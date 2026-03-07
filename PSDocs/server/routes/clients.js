import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all clients
router.get('/', async (req, res) => {
  const { status, search } = req.query;

  let query = supabase.from('clients').select('*').order('name');

  if (status) query = query.eq('status', status);
  if (search) query = query.ilike('name', `%${search}%`);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET single client with contacts
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('clients')
    .select('*, client_contacts(*)')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
});

// POST create client
router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('clients')
    .insert(req.body)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT update client
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('clients')
    .update({ ...req.body, updated_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE client
router.delete('/:id', async (req, res) => {
  const { error } = await supabase.from('clients').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

// POST add contact to client
router.post('/:id/contacts', async (req, res) => {
  const { data, error } = await supabase
    .from('client_contacts')
    .insert({ ...req.body, client_id: req.params.id })
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// PUT update contact
router.put('/:id/contacts/:contactId', async (req, res) => {
  const { data, error } = await supabase
    .from('client_contacts')
    .update({ ...req.body, updated_at: new Date().toISOString() })
    .eq('id', req.params.contactId)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// DELETE contact
router.delete('/:id/contacts/:contactId', async (req, res) => {
  const { error } = await supabase
    .from('client_contacts')
    .delete()
    .eq('id', req.params.contactId);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
});

export default router;
