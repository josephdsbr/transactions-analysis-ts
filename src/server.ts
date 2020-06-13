import express, { Application } from 'express';
import Query from './database/connection';
const app: Application = express();

app.get('/', (req, res) => {
  
})

app.listen(3000, () => `App is listening to port 3000`)
