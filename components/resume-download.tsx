"use client";

import { BiDownload } from "react-icons/bi";
import { Button } from "./ui/button";

export function ResumeDownload() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add your resume PDF to the public folder
    link.download = "Waqar_Ahmed_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className="group border-emerald-500/30 bg-emerald-500/10 text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white transition-all"
    >
      <BiDownload className="w-4 h-4 mr-2 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
      Download Resume
    </Button>
  );
}
