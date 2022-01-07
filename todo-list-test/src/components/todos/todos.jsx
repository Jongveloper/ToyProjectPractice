import React from 'react';
import Todo from '../todo/todo';
import TodoAddForm from '../Form/TodoAddForm';

const Todos = ({ todos, onDelete, onAdd }) => {
  return (
    <div>
      <TodoAddForm onAdd={onAdd} />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
