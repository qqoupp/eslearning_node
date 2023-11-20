import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from './api/v1/auth/auth';

const app = express();
dotenv.config();

app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.NODE_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

app.use('/auth', authRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});