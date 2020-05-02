import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    return (
        <div className='wrapInput'>
            <input className="form-control input" type="text" placeholder='search panel' />
            <button type="button" className="btn-sm  btn btn-lg btn-primary" disabled>all</button>
            <button type="button" className="btn-sm btn-outline-secondary btn btn-secondary btn-lg" disabled>active</button>
            <button type="button" className="btn-sm btn-outline-secondary btn btn-secondary btn-lg" disabled>done</button>
        </div>

    );

};

export default SearchPanel;