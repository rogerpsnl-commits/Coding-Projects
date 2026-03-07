import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import clientsRouter from './routes/clients.js';
import mattersRouter from './routes/matters.js';

config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/clients', clientsRouter);
app.use('/api/matters', mattersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
