import { getProduct } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { product: string; };
};

export default async function Product({ params }: Props) {
    const slug = params.product;

    const product = await getProduct(slug);

    return (<div className="max-w-3xl mx-auto py-20">
        <div>
            <div className="product-container">
                {product.image && (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                )}
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>

                <p>Details:</p>

                <div>
                    <PortableText value={product.details} />
                </div>

            </div>
        </div>

    </div>
    );
}