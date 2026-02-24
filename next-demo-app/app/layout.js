import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Blog - Next.js",
  description: "A beautifully designed blog powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main className="main-content">
          {children}
        </main>

        <footer>
          <p>&copy; 2026 Olli's Blog. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
