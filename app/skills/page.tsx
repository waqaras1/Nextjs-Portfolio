import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Skills | Waqar Ahmed - Technical Expertise",
  description: "A detailed overview of my technical skills as a Backend Developer, including Node.js, Express.js, PostgreSQL, React.js, Next.js, and other backend and frontend technologies.",
  keywords: ["Waqar Ahmed Skills", "Backend Skills", "Node.js Skills", "Express.js Skills", "PostgreSQL Skills", "API Development Skills", "Technical Skills"],
  openGraph: {
    title: "My Skills | Waqar Ahmed - Technical Expertise",
    description: "A detailed overview of my technical skills as a Backend Developer, including Node.js, Express.js, PostgreSQL, React.js, Next.js, and other backend and frontend technologies.",
    url: "https://waqaras.dev/skills",
  },
  twitter: {
    title: "My Skills | Waqar Ahmed - Technical Expertise",
    description: "A detailed overview of my technical skills as a Backend Developer, including Node.js, Express.js, PostgreSQL, React.js, Next.js, and other backend and frontend technologies.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
