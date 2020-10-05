
import React from 'react';

import { Provider } from 'react-redux';
import store from './cepCycle/cepReducer';


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'

export default function MainRoutes(){
  return(
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  )
}