import React from 'react';

import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';

import './app.css';

const todoData = [
    { label: "Learn React", importent: true, id:1 },
    { label: "Learn English", importent: false, id: 2 },
    { label: "Dring tea", importent: false, id: 3 },
];

const App = () => {
    return (<div>
        <AppHeader />
        <SearchPanel />
        <ToDoList todos={ todoData }/>
    </div>);
};

export default App;