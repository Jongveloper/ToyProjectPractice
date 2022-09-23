import React, { useState } from 'react';

import Form from 'components/Form';
import List from 'components/List';

export interface Task {
  id: number;
  title: string;
}

interface Tasks {
  newId: number;
  taskTitle: string;
  tasks: Task[];
}

const App = () => {
  const [state, setState] = useState<Tasks>({
    newId: 100,
    taskTitle: '',
    tasks: [],
  });

  const [grab, setGrab] = useState<any>();

  const { newId, taskTitle, tasks } = state;

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  };

  const handleClickAddTask = () => {
    setState({
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    });
  };

  const handleClickDeleteTask = (id: number) => {
    setState({
      ...state,
      tasks: tasks.filter(task => task.id !== id),
    });
  };

  const _onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const _onDragStart = (e: React.DragEvent<Element>) => {
    setGrab(e.target);
    (e.target as Element).classList.add('grabbing');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', '0');
  };

  const _onDragEnd = (e: React.DragEvent<Element>) => {
    (e.target as Element).classList.remove('grabbing');

    e.dataTransfer.dropEffect = 'move';
  };

  const _onDrop = (e: React.DragEvent<Element>) => {
    const grabPosition = Number(grab.dataset.position);
    const targetPosition = Number(
      (e.target as HTMLDivElement).dataset.position
    );

    const _list = tasks;

    _list[grabPosition] = _list.splice(
      targetPosition,
      1,
      _list[grabPosition]
    )[0];

    setState({
      ...state,
      tasks: _list,
    });
  };

  return (
    <>
      <Form
        taskTitle={taskTitle}
        handleChange={handleChangeTitle}
        handleClick={handleClickAddTask}
      />
      <List
        onDragOver={_onDragOver}
        onDragStart={_onDragStart}
        onDragEnd={_onDragEnd}
        onDrop={_onDrop}
        tasks={tasks}
        handleClick={handleClickDeleteTask}
      />
    </>
  );
};
export default App;
