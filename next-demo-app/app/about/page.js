import Link from "next/link";
import aboutStyles from '../about.module.css';

export default function About() {
  return (
    <article className={aboutStyles.container}>
      <h1>About Olli's Blog</h1>
        
      <p className={aboutStyles.intro}>
        Welcome to our Simple Blog, a showcase of modern web development practices using Next.js.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe in sharing knowledge and helping developers build faster, more efficient web applications. 
        This blog is dedicated to exploring web development best practices, including React patterns, Next.js features, 
        performance optimization, and modern CSS techniques.
      </p>

      <h2>What We Cover</h2>
      <ul>
        <li><strong>Next.js & React</strong> - Frontend frameworks and component patterns</li>
        <li><strong>Web Performance</strong> - Optimization strategies and best practices</li>
        <li><strong>CSS & Styling</strong> - Modern styling approaches including CSS Modules</li>
        <li><strong>Web Development</strong> - Tips, tricks, and tutorials for building better applications</li>
      </ul>

      <h2>About This Project</h2>
      <p>
        This blog demonstrates key Next.js concepts:
      </p>
      <ul>
        <li>File-based routing with dynamic routes</li>
        <li>Server and Client Components</li>
        <li>CSS Modules for scoped styling</li>
        <li>Static content with mock data</li>
        <li>Responsive and accessible design</li>
      </ul>

      <h2>Get In Touch</h2>
      <p>
        We'd love to hear your thoughts and feedback. Visit our home page to read our latest articles and stay updated on new content.
      </p>

      <div className={aboutStyles.callout}>
        <h3>Ready to Learn?</h3>
        <p>Check out our blog posts to dive deep into web development topics.</p>
        <Link href="/" className={aboutStyles.calloutLink}>
          Explore Our Articles →
        </Link>
      </div>
    </article>
  );
}
