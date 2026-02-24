import Link from "next/link";
import { posts } from "../../data/posts";
import styles from "./Post.module.css";

export default async function Post({ params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === parseInt(id));
    const postIndex = posts.findIndex((p) => p.id === parseInt(id));
    const previousPost = postIndex > 0 ? posts[postIndex - 1] : null;
    const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

    if (!post) {
        return (
                <div className={styles.notFound}>
                    <h1 className={styles.title}>Post Not Found</h1>
                    <p className={styles.content}>The post you are looking for does not exist.</p>
                    <Link href="/" className={styles.link}>
                        ← Back to Home
                    </Link>
                </div>
        );
    }

    return (
            <article className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <p>{post.date}</p>
                </div>
                
                <div className={styles.content}>
                    {post.content.split('\n\n').map((paragraph, index) => {
                        // Handle headers
                        if (paragraph.startsWith('##')) {
                            const text = paragraph.replace(/^##\s+/, '');
                            return <h2 key={index}>{text}</h2>;
                        }
                        if (paragraph.startsWith('#')) {
                            const text = paragraph.replace(/^#\s+/, '');
                            return <h3 key={index}>{text}</h3>;
                        }
                        // Handle code blocks
                        if (paragraph.startsWith('```')) {
                            const codeMatch = paragraph.match(/```(?:javascript|js)?\n([\s\S]*?)\n```/);
                            if (codeMatch) {
                                return <pre key={index}><code>{codeMatch[1]}</code></pre>;
                            }
                        }
                        // Handle lists
                        if (paragraph.startsWith('-') || paragraph.match(/^\d+\./)) {
                            const lines = paragraph.split('\n');
                            const isOrdered = lines[0].match(/^\d+\./);
                            const ListTag = isOrdered ? 'ol' : 'ul';
                            return (
                                <ListTag key={index}>
                                    {lines.map((line, i) => (
                                        <li key={i}>{line.replace(/^[-\d+.]\s*/, '')}</li>
                                    ))}
                                </ListTag>
                            );
                        }
                        return <p key={index}>{paragraph}</p>;
                    })}
                </div>

                {/* Navigation between posts */}
                <nav className={styles.postNav}>
                    {previousPost ? (
                        <Link href={`/posts/${previousPost.id}`} className={styles.link}>
                            ← {previousPost.title}
                        </Link>
                    ) : (
                        <div />
                    )}
                    <Link href="/" className={styles.link}>
                        Back to All Posts
                    </Link>
                    {nextPost ? (
                        <Link href={`/posts/${nextPost.id}`} className={styles.link}>
                            {nextPost.title} →
                        </Link>
                    ) : (
                        <div />
                    )}
                </nav>
            </article>
        );
}