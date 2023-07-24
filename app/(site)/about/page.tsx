export default async function Rental() {

    return (
        <div>

            <h2 className="text-center font-bold text-raisin-black text-3xl">
                Learn More About&nbsp;
                <span className="font-extrabold bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent hover:scale-105 transition">
                    Unique-Nics
                </span>
            </h2>
            <p className="m-2 text-center text-xl text-raisin-black">
                uniquely serving the metro-atlanta area
            </p>

            <div className="mt-5 flex flex-col">
                <article className="p-3 flex flex-col items-center">
                    <img
                        className=" p-1.5 rounded-lg w-full h-auto max-w-screen-md bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand"
                        src="https://picsum.photos/id/21/00"
                        alt="white heels shoes"
                    />
                    <div className="flex flex-col px-12 items-center -mt-16 md:-mt-32">
                        <div className="flex flex-col rounded-lg bg-white p-8 mx-2 max-w-screen-sm">
                            <h4 id="rentals" className="text-eggplant text-2xl font-bold">
                                Owner &#38; Creative Director
                            </h4>
                            <p className='mt-2 text-raisin-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    );

}