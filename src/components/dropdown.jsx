import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown-container">
            {/* Toggle Dropdown */}
            <button className="dropdown-button" onClick={toggleDropdown}>Menu</button>

            {/* Dropdown Content */}
            {isOpen && (
                <div className="dropdown-content">
                    <Link to="/pictures" onClick={closeDropdown}>Pictures</Link>
                    <a href="https://github.com/andrevandeven" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Github</a>
                    <Link to="/about" onClick={closeDropdown}>About</Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
