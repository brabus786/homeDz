<<<<<<< HEAD
import React, { useState } from 'react';
import ToDoListItem from '../to-do-list-item/To-do-list-item';
import './ToDoList.css';

const ToDoList = ({ todos, deleteItem, important }) => {



    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
       
        return (
            <li  key={id}>
=======
import React,{useState} from 'react';
import ToDoListItem from '../to-do-list-item/To-do-list-item';
import './ToDoList.css';

const ToDoList = ({ todos }) => {
    const onClickImportant = () => {
        console.dir('sd');
      }
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;    
        return (
            <li className='list-group-item' key={id}>
>>>>>>> 14b24b0fbfe07f165ca4e04a0adaa1fb66de6a52
                <ToDoListItem
                    {...itemProps}
                />
                <div className='wrap'>
<<<<<<< HEAD
                    <i onClick={() => deleteItem(id)} className="fas fa-trash-alt delete"></i>
                    <i onClick={() => important(id)} className="fas fa-exclamation exclamation"></i>
=======
                    <i className="fas fa-trash-alt delete"></i>
                    <i onClick={onClickImportant} className="fas fa-exclamation exclamation"></i>
>>>>>>> 14b24b0fbfe07f165ca4e04a0adaa1fb66de6a52
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