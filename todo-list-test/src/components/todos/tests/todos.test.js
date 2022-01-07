import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Todos from '../todos';

describe('Todos component', () => {
  const todos = [
    { name: 'Learning React', id: 1 },
    { name: 'Learning Nodejs', id: 2 },
  ];
  let TodoComponent;
  let onDelete;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    onDelete = jest.fn();
    TodoComponent = <Todos todos={todos} onDelete={onDelete} onAdd={onAdd} />;
  });

  it('renders', () => {
    const component = renderer.create(TodoComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  const setup = () => render(TodoComponent);

  it('할 일을 등록합니다.', () => {
    setup();
    const input = screen.getByPlaceholderText('해야할 일을 입력하세요');
    const button = screen.getByText('Add');
    const newTodo = 'Learning nextjs';
    userEvent.type(input, newTodo);
    userEvent.click(button);
    expect(onAdd).toHaveBeenCalledWith(newTodo);
  });

  it('todo를 삭제합니다.', () => {
    setup();
    const button = screen.getByTitle('delete')[0];
    userEvent.click(button);
    expect(onDelete).toHaveBeenCalledWith(todos[0]);
  });
});
