import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "Contact Me | Waqar Ahmed - Full-Stack Developer - Get In Touch",
  description: "Get in touch with Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  keywords: ["Contact Waqar Ahmed", "Hire Full-Stack Developer", "Software Engineer Karachi", "Freelance Developer Pakistan", "React Developer Contact", "Node.js Developer Contact"],
  openGraph: {
    title: "Contact Me | Waqar Ahmed - Full-Stack Developer - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
    url: "https://waqaras.dev/contact",
  },
  twitter: {
    title: "Contact Me | Waqar Ahmed - Full-Stack Developer - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
