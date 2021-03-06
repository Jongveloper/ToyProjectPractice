import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';
import todoRouter from './router/todos.js';
import { config } from './config.js';
import { initSocket } from './connection/socket.js';
import { connectDB } from './db/database.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/todo', todoRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connectDB()
  .then(() => {
    console.log('init');
    const server = app.listen(config.host.port);
    initSocket(server);
  })
  .catch(console.error);
