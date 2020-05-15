import React from 'react';

import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    
    const todoData = [
        { label: "Learn React", important: false, id:1 },
        { label: "Learn English", important: true, id: 2 },
        { label: "Dring tea", important: false, id: 3 },
    ];


    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
               
            <ToDoList todos={ todoData }/>
        </div>
    );
};

export default App;