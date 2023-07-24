export default async function Rental() {

    return (
        <div>

            <h2 className="text-center font-bold text-raisin-black text-3xl">
                Renting Products FAQ
            </h2>
            <p className="mt-2 text-center text-xl text-raisin-black">
                uniquely serving the metro-atlanta area
            </p>

            <div className='mt-5 grid md:grid-cols-2 gap-6'>
                <article className="p-1.5 mx-auto my-4 rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="design" className="text-eggplant text-2xl font-bold">
                            Rentals
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </article>

                <article className="p-1.5 mx-auto my-4 rounded-xl  bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
                    <div className="bg-white p-8 rounded-lg">
                        <h4 id="rentals" className="text-eggplant text-2xl font-bold">
                            Delivery
                        </h4>
                        <p className='mt-2 text-raisin-black text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </article>
            </div>

        </div >
    );

}