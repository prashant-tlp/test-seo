


export const metadata = {
    title: `mango | Fruit Info`,
    description: 'Learn all about mangoes and bananas.',
}

export default function page({ params }) {
    return (
        <>
            {params.fname}
        </>
    )
}