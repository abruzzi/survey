import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './states/store';

import 'antd/dist/antd.css';

import App from './App';

const index = document.querySelector('#app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, index);