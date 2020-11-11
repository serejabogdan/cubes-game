import React from 'react';
import Playground from './Playground/Playground';
import ResultTable from './ResultTable/ResultTable';
import './Main.css';
import {connect} from 'react-redux';

const Main = (props) => {
  return <div className="main">{props.mainContent ? <Playground /> : <ResultTable />}</div>;
};

const mapStateToProps = (state) => {
  return {
    mainContent: state.mainContent
  };
};

export default connect(mapStateToProps)(Main);
