import { createStore } from 'redux';

import {combineReducers} from 'redux' 


const INITIAL_STATE = {
    activeLesson: [],
    activeModule: [],
    modules: [
        {
            id: 1,
            title: "Testando Redux",
            lessons: [
                { id: 1, title: "Primeira Aula" },
                { id: 2, title: "Segunda Aula" },
            ]
        },
        {
            id: 2,
            title: "Testando Laravel",
            lessons: [
                { id: 1, title: "Primeira Aula" },
                { id: 2, title: "Segunda Aula" },
            ]
        },
    ]
}

const  reducer = (state = INITIAL_STATE, action) => {
   /*  if(action.type === "TOGGLE_LESSON"){ */
        return {
            ...state, 
            activeLesson: action.lesson, 
            activeModule: action.module  
        }
};


export default reducer;