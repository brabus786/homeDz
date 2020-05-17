import React,{useState} from 'react';
import './to-do-list-item.css';

const ToDoListItem = ({label,important = false}) => {

    //console.log(important);

    const[stateDone,setStateDone] = useState(false);
    
    let className = ''
    if(stateDone){
        className='done';
    }
    if(important){
        className += ' important';
    }
    

    const labelClick = () => {
        console.log(`Done: ${label}`)
        setStateDone(!stateDone);
    }

    return (
        <span 
        className={className} 
        onClick={labelClick}
        >{label}</span>
    );

};

export default ToDoListItem;