import Link from "next/link";
import Layout from "./navigation";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Welcome to the Homepage</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>
        <Link href="/about" className="text-blue-500 underline">
          Go to About Page
        </Link>        
      </p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ol>
        <li><Link href="/posts/1" className="text-blue-500 underline">Post 1</Link></li>
        <li><Link href="/posts/2" className="text-blue-500 underline">Post 2</Link></li>
        <li><Link href="/posts/3" className="text-blue-500 underline">Post 3</Link></li>
      </ol>

      <p>Oh, guck, ein Key, hihi: <em>{process.env.TOTALLY_MADE_UP_PSEUDO_KEY}</em></p>
    </Layout>
  );
}
