import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="seahorse-link" to="/"> <img src="/seahorse.png" alt="seahorse" className="seahorse" /> </Link>
            <Link className="navbar-title" to="/">[Andre van de Ven]</Link>
        </div>
    ); 
};



