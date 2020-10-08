function changeCep(e){
    console.log('change')
    return{
        type: 'CEP_CHANGE',
        cep: e.target.value
    } 
}

export default changeCep;