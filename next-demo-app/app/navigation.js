import Link from "next/link"
import './globals.css'

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar">
                <Link href="/">Olli'sBlog</Link>
                <Link href="/posts/1">First Post</Link>
                <Link href="/posts/2">Second Post</Link>
                <Link href="/posts/3">Third Post</Link>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
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