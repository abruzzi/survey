import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Hello Q and A</h1>
  </div>
);

const app = document.querySelector('#app');

ReactDOM.render(<App/>, app);