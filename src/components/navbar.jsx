import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"
import DropdownMenu from './dropdown';

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link className="seahorse-link" to="/"> <img src={`${process.env.PUBLIC_URL}/seahorse.png`} alt="seahorse" className="seahorse" /> </Link>
                <Link className="navbar-title" to="/">[Andre van de Ven]</Link>
            </div>
            <DropdownMenu />
        </div>
    ); 
};



