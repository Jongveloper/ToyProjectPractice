import TodoPresenter from '../todo_presenter';

describe('TodoPresenter', () => {
  const todos = [
    { id: 1, name: 'Learn Jest' },
    { id: 2, name: 'Learn Coding' },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new TodoPresenter(todos);
    update = jest.fn();
  });

  it('투두리스트를 받아옵니다.', () => {
    expect(presenter.getTodos()).toEqual(todos);
  });

  it('투두리스트를 생성합니다.', () => {
    presenter.add('Learn Node', update);

    expect(presenter.getTodos()[2].todo).toBe('Learn Node');
    checkUpdateIsCalled();
  });

  it('투두리스트를 삭제합니다.', () => {
    presenter.delete(todos[0], update);

    expect(presenter.getTodos().length).toBe(1);
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getTodos());
  }
});
