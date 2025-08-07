import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "About Me | Waqar Ahmed - Full-Stack Software Engineer in Karachi",
  description: "Learn more about Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-stack developer, technical skills, and experience in both frontend and backend development.",
  keywords: ["About Waqar Ahmed", "Full-Stack Developer Karachi", "Software Engineer Pakistan", "Aykays Developer", "React Developer", "Node.js Developer", "Frontend Developer", "Backend Developer"],
  openGraph: {
    title: "About Me | Waqar Ahmed - Full-Stack Software Engineer in Karachi",
    description: "Learn more about Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-stack developer, technical skills, and experience in both frontend and backend development.",
    url: "https://waqaras.dev/about",
  },
  twitter: {
    title: "About Me | Waqar Ahmed - Full-Stack Software Engineer in Karachi",
    description: "Learn more about Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-stack developer, technical skills, and experience in both frontend and backend development.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
