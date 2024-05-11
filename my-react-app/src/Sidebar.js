import React, { useState } from 'react';

const Sidebar = ({ onFilterChange, onNumberSubmit }) => {
    const [number, setNumber] = useState('');

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number > 15) {
            alert('Number is higher than 15');
        } else {
            onNumberSubmit(number);
        }
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSubmit}>
                <input type="number" value={number} onChange={handleNumberChange} placeholder="Enter a value 1-15" />
                <button type="submit">Search</button>
            </form>
            <h3>Sort By:</h3>
            <div>
                <input type="radio" id="viewed" name="sort" value="viewed" onChange={(e) => onFilterChange('sort', e.target.value)} />
                <label htmlFor="viewed">Most Viewed</label><br/>
                <input type="radio" id="shared" name="sort" value="shared" onChange={(e) => onFilterChange('sort', e.target.value)} />
                <label htmlFor="shared">Most Shared</label><br/>
                <input type="radio" id="emailed" name="sort" value="emailed" onChange={(e) => onFilterChange('sort', e.target.value)} />
                <label htmlFor="emailed">Most Emailed</label>
            </div>
            <h3>Time Frame:</h3>
            <div>
                <input type="radio" id="day" name="time" value="1" onChange={(e) => onFilterChange('time', e.target.value)} />
                <label htmlFor="day">Day</label><br/>
                <input type="radio" id="week" name="time" value="7" onChange={(e) => onFilterChange('time', e.target.value)} />
                <label htmlFor="week">Week</label><br/>
                <input type="radio" id="month" name="time" value="30" onChange={(e) => onFilterChange('time', e.target.value)} />
                <label htmlFor="month">Month</label>
            </div>
        </div>
    );
};

export default Sidebar;
