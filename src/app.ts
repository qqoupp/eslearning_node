import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.NODE_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});