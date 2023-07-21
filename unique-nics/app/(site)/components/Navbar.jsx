import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <h2>
                            <a href="/" className="font-extrabold bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent">Unique-Nics</a>
                        </h2>
                    </li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">rentals</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;