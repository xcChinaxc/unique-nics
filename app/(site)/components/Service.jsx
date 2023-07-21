import React from 'react';

const Service = () => {
    return (
        <div>
            <h2 className="m-5 text-center font-bold text-raisin-black text-3xl">
                Services Offered
            </h2>
            <div className='grid md:grid-cols-2 gap-4'>
                <article class="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div class="bg-white p-5 rounded-lg">
                        <h4 class="text-eggplant text-2xl font-bold">
                            Design
                        </h4>
                        <p className='mt-2 text-raisin-black line-clamp-2'>
                            Give us your vision, and we&apos;ll ensure you get a unique design tailored to your occasion.
                        </p>
                    </div>
                </article>
                <article class="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div class="bg-white p-5 rounded-lg">
                        <h4 class="text-eggplant text-2xl font-bold">
                            Rentals
                        </h4>
                        <p className='mt-2 text-raisin-black line-clamp-2'>
                            Browse through our rental catalog to ensure your event is a success!
                        </p>
                    </div>
                </article>
                <article class="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div class="bg-white p-5 rounded-lg">
                        <h4 class="text-eggplant text-2xl font-bold">
                            Event Planning
                        </h4>
                        <p className='mt-2 text-raisin-black line-clamp-2'>
                            We&apos;ll help you from beginning to end or tying up loose ends!
                        </p>
                    </div>
                </article>
                <article class="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div class="bg-white p-5 rounded-lg">
                        <h4 class="text-eggplant text-2xl font-bold">
                            Day of Services
                        </h4>
                        <p className='mt-2 text-raisin-black line-clamp-2'>
                            Our event management services allow you to relax, host, and be the life of the party!
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Service;