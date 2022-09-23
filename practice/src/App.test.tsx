import { render, fireEvent } from '@testing-library/react';
import App from 'App';

describe('App', () => {
  const todoInWriting = {
    target: { value: '알고리즘' },
  };

  const Tasks = [
    {
      id: 1,
      title: '알고리즘',
    },
    {
      id: 2,
      title: '타입스크립트',
    },
  ];

  const renderApp = () => {
    return render(<App />);
  };

  const renderAppWithTasks = () => {
    const result = renderApp();
    const { getByRole, getByText } = result;

    Tasks.forEach(({ title }) => {
      fireEvent.change(getByRole('textbox'), { target: { value: title } });

      fireEvent.click(getByText('등록'));
    });

    return result;
  };

  describe('input', () => {
    it('input이 보여집니다.', () => {
      const { getByPlaceholderText } = renderApp();

      expect(getByPlaceholderText('할 일을 입력하세요')).not.toBeNull();
    });

    it('알고리즘을 입력하면 value가 알고리즘이 됩니다.', () => {
      const { getByPlaceholderText } = renderApp();

      const input = getByPlaceholderText('할 일을 입력하세요');

      fireEvent.change(input, todoInWriting);

      expect(input).toHaveDisplayValue('알고리즘');
    });
  });

  describe('button', () => {
    it('클릭하면 value가 ""이 됩니다.', () => {
      const { getByPlaceholderText, getByText } = renderApp();

      const input = getByPlaceholderText('할 일을 입력하세요');

      fireEvent.change(input, todoInWriting);

      fireEvent.click(getByText('등록'));

      expect(input).toHaveDisplayValue('');
    });
  });

  describe('list', () => {
    it('해당 tasks의 title이 보여집니다.', () => {
      const { container } = renderAppWithTasks();

      Tasks.forEach(({ title }) => {
        expect(container).toHaveTextContent(title);
      });
    });

    describe('삭제 버튼을 클릭하면', () => {
      it('해당 task가 삭제됩니다.', () => {
        const { container, getAllByText } = renderAppWithTasks();

        fireEvent.click(getAllByText('삭제')[0]);

        expect(container).not.toHaveTextContent(Tasks[0].title);
      });
    });
  });
});
