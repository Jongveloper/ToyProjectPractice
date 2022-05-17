import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {todo} from '../slices/todo';

const rootReducer = combineReducers({
  todo: todo.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
