import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='p-1.5'>
            <header className='flex items-center justify-between'>
                <Link
                    href="/"
                    className="font-extrabold bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent hover:scale-105 transition">
                    Unique-Nics
                </Link>
                <div className='flex items-center gap-8 text-raisin-black'>
                    <Link
                        href="/about"
                        className='hover:text-eggplant'
                    >
                        about
                    </Link>
                    <Link
                        href="/services"
                        className='hover:text-eggplant'
                    >
                        services
                    </Link>
                    <Link
                        href="/faqs"
                        className='hover:text-eggplant'
                    >
                        faqs
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;