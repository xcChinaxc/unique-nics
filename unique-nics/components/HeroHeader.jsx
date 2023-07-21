import React from 'react';

const HeroHeader = () => {
    return (
        <div className='hero-header-container bg-repeat glamorous-desert-sand-timberwolf'>
            <h1 className="text-7xl text-raisin-black">
                <span className="font-extrabold tracking-wide bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand bg-clip-text text-transparent">
                    Unique-Nics
                </span>
                Design &#38; Events
            </h1>

            <p className="mt-4 text-xl text-timberwolf">
                unique experiences, no matter the occassion
            </p>
        </div>
    );
};

export default HeroHeader;