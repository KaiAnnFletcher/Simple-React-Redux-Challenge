

const todos = (state = [], action) => {
     switch (action.type) {
        case  "ADD_TODO":
            return [
               ...state,  {  
              id: action.id,
              text: action.text,
              completed: false
            }
        ]
        case "DELETE_TODO":
            return [  
                //state.slice(0, action.id).concat(state.slice(action.id + 1, state.length))
                    ...state.slice(0, action.id),
                    ...state.slice(action.id +1, state.length)
                    //state.filter(todo => todo.id !== action.id), 
                    //state.ids.slice(0, action.id),
                    //state.ids.slice(action.id + 1)
                    //state.splice(action.id, 0)              
            ]          
        case "TOGGLE_TODO":
            return [
                state.map(todo =>
                    (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
                    )
            ]
            
            default:
                return state
    }
}

export default todos

// Previously I had the return for the deleteTodo function as an object and I switched it to return a final array (of listed objects?)
//Issue is that it  adds a blank line instead of deleting the original
//Why?
// I copied state - once I removed the copy of state, it deleted the original (this makes sense)
//Problem: Delete button does not disappear (this makes sense as well)
//I beleieve this is because todo.id is not being called in the TodoDelete at the time
//Delete function should be in todoList so that we can access todo.id - > moving function