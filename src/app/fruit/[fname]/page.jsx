import axios from "axios"
import Link from "next/link";



export const metadata = {
    title: `mango | Fruit Info`,
    description: 'Learn all about mangoes and bananas.',
}

export default async function page({ params }) {
    const res = await axios.get(`https://dummyjson.com/recipes/${params.fname}`);
    const data = res?.data
    return (
        <>
            <div>
                <p>{data.name}</p>
                <div>
                    <p>Instructions to made</p>
                    {
                        data.instructions.map((ins,i)=>{
                            return(
                                <p key={ins}>{ins}</p>
                            )
                        })
                    }
                </div>
            </div>
            <Link className="text-red-200 border border-red-400 p-3 " href={'/home'}>Home</Link>
        </>
    )
}