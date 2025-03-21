import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import routes from './api/v1/routes'

const app = express();
dotenv.config();

app.use(helmet());
app.use(cors({
  origin: "https://eslearning.co.uk/", 
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(express.json());

const port = process.env.NODE_PORT || 3000; 

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

app.use('/api/v1', routes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
}); 