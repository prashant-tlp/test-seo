import Image from "next/image";

export default async function About() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="align-center">
                <h1 className="text-red-400">This aout page for seo</h1>
                <Image width={400} height={200} src={'/MainBefore.jpg'} alt="mainbef"></Image>
            </div>
        </div>
    )
}