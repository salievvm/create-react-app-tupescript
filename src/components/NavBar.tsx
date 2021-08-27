import React from 'react'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="purple darken-2 pw1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React + Typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Список дел</a></li>
                    <li><a href="badges.html">Информация</a></li>
                </ul>
            </div>
        </nav>

    );
}