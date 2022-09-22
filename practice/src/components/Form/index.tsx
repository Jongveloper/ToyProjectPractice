import React, { FC } from 'react';

interface FormType {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  taskTitle: string;
}

const Form: FC<FormType> = ({ handleChange, handleClick, taskTitle }) => {
  return (
    <>
      <input
        onChange={handleChange}
        type="text"
        placeholder="할 일을 입력하세요"
        value={taskTitle}
      />
      <button onClick={handleClick}>등록</button>
    </>
  );
};

export default Form;
