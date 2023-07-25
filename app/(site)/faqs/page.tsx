export default async function FAQ() {

    return (
        <div>

            <h2 className="text-center font-bold text-raisin-black text-3xl">
                Renting Products FAQ
            </h2>
            <p className="mt-2 text-center text-xl text-raisin-black">
                uniquely serving the metro-atlanta area
            </p>

            <div className="mt-5 join join-vertical w-full text-raisin-black border border-timberwolf border-1">
                <div className="collapse collapse-arrow join-item bg-white">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl ">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content bg-white">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse collapse-arrow join-item bg-white">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl ">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse collapse-arrow join-item bg-white">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl ">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="collapse-content ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </div>



        </div>

    );

}