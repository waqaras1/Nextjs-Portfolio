import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "About Me | Waqar Ahmed",
  description: "Learn more about Waqar Ahmed, a passionate Full Stack Developer with experience in freelance work and a strong foundation in Computer Science. Discover my journey, experience, and technical skills.",
};

const Page = () => {
  return <PageView />;
};

export default Page;
