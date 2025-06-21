import type { Metadata } from "next";
import PageView from "./view";

export const metadata: Metadata = {
  title: "My Skills | Waqar Ahmed",
  description: "A detailed overview of my technical skills, including frontend and backend technologies, tools, and platforms I'm proficient in as a Full Stack Developer.",
};

const Page = () => {
  return <PageView />;
};

export default Page;
