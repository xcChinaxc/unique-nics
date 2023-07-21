export default async function Service() {

    return (
        <div>

            <h2 className="mt-5 text-center font-bold text-raisin-black text-3xl">
                Event Services Menu
            </h2>
            <p className="mt-2 text-center text-xl text-raisin-black">
                create unique moments with any budget
            </p>

            <div className='mt-5 grid grid-cols-1'>
                <article className="py-2 bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="design" className="text-eggplant text-2xl font-bold">
                            Design
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            Give us your vision, and we&apos;ll ensure you get a unique design tailored to your occasion.
                            Be as hands-on as you would like to be, but we will bring your vision to life!
                        </p>
                        <p className="mt-2 text-raisin-black">
                            Includes:
                        </p>
                        <ul className="grid grid-cols-2">
                            <li>creating theme concepts</li>
                            <li>developing design plans</li>
                            <li>make logo design</li>
                            <li>ensure overall look and feel</li>
                        </ul>

                        <p className="mt-2 text-raisin-black text-center">
                            Pricing and availability determined via consultation process.
                        </p>
                    </div>
                </article>
                <article className="pb-2 bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="rentals" className="text-eggplant text-2xl font-bold">
                            Rentals
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            Browse through our rental catalog to ensure your event is a success!
                            Select the date of your event, add items to your shopping cart, and let the fun begin!
                        </p>
                        <p className="mt-2 text-raisin-black text-center">
                            We will respond to your inquiry as soon as possible.
                        </p>
                    </div>
                </article>
                <article className="pb-2 bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="eventplanning" className="text-eggplant text-2xl font-bold">
                            Event Planning
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            We&apos;ll help you from beginning to end or tying up loose ends!
                        </p>

                        <p className="mt-2 text-raisin-black">
                            Includes:
                        </p>
                        <ul className="grid grid-cols-2">
                            <li>creating theme concepts</li>
                            <li>developing design plans</li>
                            <li>make logo design</li>
                            <li>ensure overall look and feel</li>
                        </ul>

                        <p className="mt-2 text-raisin-black text-center">
                            Pricing and availability determined via consultation process.
                        </p>
                    </div>
                </article>
                <article className="pb-2 bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="dayofservices" className="text-eggplant text-2xl font-bold">
                            Day of Services
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            Our event management services allow you to relax, host, and be the life of the party!
                        </p>

                        <p className="mt-2 text-raisin-black">
                            Includes:
                        </p>
                        <ul className="grid grid-cols-2">
                            <li>creating theme concepts</li>
                            <li>developing design plans</li>
                            <li>make logo design</li>
                            <li>ensure overall look and feel</li>
                        </ul>

                        <p className="mt-2 text-raisin-black text-center">
                            Pricing and availability determined via consultation process.
                        </p>
                    </div>
                </article>
            </div>

        </div >
    );

}