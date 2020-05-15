import React from 'react';

import ToDoListItem from './todo-list-item';



const ToDoList = ({todos}) => {
    const elements = todos.map((item) => {
        return (
            <li>
                <ToDoListItem 
                    label={item.label}
                    importent={item.importent} />
            </li>
        );
    })

    return (
        <ul>
            {elements}
        </ul>
    );
}

export default ToDoList;