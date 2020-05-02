import React from 'react';

const ToDoListItem = ({label,important = false}) => {

    const styles = {
        color:important?'tomato':'black'
    }

    return (
        <span style={styles}>{label}</span>
    );

};

export default ToDoListItem;