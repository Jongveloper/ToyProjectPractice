import {addTodo, deleteTodo, todo} from '../src/slices/todo';

describe('todoSlice', () => {
  describe('reducers', () => {
    const initialState = {loading: false, todo: [{id: 2, todo: 'todo2'}]};

    it('sets loading true when addTodo is pending', () => {
      const action = {type: addTodo.pending.type};
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({loading: true, todo: [{id: 2, todo: 'todo2'}]});
    });

    it('sets the loading false and todo when addTodo is fulfilled', () => {
      const action = {
        type: addTodo.fulfilled.type,
        payload: {id: 1, todo: 'new Todo'},
      };
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({
        loading: false,
        todo: [
          {id: 2, todo: 'todo2'},
          {id: 1, todo: 'new Todo'},
        ],
      });
    });

    it('sets fetching false when addTodo is rejected', () => {
      const action = {type: addTodo.rejected.type, payload: {}};
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({
        loading: false,
        todo: [{id: 2, todo: 'todo2'}],
      });
    });
    it('sets loading true when deleteTodo is pending', () => {
      const action = {type: deleteTodo.pending.type};
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({
        loading: true,
        todo: [{id: 2, todo: 'todo2'}],
      });
    });
    it('sets the loading false and todo when deleteTodo is fulfilled', () => {
      const action = {
        type: deleteTodo.fulfilled.type,
        payload: {id: 2},
      };
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({
        loading: false,
        todo: [],
      });
    });
    it('sets the loading true when deleteTodo is rejected', () => {
      const action = {type: deleteTodo.rejected.type};
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({
        loading: false,
        todo: [{id: 2, todo: 'todo2'}],
      });
    });
  });
});
