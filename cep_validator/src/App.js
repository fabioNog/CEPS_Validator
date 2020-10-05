import React from 'react';
import { Provider } from 'react-redux';
import store from './main/reducers';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './routes'



function App() {
  return (
      <Router>
        <Routes/>
      </Router>
  );
}

export default App;