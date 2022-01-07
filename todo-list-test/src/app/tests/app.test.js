import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import TodoPresenter from '../todo_presenter';

describe('App', () => {
  let presenter;
  beforeEach(() => {
    presenter = new TodoPresenter([
      { id: 1, name: 'Learning React' },
      { id: 2, name: 'Learning Nodejs' },
      { id: 3, name: 'Learning Nextjs' },
    ]);
  });

  it('renders', () => {
    const component = renderer.create(<App presenter={presenter} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  const setup = () => render(<App presenter={presenter} />);

  it('todo를 추가합니다', () => {
    setup();
    const newTodo = 'Learning JavaScript';
    const input = screen.getByPlaceholderText('해야할 일을 입력하세요');
    const button = screen.getByText('Add');
    userEvent.type(input, newTodo);
    userEvent.click(button);
    const addedTodo = screen.getAllByTestId('todo');
    expect(addedTodo.innerHTML).toBe(newTodo);
  });

  it('todo를 삭제합니다.', () => {
    setup();
    const first = screen.getAllByTitle('삭제')[0];
    userEvent.click(first);
    const next = screen.getAllByTestId('todo')[0];
    expect(next.innerHTML).not.toBe('Learning React');
  });
});
