import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <h2>
                        <a href="/" className="font-extrabold bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand bg-clip-text text-transparent">Unique-Nics</a>
                    </h2>
                </li>
                <li><a href="#">about</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">rentals</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;