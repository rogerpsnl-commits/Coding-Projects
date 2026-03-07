import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// GET all role rates
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('role_rates')
    .select('*')
    .order('role');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// PUT upsert rate for a role
router.put('/:role', async (req, res) => {
  const { role } = req.params;
  const { hourly_rate } = req.body;

  const { data, error } = await supabase
    .from('role_rates')
    .upsert(
      { role, hourly_rate: hourly_rate ?? null, updated_at: new Date().toISOString() },
      { onConflict: 'role' }
    )
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
