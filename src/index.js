import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
    return (<div>
        <AppHeader />
        <SearchPanel />
        <ToDoList />
    </div>);
};

ReactDOM.render(<App />,
    document.getElementById('root'));