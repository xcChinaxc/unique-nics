import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string; };
};

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

    return (
        <div>

            <div className="mt-4 text-xl text-raisin-black">
                <PortableText value={[page.content]} />
            </div>

        </div>
    );
}