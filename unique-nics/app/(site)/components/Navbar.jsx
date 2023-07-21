import { getPages } from '@/sanity/sanity-utils';
import Link from 'next/link';
import React from 'react';

const pages = await getPages();

const Navbar = () => {
    return (
        <div>
            <header className='flex items-center justify-between'>
                <Link
                    href="/"
                    className="font-extrabold bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent">
                    Unique-Nics
                </Link>
                <nav className='flex items-center gap-5 text-sm'>
                    {pages.map((page) => (
                        <Link
                            key={page._id}
                            href={`/${page.slug}`}
                            className='hover:text-light-coral'
                        >
                            {page.title}
                        </Link>
                    ))}
                </nav>
            </header>
        </div>
    );
};

export default Navbar;