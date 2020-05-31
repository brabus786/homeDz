import React from 'react';
import './SearchPanel.css';
import uuid from 'react-uuid';

const SearchPanel = ({ chenge,onFilterChange,filter}) => {

    const btn = [
        { name: 'all', label: 'all' },
        { name: 'active', label: 'active' },
        { name: 'done', label: 'done' },
    ]

    const arrBtn = btn.map(({ name }) => {
        let classes = 'btn btn-outline-secondary';
        if(name === filter) classes = 'btn btn-info';
        return <button key={uuid()} onClick={() => onFilterChange(name)} className={classes}>{name}</button>
    })

    return (
        <div className='wrapInput'>
            <input onChange={(e) => chenge(e)} className="form-control input" type="text" placeholder='search panel' />
            {arrBtn}
        </div>

    );

};

export default SearchPanel;