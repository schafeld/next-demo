import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">About Page</h1>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home Page
      </Link>
    </main>
  );
}
