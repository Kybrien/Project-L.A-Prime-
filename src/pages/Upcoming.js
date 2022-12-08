import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Upcoming from '../components/Upcomingc';

const upcoming = () => {
    return (
        <div className='titrepage'>
            <Logo></Logo>
            <Navigation />
            <h1>Films bientot disponibles</h1>
            <br />
            <div className='banner'>
                <Upcoming />
            </div>
        </div>
    );
};

export default upcoming;