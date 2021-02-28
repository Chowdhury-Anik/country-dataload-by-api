import React from 'react';

const Country = (props) => {
    console.log(props);
    const {name, population, region, flag} = props.country;
    const flagStyle={height: "60px"}
    return (
        <div>
            <h4>Country Name: {name}</h4> 
            <img style={flagStyle}  src={flag} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            
        </div>
    );
};

export default Country;