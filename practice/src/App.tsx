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

  return (
    <>
      <Form
        taskTitle={taskTitle}
        handleChange={handleChangeTitle}
        handleClick={handleClickAddTask}
      />
      <List tasks={tasks} handleClick={handleClickDeleteTask} />
    </>
  );
};
export default App;
