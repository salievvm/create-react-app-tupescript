import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="purple darken-2 pw1">
            <div className="nav-wrapper">
                <NavLink to="#" className="brand-logo">React + Typescript</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}