

const INITIAL_STATE = {
    modules: 
        {
            id: 1,
            cidade: "Testando Redux",
            cep: "Testando Cep"
        }

}

const  reducer = (state = INITIAL_STATE, action) => {
   /*  if(action.type === "TOGGLE_LESSON"){ */
        return {
            ...state, 
        }
};


export default reducer;