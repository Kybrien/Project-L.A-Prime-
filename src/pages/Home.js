import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcomingc";
import Now from "../components/Nowplayingc";
import Tendances from "../components/Tendances";

const Home = () => {
  return (
    <div className='titrepage'>
      <Logo/>
      <Navigation />
      <h1>Accueil</h1>
      <div className='banner'>
        <Now />
        <Tendances />
        <TopRated />
        <Upcoming />
      </div>
    </div>
  );
};

export default Home;
