import React, { useState, useEffect } from 'react';

const Sidebar = ({ onFilterChange, onNumberSubmit }) => {
    const [number, setNumber] = useState('');
    const [sort, setSort] = useState('viewed');
    const [time, setTime] = useState('1');

    useEffect(() => {
        onFilterChange('sort', sort);
        onFilterChange('time', time);
    }, []);

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        onFilterChange('sort', newSort);
    };

    const handleTimeChange = (e) => {
        const newTime = e.target.value;
        setTime(newTime);
        onFilterChange('time', newTime);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number > 15) {
            alert('Please enter a value 1-15');
        } else {
            onNumberSubmit(number);
        }
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSubmit} className="search">
                <input type="number" value={number} onChange={handleNumberChange} placeholder="Enter a value 1-15" />
                <button type="submit">Search</button>
            </form>
            <h3 className="sort-label">Sort By:</h3>
            <div>
                <input type="radio" id="viewed" name="sort" value="viewed" onChange={handleSortChange} checked={sort === 'viewed'} />
                <label htmlFor="viewed">Most Viewed</label><br/>
                <input type="radio" id="shared" name="sort" value="shared" onChange={handleSortChange} checked={sort === 'shared'} />
                <label htmlFor="shared">Most Shared</label><br/>
                <input type="radio" id="emailed" name="sort" value="emailed" onChange={handleSortChange} checked={sort === 'emailed'} />
                <label htmlFor="emailed">Most Emailed</label>
            </div>
            <h3 className="side-label">Time Frame:</h3>
            <div className="left-button">
                <div>
                    <input type="radio" id="day" name="time" value="1" onChange={handleTimeChange} checked={time === '1'} />
                    <label htmlFor="day">Day</label><br/>
                    <input type="radio" id="week" name="time" value="7" onChange={handleTimeChange} checked={time === '7'} />
                    <label htmlFor="week">Week</label><br/>
                    <input type="radio" id="month" name="time" value="30" onChange={handleTimeChange} checked={time === '30'} />
                    <label htmlFor="month">Month</label>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
