import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    render() {

        const { label, important = false } = this.props;

        const style = {
            color: important ? 'orange' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
    
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item" 
                    style = { style }> 
                    { label } 
               </span>
    
               <button type="button"
                       className="btn btn-outline-info btn-sm float-right">
                   <i className="fa fa-exclamation" />
               </button>
    
               <button type="button"
                       className="btn btn-outline-warning btn-sm float-right">
                   <i className="fa fa-trash" />
               </button>
    
            </span>
        );    
    }
};