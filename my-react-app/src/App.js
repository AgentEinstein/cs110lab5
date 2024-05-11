import React, { useState } from 'react';
import './App.css';
import './styles.css';
import Articles from './Articles';
import Sidebar from './Sidebar';
import Title from './Title';

function App() {
    const [filters, setFilters] = useState({ sort: 'viewed', time: '1', number: 15 });

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberSubmit = (number) => {
        if (number > 15 || number < 1) {
            alert('Please enter a value 1-15');
        } else {
            setFilters(prev => ({ ...prev, number: parseInt(number, 10) }));
        }
    };

    return (
        <div>
            <Title sort={filters.sort} time={filters.time} />
            <div className="body">
                <Sidebar onFilterChange={handleFilterChange} onNumberSubmit={handleNumberSubmit} />
                <Articles sort={filters.sort} time={filters.time} totalArticles={filters.number} />
            </div>
        </div>
    );
}

export default App;
