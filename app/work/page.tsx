import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Work | Waqar Ahmed - Full-Stack Projects Portfolio",
  description: "Explore a collection of my featured full-stack projects, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code showcasing both frontend and backend expertise.",
  keywords: ["Waqar Ahmed Projects", "Full-Stack Projects", "React Projects", "Next.js Projects", "Node.js Projects", "TypeScript Projects", "Portfolio Projects", "Web Applications"],
  openGraph: {
    title: "My Work | Waqar Ahmed - Full-Stack Projects Portfolio",
    description: "Explore a collection of my featured full-stack projects, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code showcasing both frontend and backend expertise.",
    url: "https://waqaras.dev/work",
  },
  twitter: {
    title: "My Work | Waqar Ahmed - Full-Stack Projects Portfolio",
    description: "Explore a collection of my featured full-stack projects, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code showcasing both frontend and backend expertise.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
