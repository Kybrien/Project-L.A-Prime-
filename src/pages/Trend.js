import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Tendances from '../components/Tendances';

const Trend = () => {
    return (
        <div className='titrepage'>
            <Logo></Logo>
            <Navigation />
            <h1>Nos Tendances</h1>
            <br />
            <div>
                <Tendances />
            </div>
        </div>
    );
};

export default Trend;