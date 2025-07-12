import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Skills | Waqar Ahmed - Technical Expertise",
  description: "A detailed overview of my technical skills as a MERN Stack Developer, including React, Next.js, Node.js, MongoDB, Express.js, and other frontend and backend technologies.",
  keywords: ["Waqar Ahmed Skills", "MERN Stack Skills", "React Skills", "Node.js Skills", "MongoDB Skills", "Web Development Skills", "Technical Skills"],
  openGraph: {
    title: "My Skills | Waqar Ahmed - Technical Expertise",
    description: "A detailed overview of my technical skills as a MERN Stack Developer, including React, Next.js, Node.js, MongoDB, Express.js, and other frontend and backend technologies.",
    url: "https://waqaras.dev/skills",
  },
  twitter: {
    title: "My Skills | Waqar Ahmed - Technical Expertise",
    description: "A detailed overview of my technical skills as a MERN Stack Developer, including React, Next.js, Node.js, MongoDB, Express.js, and other frontend and backend technologies.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
