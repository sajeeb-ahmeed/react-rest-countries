import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h2>Countries NAme </h2>
            <div className='countries text-center'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;