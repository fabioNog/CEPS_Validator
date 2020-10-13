

const INITIAL_STATE = { value: 'Faltou o Cep?'}

export default function(state = INITIAL_STATE,action){
    switch(action.type){
        case 'CEP_CHANGE':
            return {value: action.payload}
        default:
            return state
    }
}