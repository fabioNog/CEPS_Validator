function changeCity(e){
    console.log('change')
    return{
        type: 'CITY_CHANGE',
        cidade: e.target.value
    } 
}

export default changeCity;