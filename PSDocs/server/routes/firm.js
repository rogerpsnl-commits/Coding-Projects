import { Router } from 'express';
import supabase from '../lib/supabase.js';

const router = Router();

// Fixed row ID — there is always exactly one firm_info record
const FIRM_ID = '00000000-0000-0000-0000-000000000001';

// GET firm info (upsert a blank row if none exists yet)
router.get('/', async (req, res) => {
  let { data, error } = await supabase
    .from('firm_info')
    .select('*')
    .eq('id', FIRM_ID)
    .single();

  if (error && error.code === 'PGRST116') {
    // Row doesn't exist yet — create it
    const result = await supabase
      .from('firm_info')
      .insert({ id: FIRM_ID, locations: [] })
      .select()
      .single();
    data = result.data;
    error = result.error;
  }

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// PUT update firm info
router.put('/', async (req, res) => {
  const { data, error } = await supabase
    .from('firm_info')
    .upsert({ ...req.body, id: FIRM_ID, updated_at: new Date().toISOString() })
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
