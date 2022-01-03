import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';
import todoRouter from './router/todos.js';
import { sequelize } from './db/database.js';
import { config } from './config.js';

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/todo', todoRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(error.status || 500).json({ message: error.message });
});

sequelize.sync().then(() => {
  console.log(`Server is started ...... ${new Date()}`);
  app.listen(config.port, () => {
    console.log(`${config.port}`);
  });
});
