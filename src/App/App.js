import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

function App() {
  return (
    <div className="App container">
      <Modal />
      <Header />
      <Main />
    </div>
  );
}

export default App;
