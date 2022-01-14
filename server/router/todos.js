import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';
import * as todoController from '../controller/todos.js';

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

const validateTodo = [
  body('contents')
    .trim()
    .isLength({ min: 2 })
    .withMessage('2글자 이상 입력해주세요!'),
  validate,
];

export default function todosRouter(todoController) {
  router.get('/', todoController.getTodos);
  router.post('/create', validateTodo, todoController.createTodo);
  router.delete('/:id', todoController.deleteTodo);

  return router;
}
