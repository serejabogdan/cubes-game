import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';

const store = createStore(rootReducer);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
