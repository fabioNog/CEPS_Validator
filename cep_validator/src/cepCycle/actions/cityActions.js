function changeCity(e){

    return{
        type: 'CITY_CHANGE',
        payload: e.target.value
    } 
}

export default changeCity;