import Link from "next/link"

export default async function () {

    return (
        <>
        Home

            <Link href={'/about'}>About</Link>
        </>
    )
}