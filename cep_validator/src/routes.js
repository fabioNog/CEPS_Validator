
import React from 'react';

import { Provider } from 'react-redux';
import cityReducer from './cepCycle/reducers/cityReducer';
import cepReducer from './cepCycle/reducers/cep_Reducer';

import {combineReducers, createStore} from 'redux' 


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'
import Login from './components/login'


const reducer = combineReducers({
  city: cityReducer,
  cep: cepReducer    
}) 

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer,devTools)

export default function MainRoutes(){
  return(
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Provider>
  )
}