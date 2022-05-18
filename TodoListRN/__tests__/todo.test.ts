import {addTodo, todo} from '../src/slices/todo';

describe('todoSlice', () => {
  describe('reducers', () => {
    const initialState = {loading: false, todo: []};

    it('sets fetching true when addTodo is pending', () => {
      const action = {type: addTodo.pending.type};
      const state = todo.reducer(initialState, action);
      expect(state).toEqual({loading: true, todo: []});
    });

    // it('sets the loading and todo when addTodo is fulfilled', () => {
    //   const action = {
    //     type: addTodo.fulfilled.type,
    //     payload: {loading: false, todo: [{id: 1, todo: 'new Todo'}]},
    //   };
    //   const state = todo.reducer(initialState, action);
    //   expect(state).toEqual({
    //     loading: false,
    //     todo: [{id: 1, todo: 'new Todo'}],
    //   });
    // });
  });
});
