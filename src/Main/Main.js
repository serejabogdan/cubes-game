import React from 'react';
import Playground from './Playground/Playground';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Playground />
      <div className="main__results">
        <h2>Result</h2>
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Main;
