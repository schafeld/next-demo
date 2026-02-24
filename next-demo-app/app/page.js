'use client';

import Link from "next/link";
import { posts } from "./data/posts";
import homeStyles from './home.module.css';

export default function Home() {
  return (
    <>
      <h1>Welcome to Our Blog</h1>

      <p className={homeStyles.intro}>
        Explore our collection of articles on web development, design, and technology. Each post offers insights and practical tips to help you stay informed and improve your skills.
      </p>

      <h2>Latest Articles</h2>
      
      <div className={homeStyles.articlesGrid}>
        {posts.map((post) => (
          <article key={post.id} className={homeStyles.articleCard}>
            <h3 className={homeStyles.articleTitle}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p className={homeStyles.articleMeta}>
              {post.date}
            </p>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className={homeStyles.readMoreLink}>
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <div className={homeStyles.aboutSection}>
        <h3>About Olli's Blog</h3>
        <p>
          This is a demonstration blog built with Next.js, showcasing dynamic routing, static generation, and CSS Modules. Also, there is a rudimentary Markdown parser for rendering post content.
          <Link href="/about"> Learn more about us.</Link>
        </p>
      </div>
    </>
  );
}
