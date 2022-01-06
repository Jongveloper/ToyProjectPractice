import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Todo from '../todo';

describe('Todo component', () => {
  const todo = { name: 'Learn React' };
  let onDelete;

  beforeEach(() => {
    onDelete = jest.fn();
  });

  it('renders', () => {
    const component = renderer.create(<Todo todo={todo} onDelete={onDelete} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Button Click', () => {
    const setup = () => render(<Todo todo={todo} onDelete={onDelete} />);

    it('투두리스트를 삭제합니다.', () => {
      setup();
      const button = screen.getByTitle('삭제');
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(todo);
    });
  });
});
