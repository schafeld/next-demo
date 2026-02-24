import Link from "next/link";
import Layout from "../navigation";

export default function About() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">About Page</h1>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home Page
      </Link>
    </Layout>
  );
}
