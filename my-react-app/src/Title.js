import React from 'react';

const Title = ({ sort, time }) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    
        if(time == 1){
            time = "Day";
        }
        else if(time == 7){
            time = "Week";
        }
        else{
            time = "Month";
        }
    

    return (
        <div className="title">
            <h1>{`Most ${capitalize(sort)} - ${(time)}`}</h1>
        </div>
    );
};

export default Title;
