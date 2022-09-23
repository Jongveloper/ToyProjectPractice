import { FC } from 'react';

import { Task } from 'App';

interface ListType {
  handleClick: (number: number) => void;
  tasks: Task[];
  onDragOver?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent<Element>) => void;
  onDragStart?: (e: React.DragEvent<Element>) => void;
  onDrop?: (e: any) => void;
}

const List: FC<ListType> = ({
  tasks,
  handleClick,
  onDragOver,
  onDragEnd,
  onDragStart,
  onDrop,
}) => {
  const style = {
    display: 'flex',
  };

  return (
    <ul>
      {tasks.map(({ title, id }, idx) => {
        return (
          <div
            draggable
            style={style}
            key={id}
            data-position={idx}
            onDragOver={(e: any) => onDragOver!(e)}
            onDragEnd={(e: any) => onDragEnd!(e)}
            onDragStart={(e: any) => onDragStart!(e)}
            onDrop={(e: any) => onDrop!(e)}
          >
            <li data-position={idx}>{title}</li>
            <button onClick={() => handleClick(id)}>삭제</button>
          </div>
        );
      })}
    </ul>
  );
};

export default List;
