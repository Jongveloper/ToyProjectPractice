export default class TodoPresenter {
  constructor(todos) {
    this.todos = todos;
  }
  getTodos() {
    return this.todos;
  }

  delete(todo, update) {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
    update(this.todo);
  }

  add(todo, update) {
    this.todos = [...this.todos, { id: Date.now(), todo }];
    update(this.todos);
  }
}
