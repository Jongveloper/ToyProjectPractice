import React, { memo } from 'react';

const TodoAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-from" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="해야할 일을 입력하세요"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default TodoAddForm;
