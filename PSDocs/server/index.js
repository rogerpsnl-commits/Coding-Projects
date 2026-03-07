import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import clientsRouter from './routes/clients.js';
import mattersRouter from './routes/matters.js';
import staffRouter from './routes/staff.js';
import ratesRouter from './routes/rates.js';
import marketingRouter from './routes/marketing.js';
import firmRouter from './routes/firm.js';

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/clients', clientsRouter);
app.use('/api/matters', mattersRouter);
app.use('/api/staff', staffRouter);
app.use('/api/rates', ratesRouter);
app.use('/api/marketing', marketingRouter);
app.use('/api/firm', firmRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
