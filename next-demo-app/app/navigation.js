import Link from "next/link"
import './globals.css'

export default function Layout({ children }) {
    return (
        <>
            <nav className="navbar">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/posts/1" className="nav-link">Post 1</Link>
                <Link href="/posts/2" className="nav-link">Post 2</Link>
                <Link href="/posts/3" className="nav-link">Post 3</Link>
            </nav>

            <main className="main-content">
                {children}
            </main>
        </>
    )
}