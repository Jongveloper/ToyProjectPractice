import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
