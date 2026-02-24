export const posts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        date: "February 24, 2026",
        excerpt: "Learn the fundamentals of Next.js and how to set up your first project. We'll cover file-based routing, API routes, and deployment options.",
        content: `Next.js is a powerful React framework that makes building web applications easier and more efficient. In this comprehensive guide, we'll explore what makes Next.js special and how to get started with your first project.

## Why Choose Next.js?

Next.js provides several advantages over standard React:
- File-based routing system that's intuitive and scalable
- Server-side rendering (SSR) and static generation (SSG) capabilities
- Built-in API routes for creating backend functionality
- Automatic code splitting for better performance
- Image optimization and CSS support out of the box

## Setting Up Your Project

Getting started with Next.js is straightforward. Simply run:
\`npm create next-app@latest\`

This command will scaffold a new Next.js project with all the necessary dependencies and configuration.

## Key Concepts

Understanding these core concepts will help you build better applications:

**App Router**: The modern way to structure your Next.js application with nested layouts and co-located metadata.

**Server and Client Components**: Automatically optimize your components to run where they need to, reducing JavaScript sent to the browser.

**Data Fetching**: Leverage Next.js's powerful data fetching capabilities with revalidation, caching, and error handling.

Next.js continues to evolve with each release, offering developers powerful tools to build fast, scalable web applications.`
    },
    {
        id: 2,
        title: "React Hooks Deep Dive",
        date: "February 20, 2026",
        excerpt: "Master React Hooks and understand how to use useState, useEffect, and custom hooks to build powerful functional components.",
        content: `React Hooks revolutionized how we write React components. Released in React 16.8, hooks allow you to use state and other React features in functional components without writing class components.

## Essential Hooks

**useState**: Manage local component state in functional components.

**useEffect**: Handle side effects like data fetching, subscriptions, and DOM manipulation.

**useContext**: Access context values without wrapping components in a provider consumer.

**useReducer**: Manage complex state logic with a reducer function.

## Custom Hooks

One of the most powerful features of hooks is the ability to create custom hooks. Custom hooks let you extract component logic into reusable functions.

\`\`\`javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Performance Optimization

Hooks provide mechanisms for optimization:
- **useMemo**: Memoize expensive computations
- **useCallback**: Maintain stable function references
- **useRef**: Access DOM elements directly

## Best Practices

- Follow the Rules of Hooks: only call hooks at the top level and in React function components
- Use hooks to simplify your component logic
- Create custom hooks to share logic between components
- Leverage ESLint plugin to catch common hook mistakes

Mastering hooks is essential for modern React development. They enable more efficient, readable, and maintainable code.`
    },
    {
        id: 3,
        title: "CSS Modules for Component Styling",
        date: "February 15, 2026",
        excerpt: "Discover how CSS Modules provide scoped styling for your components, preventing naming conflicts and improving maintainability.",
        content: `CSS Modules are a powerful solution for managing component styles in modern web applications. They provide scoped styling by default, preventing the common problem of CSS naming conflicts.

## What Are CSS Modules?

CSS Modules are CSS files that allow you to write styles as if they're scoped to a specific component. The styles are locally scoped by default, and class names are automatically generated to avoid collisions.

## Benefits of CSS Modules

**No Naming Conflicts**: Class names are scoped to their module, eliminating the need for complex naming conventions.

**Explicit Dependencies**: Component styles are explicitly linked to the component, making dependencies clear.

**Dead Code Elimination**: Unused styles can be identified and removed more easily.

**Dynamic Styling**: Import class names as JavaScript objects for dynamic styling.

## Getting Started

Using CSS Modules in Next.js is simple:

1. Create a CSS file with the \`.module.css\` extension
2. Import it in your component
3. Use the imported styles object to apply classes

\`\`\`javascript
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.primary}>Click me</button>;
}
\`\`\`

## Advanced Techniques

Combine multiple classes dynamically:

\`\`\`javascript
const buttonClass = \`\${styles.button} \${isActive ? styles.active : ''}\`;
\`\`\`

Use CSS Modules with component composition patterns for maximum reusability and maintainability.

## Conclusion

CSS Modules offer a elegant solution for component-scoped styling. They work particularly well with frameworks like Next.js and React, helping teams build scalable and maintainable applications.`
    },
    {
        id: 4,
        title: "Web Performance Best Practices",
        date: "February 10, 2026",
        excerpt: "Optimize your web applications for speed and efficiency. Learn about image optimization, code splitting, and caching strategies.",
        content: `Performance is a critical aspect of modern web development. Users expect fast, responsive applications. Let's explore best practices for optimizing web application performance.

## Image Optimization

Images often account for the largest portion of a website's byte size. Optimize them by:

- Using modern formats like WebP and AVIF
- Serving responsive images with srcset
- Implementing lazy loading for below-the-fold images
- Using CDNs to serve images from locations near your users

## Code Splitting

Code splitting reduces the initial bundle size by splitting your code into smaller chunks:

**Dynamic Imports**: Load code only when needed using dynamic imports.

**Route-based Splitting**: Automatically split code at route boundaries.

**Component-based Splitting**: Split code at the component level for better granularity.

## Caching Strategies

Implement effective caching to reduce unnecessary network requests:

- Browser caching headers
- Service Workers for offline functionality
- CDN caching for static assets
- API response caching

## Core Web Vitals

Google's Core Web Vitals measure user experience:

**Largest Contentful Paint (LCP)**: How quickly the largest visible element loads.

**First Input Delay (FID)**: Responsiveness to user interactions.

**Cumulative Layout Shift (CLS)**: Visual stability of the page.

## Monitoring and Testing

Use tools like Lighthouse, PageSpeed Insights, and WebPageTest to monitor performance. Regular testing ensures your optimizations are effective.

Performance optimization is an ongoing process. Start with these fundamentals and continuously monitor and improve your application's speed.`
    }
];