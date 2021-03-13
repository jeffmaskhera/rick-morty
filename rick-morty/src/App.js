import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import './css/styles.css';

import Routes from './routes/index';

function App() {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>

      // <Routes/>
  );
}

export default App;
