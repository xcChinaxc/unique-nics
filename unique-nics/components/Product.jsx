import { getProducts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const products = await getProducts();

const Product = () => {
    return (
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (

                <Link
                    href={`/products/${product.slug}`}
                    key={product._id}
                    className="border-2 border-light-wallis rounded-lg p-1 hover:scale-105 hover:border-grayred transition"
                >

                    {product.image && (
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={700}
                            height={300}
                            className="object-cover rounded-lg border border-light-wallis"
                        />
                    )}

                    <div className="mt-2 font-extrabold bg-gradient-to-r from-just-right via-apple-valley to-just-right bg-clip-text text-transparent">
                        {product.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Product;