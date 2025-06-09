import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
            Back <BsArrowLeft className="ml-2" />
          </Button>
        </Link>
        <div className="space-y-6 ">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            About Me
          </h1>
          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
            <p>
              I&apos;m Waqar Ahmed — a Computer Science undergraduate and Full Stack Web Developer with a focus on the MERN Stack. I enjoy building fast, scalable web applications that prioritize clean code, modern design, and great user experience.
            </p>
            <p>Currently exploring AI-powered tools and always open to freelance opportunities and exciting collaborations.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              🎓 Education
            </h2>
            <div className="space-y-2">
              <p className="font-medium">BS in Computer Science</p>
              <p>Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST University) 2022 - 2026</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              💼 Professional Experience
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Founder & Lead Developer</p>
                <p className="text-neutral-400">
                  Freelance Agency on Fiverr - Remote, 2023 - Present <br />
                  - Founded and run a multi-service freelance agency on Fiverr, providing web development, e-commerce, AI chatbot, and graphic design solutions. <br />
                  - Handle projects end-to-end, ensuring timely delivery and high client satisfaction.
                </p>
              </div>
              <div>
                <p className="font-medium">Web Development Intern</p>
                <p className="text-neutral-500">CodeClause - Remote, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
