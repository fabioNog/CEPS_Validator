
import React from 'react';

import { Provider } from 'react-redux';
import store from './cepCycle/cepReducer';

import {createStore} from 'redux' 
/* import {combineReducers, createStore} from 'redux'  */


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'

/* const store = combineReducers({
  field: () => ({value: 'opa'})
}) */


export default function MainRoutes(){
  return(
    <Provider store={createStore(store)}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="list" element={<List />} /> */}
      </Routes>
    </Provider>
  )
}