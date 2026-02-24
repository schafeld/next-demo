import Link from "next/link";
import { posts } from "../../data/posts";
import styles from "./Post.module.css";
import Layout from "../../navigation";

export default async function Post({ params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <Layout>
                <h1 className={styles.title}>Post Not Found</h1>
                <p className={styles.content}>The post you are looking for does not exist.</p>
                <p>
                    <Link href="/" className={styles.link}>
                        Go back to Home Page
                    </Link>
                </p>
            </Layout>
        );
    }

    return (
        <Layout>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content}>{post.content}</p>

            <p>
                <Link href="/" className={styles.link}>
                    Go back to Home Page
                </Link>
            </p>
        </Layout>
    );
}