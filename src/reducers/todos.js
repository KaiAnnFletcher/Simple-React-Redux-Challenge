

const todos = (state = [], action) => {
     switch (action.type) {
        case  "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text   
            }
            ]
        case "DELETE_TODO":
            return {
                
                id: [
                   ...state.filter(id => id !== action.id) 
                ]
            };
            default:
                return state
    }
}

export default todos