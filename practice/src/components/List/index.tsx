import { FC } from 'react';

import { Task } from 'App';

interface ListType {
  handleClick: (number: number) => void;
  tasks: Task[];
}

const List: FC<ListType> = ({ tasks, handleClick }) => {
  return (
    <ul>
      {tasks.map(({ title, id }) => {
        return (
          <div key={id}>
            <li>{title}</li>
            <button onClick={() => handleClick(id)}>삭제</button>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
