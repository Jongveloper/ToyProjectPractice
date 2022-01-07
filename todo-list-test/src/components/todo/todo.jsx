import React, { memo } from 'react';

const Todo = memo(({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li>
      <span data-testid="todo">{todo.name}</span>
      <button title="삭제" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Todo;
