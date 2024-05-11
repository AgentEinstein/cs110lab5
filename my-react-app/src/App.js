import React, { useState } from 'react';
import './App.css';
import './styles.css';
import Articles from './Articles';
import Sidebar from './Sidebar';

function App() {
    const [filters, setFilters] = useState({ sort: 'viewed', time: '1', number: 5 });

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberSubmit = (number) => {
        if (number > 15) {
            alert('Number is higher than 15');
        } else {
            setFilters(prev => ({ ...prev, number }));
        }
    };

    return (
        <div className="body" style={{ display: 'flex' }}>
            <Sidebar onFilterChange={handleFilterChange} onNumberSubmit={handleNumberSubmit} />
            <Articles sort={filters.sort} time={filters.time} number={filters.number} />
        </div>
    );
}

export default App;
