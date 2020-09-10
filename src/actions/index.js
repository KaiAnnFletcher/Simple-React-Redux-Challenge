let nextTodoId = 0

export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    payload: text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

//Likely will not need this since not part of the functionality asked for
// export const toggleToDo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })

export const deleteTodo = id => ({
    type: "DELETE_TODO",
    payload: id
})

export const VisibilityFilters = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_DELETED: 'SHOW_DELETED',
}