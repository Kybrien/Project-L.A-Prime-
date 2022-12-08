import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Now from '../components/Nowplayingc';

const Nowplayin = () => {
    return (
        <div className='titrepage'>
            <Logo />
            <Navigation />
            <h1>Nos Films a l'affiche </h1>
            <br />
            <div className='banner'>
                <Now />
            </div>
        </div>
    );
};

export default Nowplayin;