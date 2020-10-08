

const INITIAL_STATE = { value: 'opa'}

export default function(state = INITIAL_STATE,action){
    switch(action.type){
        case 'CITY_CHANGE':
            return {value: action.payload}
        default:
            return state
    }
}