import React from 'react'
import PropTypes from 'prop-types'
import TodoDelete from "./TodoDelete"
import Todo from './Todo'
//import { toggleTodo } from '../actions'
//import { deleteTodo } from '../actions'


const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ul>
        {todos.map(todo => 
          <div
          key={todo.id}
          style={{
          display: 'flex',
          margin: '4px'
        }}
        >

        <Todo key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        />

        <TodoDelete
        onClick={() => deleteTodo(todo.id)}
        />
        </div>
        )}  
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
// TodoList.propTypes = {
// todos: PropTypes.arrayOf(
//     PropTypes.object)
// }

export default TodoList