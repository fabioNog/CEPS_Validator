function changeCity(e){
    console.log('change')
    return{
        type: 'CITY_CHANGE',
        payload: e.target.value
    } 
}

export default changeCity;