import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({todos, onDeleted}) => {
    
    const elements = todos.map((item) => {

        const { id, ...listItem} = item;

        return (
            <li key={id} className="list-group-item">
                <ToDoListItem { ...listItem } 
                onDeleted={() => onDeleted(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default ToDoList;
