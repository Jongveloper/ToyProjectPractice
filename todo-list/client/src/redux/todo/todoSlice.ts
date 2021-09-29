import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface todoInterface {
  contents: string;
  id: number;
}

const initialState: todoInterface[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoInterface>) => {
      state.push(action.payload);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
