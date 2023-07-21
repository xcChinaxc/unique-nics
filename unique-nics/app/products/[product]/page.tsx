import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { product: string; };
};

export default async function Product({ params }: Props) {
    const slug = params.product;

    const product = await getProduct(slug);



    return (
        <div className="border border-eggplant grid grid-cols-2 items-center">
            <div className="mx-auto">
                {product.image && (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="scale-75 border-4 border-raisin-black object-cover rounded-xl"
                    />
                )}
            </div>
            <div>
                <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-b from-light-coral via-eggplant to-light-coral bg-clip-text text-transparent">{product.name}</h1>
                <p className="mt-7 font-bold text-raisin-black">
                    Details:
                </p>
                <div className="text-raisin-black">
                    <PortableText value={product.details} />
                </div>
                <p className="mt-7 text-mountbatten-pink text-xl">${product.price}</p>
                <div>
                    <p>Quantity:</p>
                    <p className="bg-mountbatten-pink rounded-lg text-white py-3 px-4 whitespace-nowrap hover:bg-light-coral transition">Add to Cart</p>
                </div>
            </div>

        </div>


    );
}