import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string; };
};

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

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
                </div>
            </div>
            <h2 className="m-5 text-center font-bold text-raisin-black text-3xl">
                {page.title}
            </h2>
            <div className="mt-4 text-xl text-raisin-black">
                <PortableText value={page.content} />
            </div>

        </div>
    );
}