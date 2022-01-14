export class TodoController {
  constructor(todoRepository) {
    this.todos = todoRepository;
  }

  getTodos = async (req, res) => {
    const data = await this.todos.getAll();
    res.status(200).json(data);
  };

  createTodo = async (req, res, next) => {
    const { contents } = req.body;
    const todo = await this.todos.create(contents);
    res.status(201).json(todo);
  };

  deleteTodo = async (req, res, next) => {
    const id = req.params.id;
    const todo = await this.todos.getById(id);
    if (!todo) {
      return res
        .status(404)
        .json({ message: `해당 아이디가 없습니다 : ${id}` });
    }
    await this.todos.remove(id);
    res.sendStatus(204);
  };
}
