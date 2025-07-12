import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "About Me | Waqar Ahmed - MERN Stack Developer in Karachi",
  description: "Learn more about Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience at Aykays.",
  keywords: ["About Waqar Ahmed", "MERN Stack Developer Karachi", "Web Developer Pakistan", "Aykays Developer", "Full Stack Developer"],
  openGraph: {
    title: "About Me | Waqar Ahmed - MERN Stack Developer in Karachi",
    description: "Learn more about Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience at Aykays.",
    url: "https://waqaras.dev/about",
  },
  twitter: {
    title: "About Me | Waqar Ahmed - MERN Stack Developer in Karachi",
    description: "Learn more about Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience at Aykays.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
