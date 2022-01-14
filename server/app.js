import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';
import todoRouter from './router/todos.js';
import { sequelize } from './db/database.js';
import { config } from './config.js';
import { TodoController } from './controller/todos.js';
import * as todoRepository from './data/todos.js';

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionSuccessStatus: 200,
  credentials: true,
};

export async function startServer(port) {
  console.log(port);
  app.use(express.json());
  app.use(cors(corsOption));
  app.use(morgan('tiny'));

  app.use('/todo', todoRouter(new TodoController(todoRepository)));

  app.use((req, res, next) => {
    res.sendStatus(404);
  });

  app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(error.status || 500).json({ message: error.message });
  });

  await sequelize.sync();

  console.log('Server is started....');
  const server = app.listen(port);
  return server;
}

export async function stopServer(server) {
  return new Promise((resolve, reject) => {
    server.close(async () => {
      try {
        await sequelize.close();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
}
