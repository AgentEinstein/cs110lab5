import React from 'react';

const Title = ({ sort, time }) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="title">
            <h1>{`${capitalize(sort)} - ${capitalize(time)}`}</h1>
        </div>
    );
};

export default Title;
