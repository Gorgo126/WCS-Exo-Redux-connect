import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import CounterReducer from './CounterReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
    CounterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );


