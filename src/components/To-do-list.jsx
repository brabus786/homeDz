import React from 'react';
import ToDoListItem from './To-do-list-item';

const ToDoList = () => {
    return(
        <ul>
            <li><ToDoListItem label='I drinck coffe' /></li>
            <li><ToDoListItem
             label='I learn React' 
             important
             /></li>
        </ul>
    );
    
};

export default ToDoList;