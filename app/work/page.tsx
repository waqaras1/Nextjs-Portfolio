import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Work | Waqar Ahmed",
  description: "Explore a collection of my featured projects as a Full Stack Developer, showcasing my skills in creating modern, responsive, and functional web applications.",
};

const Page = () => {
  return <PageView />;
};

export default Page;
