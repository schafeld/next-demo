'use client';

import Link from "next/link";
import Layout from "./navigation";
import { posts } from "./data/posts";
import styles from './posts/[id]/Post.module.css';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Our Blog</h1>

      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Explore our collection of articles on web development, design, and technology. Each post offers insights and practical tips to help you stay informed and improve your skills.
      </p>

      <h2>Latest Articles</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
        {posts.map((post) => (
          <article key={post.id} style={{ 
            padding: '1.5rem', 
            backgroundColor: 'var(--accent-light)',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
          }}>
            <h3 style={{ marginTop: 0 }}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              {post.date}
            </p>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} style={{ fontWeight: 500 }}>
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--hover-bg)', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
        <h3 style={{ marginTop: 0 }}>About Olli's Blog</h3>
        <p>
          This is a demonstration blog built with Next.js, showcasing dynamic routing, static generation, and CSS Modules. Also, there is a rudimentary Markdown parser for rendering post content.
          <Link href="/about"> Learn more about us.</Link>
        </p>
      </div>
    </Layout>
  );
}
