import {combineReducers} from 'redux';
import {todo} from '../slices/todo';

const rootReducer = combineReducers({
  todo: todo.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
