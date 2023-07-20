import React from 'react';

const Service = () => {
    return (
        <div>
            <h2 className="mt-24 font-bold text-grayred text-3xl">Services Offered</h2>

            <div className='cards grid grid-cols-2'>
                <article className="card info">
                    <h3 className="info-title">Design</h3>
                    <p className="info-text">Give us your vision, and we'll ensure you get a unique design tailored to your occasion.</p>
                </article>
                <article className="card info">
                    <h3 className="info-title">Rentals</h3>
                    <p className="info-text">Rent pieces to ensure your event is a success! We'll help you set-up!</p>
                </article>
                <article className="card info">
                    <h3 className="info-title">Event Planning</h3>
                    <p className="info-text">Whether assistance is required from beginning to end or tying up loose ends - we are here to help!</p>
                </article>
                <article className="card info">
                    <h3 className="info-title">Day of Services</h3>
                    <p className="info-text">Our event management services allow you to be the life of the party!</p>
                </article>

            </div>

        </div>
    );
};

export default Service;