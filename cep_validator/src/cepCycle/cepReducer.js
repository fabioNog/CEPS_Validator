import { createStore } from 'redux';

import {combineReducers} from 'redux' 


const INITIAL_STATE = {
    modules: 
        {
            id: 1,
            cidade: "Testando Redux",
            cep: "Testando Cep"
        }

}

function reducer(state = INITIAL_STATE, action) {
    if(action.type === "TOGGLE_LESSON"){
        return {
            ...state, 
        }
    }

    return state;
    
}

const store = combineReducers(
  reducer
 )


export default store;