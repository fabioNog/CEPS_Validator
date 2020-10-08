
import React from 'react';

import { Provider } from 'react-redux';
/* import { store }  from './cepCycle/cepReducer'; */



import {combineReducers, createStore} from 'redux' 


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'
import Login from './components/login'


const reducer = combineReducers({
  field: () => ({value: 'opa'})
})

export default function MainRoutes(){
  return(
    <Provider store={createStore(reducer )}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Provider>
  )
}