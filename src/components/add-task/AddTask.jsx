import React,{useRef} from 'react';
import './AddTask.css';

const AddTask = ({addtask}) => {
   
    const input = useRef();
    const addEvwnt = () =>{
        addtask(input);
        input.current.value = '';
    }

    return(
        <div className='input-group'>
            <input ref={input} className='form-control' type="text"/>
            <button onClick={() => addEvwnt()} className='btn btn-secondary'>add item</button>
        </div>
    );
};

export default AddTask;