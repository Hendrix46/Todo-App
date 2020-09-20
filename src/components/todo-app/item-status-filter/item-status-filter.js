import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";


const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

    const buttons = filterButtons.map(({name, label}) => {
        const isActive = name === filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

        return (
            <button key={name}
                    type="button"
                    onClick={() => onFilterChange(name)}
                    className={classNames}>{label}</button>
        );
    });

    return (
        <div className="btn-group mb-3">
            { buttons }
        </div>
    );
};

export default ItemStatusFilter;