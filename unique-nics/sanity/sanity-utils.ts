import { Product } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProducts(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            "image": image.asset->url,
            name,
            "slug": slug.current,
            price,
            details
        }`
    );
}

export async function getProduct(slug: string): Promise<Product> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            _createdAt,
            "image": image.asset->url,
            name,
            "slug": slug.current,
            price,
            details
        }`,
        { slug }
    );
}