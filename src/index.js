import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const todoData = [
    { label: "Learn React", importent: true },
    { label: "Learn English", importent: false },
    { label: "Dring tea", importent: false },
];

const App = () => {
    return (<div>
        <AppHeader />
        <SearchPanel />
        <ToDoList todos={ todoData }/>
    </div>);
};

ReactDOM.render(<App />,
    document.getElementById('root'));