import React from 'react';

const HeroHeader = () => {
    return (
        <div>
            <div className='py-5'>
                <div className='text-center'>
                    <h1 className="text-7xl font-extrabold tracking-wide bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent">
                        Unique-Nics
                    </h1>
                    <span className="text-4xl text-raisin-black">
                        Design &#38; Events
                    </span>
                    <p className="m-4 text-xl text-raisin-black">
                        unique experiences, no matter the occassion
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroHeader;