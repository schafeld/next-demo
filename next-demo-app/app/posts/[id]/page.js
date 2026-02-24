import Link from "next/link";
import { posts } from "../../data/posts";

export default async function Post({ params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <main>
                <h1 className="text-3xl font-bold underline">Post Not Found</h1>
                <p>The post you are looking for does not exist.</p>
                <p>
                    <Link href="/" className="text-blue-500 underline">
                        Go back to Home Page
                    </Link>
                </p>
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-3xl font-bold underline">{post.title}</h1>
            <p>{post.content}</p>

            <p>
                <Link href="/" className="text-blue-500 underline">
                    Go back to Home Page
                </Link>
            </p>
        </main>
    );
}