import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { deleteTodo } from "../actions"


const Todo = ({ text, deleteTodo, id }) => {
    
    return(
    <div>
            <li>{text}</li>
            <button type="submit" onClick={(text) => deleteTodo(text)}>Delete</button>
            
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
            onClick: PropTypes.func.isRequired
    
    }

export default connect(
    null,
    mapDispatchToProps
) (Todo)