import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <h2>Loteria</h2>
            <nav className="navbar">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar