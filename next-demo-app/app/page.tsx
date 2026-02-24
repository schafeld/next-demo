import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/about" className="text-blue-500 underline">
        Go to About Page
      </Link>
    </main>
  );
}
