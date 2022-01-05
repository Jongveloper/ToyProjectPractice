import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoAddForm from '../TodoAddForm';
import renderer from 'react-test-renderer';

describe('TodoAddForm', () => {
  it('renders', () => {
    const component = renderer.create(<TodoAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('투두리스트 등록', () => {
    let onAdd;
    let input;
    let button;
    const setup = () => render(<TodoAddForm onAdd={onAdd} />);
    beforeEach(() => {
      onAdd = jest.fn();
    });

    it('input에 할 일을 입력 후 add라는 버튼 클릭 시 onAdd가 input에 입력된 이름과 함께 호출', () => {
      setup();
      input = screen.getByPlaceholderText('해야할 일을 입력하세요');
      button = screen.getByText('Add');
      userEvent.type(input, '새로운 투두');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('새로운 투두');
    });

    it('input이 비면 안됩니다', () => {
      setup();
      input = screen.getByPlaceholderText('해야할 일을 입력하세요');
      button = screen.getByText('Add');
      userEvent.type(input, '');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
