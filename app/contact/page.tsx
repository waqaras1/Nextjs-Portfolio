import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "Contact Me | Waqar Ahmed - Get In Touch",
  description: "Get in touch with Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  keywords: ["Contact Waqar Ahmed", "Hire Backend Developer", "Software Engineer Karachi", "Freelance Developer Pakistan", "Node.js Developer Contact"],
  openGraph: {
    title: "Contact Me | Waqar Ahmed - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
    url: "https://waqaras.dev/contact",
  },
  twitter: {
    title: "Contact Me | Waqar Ahmed - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
