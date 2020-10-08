
import React from 'react';

import { Provider } from 'react-redux';
import cityReducer from './cepCycle/reducers/cityReducer';

import {combineReducers, createStore} from 'redux' 


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'
import Login from './components/login'


const reducer = combineReducers({
  field: cityReducer    
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