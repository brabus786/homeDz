import React,{useState} from 'react';
import './to-do-list-item.css';

const ToDoListItem = ({label,important = false,id,doneCheck,done}) => {

 
    
    let className = ''
   
    if(important){
        className += ' important';
    }
    if(done){
        className += ' done';
    }

    return (
        <span 
        className={className} 
        onClick={() => doneCheck(id)}
        >{label}</span>
    );

};

export default ToDoListItem;