import React, { Component } from 'react';

import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component {
    
    state = { 
        todoData: [
            { label: "Learn React", important: false, id:1 },
            { label: "Learn English", important: true, id: 2 },
            { label: "Dring tea", important: false, id: 3 },
        ]
    };

    deletedItem = (id) => {
        this.setState (( {todoData} ) => {
            const index = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                   
                <ToDoList todos={ this.state.todoData }
                onDeleted={ this.deletedItem }/>
            </div>
        );
    };
};