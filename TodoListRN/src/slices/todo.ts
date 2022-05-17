import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';

const delay = (time: number, value: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addTodo = createAsyncThunk('post/todo', async (data: any) => {
  return await delay(500, {
    todo: data.todo,
    id: data.id,
  });
});

export const deleteTodo = createAsyncThunk(
  'delete/todo',
  async (id: number) => {
    return await delay(500, {
      id,
    });
  },
);

export interface Todo {
  id: number;
  todo: string;
}

export interface InitialState {
  loading: boolean;
  todo: Todo[];
}
const initialState: InitialState = {
  loading: false,
  todo: [],
};

export const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: {
    [addTodo.pending.type]: (state, action) => {
      state.loading = true;
    },
    [addTodo.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.todo.push(action.payload);
    },
    [addTodo.rejected.type]: (state, action) => {
      state.loading = false;
    },
    [deleteTodo.pending.type]: (state, action) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled.type]: (state, action) => {
      const idx = state.todo.findIndex(r => r.id === action.payload.id);
      if (idx !== -1) {
        state.todo.splice(idx, 1);
      }
    },
    [deleteTodo.rejected.type]: (state, action) => {
      state.loading = false;
    },
  },
});
