import * as todoRepository from '../data/todos.js';

export async function getTodos(req, res) {
  const data = await todoRepository.getAll();
  res.status(200).json(data);
}

export async function createTodo(req, res, next) {
  const { contents } = req.body;
  const todo = await todoRepository.create(contents);
  res.status(201).json(todo);
}

export async function deleteTodo(req, res, next) {
  const id = req.params.id;
  const todo = await todoRepository.getById(id);
  if (!todo) {
    return res.status(404).json({ message: `해당 아이디가 없습니다 : ${id}` });
  }
  await todoRepository.remove(id);
  res.sendStatus(204);
}
