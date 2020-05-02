import React from 'react';
import ToDoListItem from '../to-do-list-item/To-do-list-item';
import './ToDoList.css';

const ToDoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li className='list-group-item' key={id}><ToDoListItem
                {...itemProps}
            />
                <div className='wrap'>
                    <i className="fas fa-trash-alt delete"></i>
                    <i className="fas fa-exclamation exclamation"></i>
                </div>
            </li>

        )
    })

    return (
        <ul className="list-group to-do-list">
            {elements}
        </ul>
    );

};

export default ToDoList;