import { getProducts } from "@/sanity/sanity-utils";
import Image from 'next/image';

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="max-w-5xl max-auto py-10">
      <h1 className="text-7xl"><span className="font-extrabold bg-gradient-to-r from-just-right via-apple-valley to-just-right bg-clip-text text-transparent">UniqueNics</span> Design & Events</h1>
      <p className="mt-3 text-xl text-grayred">unique, no matter the occassion</p>

      <h2 className="mt-24 font-bold text-grayred text-3xl">Services Offered</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">{products.map((product) => (
        <div key={product._id} className="border-2 border-light-wallis rounded-lg p-1">

          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-light-wallis"
            />
          )}

          <div className="mt-2 font-extrabold bg-gradient-to-r from-just-right via-apple-valley to-just-right bg-clip-text text-transparent">
            {product.name}
          </div>

        </div>
      ))}
      </div>
    </div>

  );

}
