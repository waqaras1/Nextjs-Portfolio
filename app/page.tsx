import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BiBuilding,
  BiLogoLinkedin,
  BiChevronRight,
  BiLogoGithub,
  BiLogoInstagram,
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-xl m-3 md:m-8 z-50 space-y-8 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        {/* Header */}
        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
          <div className="flex items-center gap-3">
            <BiBuilding className="w-5 h-5" />
            <h3 className="text-gray-400">Islamabad, Pakistan</h3>
          </div>
          <Button
            variant="ghost"
            className="hover:bg-black/50 duration-300 hover:text-white rounded-full"
          >
            <div className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p>Available For Work</p>
          </Button>
        </div>

        {/* Intro */}
        <div>
          <h1 className="text-4xl">Waqar Ahmed</h1>
          <h3 className="text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Full Stack Web Developer
          </h3>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300">
            Hi, I’m Waqar — a Computer Science undergrad, MERN Stack developer,
            and freelancer. I specialize in building modern, responsive web
            applications with a strong focus on performance, clean design, and
            user experience. Currently exploring AI-powered solutions and always
            open to exciting collaborations.
            <br />
            <Link
              href="/contact"
              className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-100 transition-opacity"
            >
              - Contact Me
            </Link>{" "}
            For Freelance work Anytime.
          </p>
        </div>

        {/* Menu */}
        <nav className="space-y-4">
          <h3 className="text-xl font-bold text-emerald-400">Menu</h3>
          <div className="flex flex-col gap-3">
            {[
              { href: "/about", label: "About" },
              { href: "/work", label: "Work" },
              { href: "/skills", label: "Skills" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg"
              >
                <span>{item.label}</span>
                <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </Link>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <h3 className="text-xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">
              Check out my Socials
            </h3>
            <HiArrowDown className="text-2xl text-sky-400" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/waqaras1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear flex items-center justify-center gap-2">
                <BiLogoGithub />
                Github
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/waqaras/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear flex items-center justify-center gap-2">
                <BiLogoLinkedin />
                Linkedin
              </Button>
            </a>
            <a
              href="https://instagram.com/waqarr.as"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear flex items-center justify-center gap-2">
                <BiLogoInstagram />
                Instagram
              </Button>
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
}
