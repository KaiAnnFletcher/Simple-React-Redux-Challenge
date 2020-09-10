

const todos = (state = [], action) => {
     switch (action.type) {
        case  "ADD_TODO":
            return {
                ...state,
                    
                    id: [...state.id, action.payload]
                
            }
        case "DELETE_TODO":
            return {
                
                id: [
                   ...state.id.filter(id => id !== action.payload) 
                ]
            };
            default:
                return state
    }
}

export default todos