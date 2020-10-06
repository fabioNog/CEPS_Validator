

const INITIAL_STATE = {
    activeLesson: [],
    activeModule: [],
    modules: [
        {
            id: 1,            
            cidade: "Alguma Cidade",
            cep: "Algum Cep"

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