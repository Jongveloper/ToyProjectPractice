import React, { useCallback, useState } from 'react';
import Todos from '../components/todos/todos';

function App({ presenter }) {
  const [todos, setTodos] = useState(presenter.getTodos());

  const handleAdd = useCallback((todo) => {
    presenter.add(todo, setTodos);
  }, []);

  const handleDelete = useCallback((todo) => {
    presenter.delete(todo, setTodos);
  }, []);

  console.log(todos);

  return (
    <>
      <Todos todos={todos} onAdd={handleAdd} onDelete={handleDelete} />
    </>
  );
}

export default App;
