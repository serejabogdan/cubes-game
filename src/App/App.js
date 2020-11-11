import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App container">
      {props.isModalOpen && <Modal />}
      <Header />
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen
  };
};

export default connect(mapStateToProps, null)(App);
