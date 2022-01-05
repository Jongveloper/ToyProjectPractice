import React, { useCallback, useState } from 'react';

function App({ presenter }) {
  const [todos, setTodos] = useState(presenter.getTodos());

  const handleAdd = useCallback((todo) => {
    presenter.add(todo, setTodos);
  }, []);

  const handleDelete = useCallback((todo) => {
    presenter.delete(todo, setTodos);
  }, []);
  console.log(todos);
  return <div className="App">setting</div>;
}

export default App;
