import Link from "next/link";
import axios from "axios";
import Image from "next/image";

export default async function PhotoGallery() {
    const res = await axios.get("https://dummyjson.com/recipes");
    const photos = res.data.recipes.slice(0, 10);

    return (
        <>
            <div>
                <Link href="/about">About</Link>
            </div>
            <div className="grid grid-cols-6 ">
                {photos.map((e, i) => (
                    <div key={e.id}>
                        <p>{i + 1}</p>
                        <Link href={`/fruit/${e.id}`}>
                            <Image
                                height={200}
                                width={200}
                                src={e.image}
                                alt={e.name}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
