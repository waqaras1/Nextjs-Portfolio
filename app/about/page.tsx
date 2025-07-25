import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "About Me | Waqar Ahmed - Software Engineer (Backend) in Karachi",
  description: "Learn more about Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience in backend development.",
  keywords: ["About Waqar Ahmed", "Backend Developer Karachi", "Software Engineer Pakistan", "Aykays Developer", "Node.js Developer"],
  openGraph: {
    title: "About Me | Waqar Ahmed - Software Engineer (Backend) in Karachi",
    description: "Learn more about Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience in backend development.",
    url: "https://waqaras.dev/about",
  },
  twitter: {
    title: "About Me | Waqar Ahmed - Software Engineer (Backend) in Karachi",
    description: "Learn more about Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discover my journey from intern to full-time developer, technical skills, and experience in backend development.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
