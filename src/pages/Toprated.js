import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TopRated from '../components/TopRated';

const Toprated = () => {
    return (
        <div className='titrepage'>
            <Logo />
            <Navigation />
            <h1>Films avec les meilleures evaluations</h1>
            <br />
            <div>
                <TopRated />
            </div>
        </div>
    );
};

export default Toprated;