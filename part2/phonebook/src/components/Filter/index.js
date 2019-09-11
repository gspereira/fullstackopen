import React from 'react';

const Filter = props => {
    return (
        <div>
            <div>
                filter shown with: <input value={props.filter} onChange={props.handleFilterChange} />
            </div>
        </div>
    );
};

export default Filter;