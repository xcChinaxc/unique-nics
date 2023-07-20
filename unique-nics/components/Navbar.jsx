import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <h2>
                            <a href="/" className="font-extrabold bg-gradient-to-r from-just-right via-apple-valley to-just-right bg-clip-text text-transparent">Unique-Nics</a>
                        </h2>
                    </li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">rentals</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;