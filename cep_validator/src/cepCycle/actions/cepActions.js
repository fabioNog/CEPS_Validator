function changeCep(e){

    return{
        type: 'CEP_CHANGE',
        payload: e.target.value
    } 
}

export default changeCep;