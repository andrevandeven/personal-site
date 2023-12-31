import React from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css"

const DropdownMenu = () => {
    return (
        <div className="dropdown-container">
            <Link to="/" className="dropdown-button">Menu</Link>
            <div className="dropdown-content">
                <Link to="/pictures">Pictures</Link>
                <a href="https://github.com/andrevandeven" target="_blank" rel="noopener noreferrer">Github</a>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default DropdownMenu;
