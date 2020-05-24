import React from 'react'
import './tascs.css';

const tasks = ({ left,performed }) => {

    return (
        <>
            <p className='label'>{left} more to do, {performed} done</p>
        </>
    );
};
export default tasks;