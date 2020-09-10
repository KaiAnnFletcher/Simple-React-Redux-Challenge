import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo"

const TodoList = ({ todos, deleteTodo }) => (
    <ul>
        {todos.map(todo => 
          <Todo key={todo.id} {...todo}  onClick={() => deleteTodo(todo.id)} />
        )}
    </ul>
)

TodoList.propTypes = {
todos: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
).isRequired,
deleteTodo: PropTypes.func.isRequired
}

export default TodoList