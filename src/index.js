import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

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

ReactDOM.render(<App />,
    document.getElementById('root'));