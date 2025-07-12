import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "Contact Me | Waqar Ahmed - Get In Touch",
  description: "Get in touch with Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  keywords: ["Contact Waqar Ahmed", "Hire MERN Stack Developer", "Web Developer Karachi", "Freelance Developer Pakistan", "React Developer Contact"],
  openGraph: {
    title: "Contact Me | Waqar Ahmed - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
    url: "https://waqaras.dev/contact",
  },
  twitter: {
    title: "Contact Me | Waqar Ahmed - Get In Touch",
    description: "Get in touch with Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Discuss your project, ask questions, or explore collaboration opportunities. Available for freelance and full-time opportunities.",
  },
};

const Page = () => {
  return <PageView />;
};

export default Page;
