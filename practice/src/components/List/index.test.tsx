import { fireEvent, render } from '@testing-library/react';
import List from '.';

describe('List', () => {
  const handleClick = jest.fn();

  const tasks = [{ id: 1, title: '알고리즘' }];

  const renderList = () => {
    return render(<List handleClick={handleClick} tasks={tasks} />);
  };

  it('리스트가 렌더링됩니다.', () => {
    const { container } = renderList();

    tasks.forEach(item => {
      expect(container).toHaveTextContent(item.title);
    });
  });

  it('삭제 버튼을 누르면 함수가 호출됩니다', () => {
    const { getByText } = renderList();

    fireEvent.click(getByText('삭제'));

    expect(handleClick).toBeCalled();
  });
});
