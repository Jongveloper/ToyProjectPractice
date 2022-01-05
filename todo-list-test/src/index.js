import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import TodoPresenter from './app/todo_presenter';

const todoPresenter = new TodoPresenter([
  { id: 1, name: 'Learn React' },
  { id: 2, name: 'Learn Nodejs' },
  { id: 3, name: 'Learn MySql' },
]);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={todoPresenter} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
