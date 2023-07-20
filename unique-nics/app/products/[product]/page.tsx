import { getProduct } from "@/sanity/sanity-utils";

type Props = {
    params: { product: string; };
};

export default async function Product({ params }: Props) {
    const slug = params.product;

    const product = await getProduct(slug);

    return <div>{product.name}</div>;
}