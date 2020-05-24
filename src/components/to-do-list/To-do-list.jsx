import React from 'react';
import ToDoListItem from '../to-do-list-item/To-do-list-item';
import './ToDoList.css';

const ToDoList = ({ todos, deleteItem, important, doneCheck}) => {



    const elements = todos.map((item) => {
        const { id, done, ...itemProps } = item;
        return (
            <li  key={id}>
                <ToDoListItem
                    {...itemProps}
                    doneCheck={doneCheck}
                    id={id}
                    done={done}
                />
                <div className='wrap'>
                    <i onClick={() => deleteItem(id)} className="fas fa-trash-alt delete"></i>
                    <i onClick={() => important(id)} className="fas fa-exclamation exclamation"></i>
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