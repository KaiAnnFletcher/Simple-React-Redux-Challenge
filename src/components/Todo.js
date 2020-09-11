import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteTodo } from "../actions"


const Todo = ({ text, deleteTodo }) => {
    return(
    <div>
            <li>{text}</li>
            <button onClick={() => deleteTodo(text)}>Delete</button>
            
    </div>  
    );
};

const mapDispatchToProps = dispatch => {
 return {
     deleteTodo: id => dispatch(deleteTodo(id))
 }
}

Todo.propTypes = {

            text: PropTypes.string.isRequired,
    
    }

export default connect(
    null,
    mapDispatchToProps
) (Todo)