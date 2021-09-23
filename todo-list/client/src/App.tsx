import React from 'react';
import './App.css';
import Header from './components/Header';
import backImg from './img/back.png'

function App() {
  return (
    <>
      <img src={backImg} alt="배경" width='100%' height='1305vh' />
      <Header />
    </>
  );
}

export default App;
