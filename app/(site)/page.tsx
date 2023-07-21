export default async function Home() {

  return (
    <div>

      <div className='py-10 bg-auto bg-repeat glamorous-desert-sand-timberwolf opacity-75'>
        <div className='text-center'>
          <h1 className="text-7xl font-extrabold tracking-wide bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent">
            Unique-Nics
          </h1>
          <span className="text-4xl text-raisin-black">
            Design &#38; Events
          </span>
          <p className="mt-4 text-2xl text-raisin-black">
            unique experiences, no matter the occassion
          </p>
        </div>
      </div>

      <div>
        <h2 className="m-5 text-center font-bold text-raisin-black text-3xl">
          Services Offered
        </h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <article className="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-eggplant text-2xl font-bold">
                Design
              </h4>
              <p className='mt-2 text-raisin-black line-clamp-2'>
                Give us your vision, and we&apos;ll ensure you get a unique design tailored to your occasion.
              </p>
            </div>
          </article>
          <article className="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-eggplant text-2xl font-bold">
                Rentals
              </h4>
              <p className='mt-2 text-raisin-black line-clamp-2'>
                Browse through our rental catalog to ensure your event is a success!
              </p>
            </div>
          </article>
          <article className="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-eggplant text-2xl font-bold">
                Event Planning
              </h4>
              <p className='mt-2 text-raisin-black line-clamp-2'>
                We&apos;ll help you from beginning to end or tying up loose ends!
              </p>
            </div>
          </article>
          <article className="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-desert-sand via-light-coral to-desert-sand">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="text-eggplant text-2xl font-bold">
                Day of Services
              </h4>
              <p className='mt-2 text-raisin-black line-clamp-2'>
                Our event management services allow you to relax, host, and be the life of the party!
              </p>
            </div>
          </article>
        </div>
      </div>

    </div >
  );

}