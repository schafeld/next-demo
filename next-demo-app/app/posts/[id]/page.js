import Link from "next/link";

export default async function Post({ params }) {
    const { id } = await params;

    return (
        <main>
            <h1 className="text-3xl font-bold underline">Post Id: {id}</h1>
            
            <p>
                <Link href="/" className="text-blue-500 underline">
                    Go back to Home Page
                </Link>
            </p>
        </main>
    );
}