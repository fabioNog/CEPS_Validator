import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import cepCycleReducer from '../cepCycle/cepReducer'



const rootReducer = combineReducers({
    cepCycle: cepCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;