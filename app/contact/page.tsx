import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "Contact Me | Waqar Ahmed",
  description: "Get in touch with me to discuss your project, ask a question, or explore collaboration opportunities. I'm available via email, contact form, or WhatsApp.",
};

const Page = () => {
  return <PageView />;
};

export default Page;
