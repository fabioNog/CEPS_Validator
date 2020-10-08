
import React from 'react';

import { Provider } from 'react-redux';
import cityReducer from './cepCycle/reducers/cityReducer';
import cepReducer from './cepCycle/reducers/cep_Reducer';

import {combineReducers, createStore, applyMiddleware} from 'redux' 
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'
import Login from './components/login'


const reducers = combineReducers({
  city: cityReducer,
  cep: cepReducer    
}) 

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers,devTools)

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