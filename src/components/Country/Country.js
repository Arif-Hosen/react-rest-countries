import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;
    // console.log(props);
    return (
        <div className='country'>
            <h2>Country: {name}</h2>
            <img src={flag} alt="" />
            <h3>Region: {region}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;