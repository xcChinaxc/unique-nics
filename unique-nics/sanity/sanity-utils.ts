import { Product } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProducts(): Promise<Product[]> {
    const client = createClient({
        projectId: "19imvnjx",
        dataset: "rentals",
        apiVersion: "2023-07-17",
    });

    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            "image": image.asset,
            name,
            "slug": slug.current,
            price,
            details
        }`
    );
}