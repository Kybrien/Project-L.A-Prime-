import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Search from '../components/Search';

const Recherche = () => {
    return (
      <div>
        <Logo/>
        <Navigation />
        <h1>Rechercher un Film</h1>
            <Search />
      </div>
    );
  };
  
  export default Recherche;