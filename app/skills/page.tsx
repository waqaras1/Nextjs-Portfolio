import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Skills | Waqar Ahmed - Full-Stack Technical Expertise",
  description: "A comprehensive overview of my technical skills as a Full-Stack Software Engineer, including React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and other modern web technologies.",
  keywords: ["Waqar Ahmed Skills", "Full-Stack Skills", "Frontend Skills", "Backend Skills", "React.js Skills", "Next.js Skills", "Node.js Skills", "TypeScript Skills", "Technical Skills"],
  openGraph: {
    title: "My Skills | Waqar Ahmed - Full-Stack Technical Expertise",
    description: "A comprehensive overview of my technical skills as a Full-Stack Software Engineer, including React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and other modern web technologies.",
    url: "https://waqaras.dev/skills",
  },
  twitter: {
    title: "My Skills | Waqar Ahmed - Full-Stack Technical Expertise",
    description: "A comprehensive overview of my technical skills as a Full-Stack Software Engineer, including React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and other modern web technologies.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
