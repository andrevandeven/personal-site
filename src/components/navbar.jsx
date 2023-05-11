import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="title" to="/">Andre van de Ven</Link>
        </div>
    );
};

