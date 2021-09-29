import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';

export interface todoInterface {
  contents: string;
}

export const getTodoDB = () => {
  return function (dispatch: any) {
    axios
      .get('http://localhost:8080/todo')
      .then((res) => {
        console.log(res);
        let todoList = res.data;
        dispatch(getTodo(todoList));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const addTodoDB = (contents: any) => {
  console.log(contents);
  return function (dispatch: any) {
    axios
      .post('http://localhost:8080/todo/create', { contents: contents })
      .then((res) => {
        dispatch(addTodo(contents));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteTodoDB = (todoId: any) => {
  console.log(todoId);
  return function (dispatch: any) {
    axios
      .delete(`http://localhost:8080/todo/${todoId}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const initialState = {
  list: [''],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const contents = action.payload;
      console.log(contents);
      state.list.push(contents);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      console.log('삭제');
    },
    getTodo: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, getTodo } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
