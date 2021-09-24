import React from 'react';
import './App.css';
import AddTodo from './components/AddTodoForm';
import Header from './components/Header';
import backImg from './img/back.png'

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundImage: `url(${backImg})` }}>
      <Header />
      <AddTodo />
    </div>
  );
}

export default App;
