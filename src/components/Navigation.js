import React from 'react';
import { NavLink} from 'react-router-dom'


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>Accueil</li>
                </NavLink>
                <NavLink to="/toprated" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>Meilleures évaluation</li>
                </NavLink>
                <NavLink to="/trending" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>Tendances</li>
                </NavLink>
                <NavLink to="/now_playing" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>Film a l'affiche</li>
                </NavLink>
                <NavLink to="/upcoming" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>A venir</li>
                </NavLink>
                <NavLink to="/research" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='categorie'>Rechercher un Film</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;