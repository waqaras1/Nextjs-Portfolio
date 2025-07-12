import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Work | Waqar Ahmed - Projects Portfolio",
  description: "Explore a collection of my featured projects as a MERN Stack Developer, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code.",
  keywords: ["Waqar Ahmed Projects", "MERN Stack Projects", "React Projects", "Next.js Projects", "Web Development Projects", "Portfolio Projects"],
  openGraph: {
    title: "My Work | Waqar Ahmed - Projects Portfolio",
    description: "Explore a collection of my featured projects as a MERN Stack Developer, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code.",
    url: "https://waqaras.dev/work",
  },
  twitter: {
    title: "My Work | Waqar Ahmed - Projects Portfolio",
    description: "Explore a collection of my featured projects as a MERN Stack Developer, including Modern 3D Portfolio, Brainwave Chat, PngFy Pro, and HiLink Travel App. View live demos and source code.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
