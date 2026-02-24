'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import './globals.css'

export default function Layout({ children }) {
    const pathname = usePathname();

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav className="navbar">
                <Link href="/">Olli's Blog</Link>
                <Link href="/posts/1" className={isActive('/posts/1') ? 'active' : ''}>First Post</Link>
                <Link href="/posts/2" className={isActive('/posts/2') ? 'active' : ''}>Second Post</Link>
                <Link href="/posts/3" className={isActive('/posts/3') ? 'active' : ''}>Third Post</Link>
                <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            </nav>

            <main className="main-content">
                {children}
            </main>

            <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', marginTop: '2rem' }}>
                <p>&copy; 2026 Olli's Blog. Built with Next.js.</p>
            </footer>
        </>
    )
}