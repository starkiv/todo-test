import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, importent = false }) => {

    const style = {
        color: importent ? 'tomato' : 'black'
    };

    return <span
                className="todo-list-item" 
                style = { style }> 
                { label } 
           </span>
};

export default TodoListItem;