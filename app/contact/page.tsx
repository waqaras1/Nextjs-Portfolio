"use client"; // Make sure this runs client-side

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponseMsg(data.message);
      if (data.success) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setResponseMsg("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
            Back <BsArrowLeft className="ml-2" />
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Get in Touch
          </h1>

          <p className="text-pretty text-neutral-200 tracking-tight">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the following channels.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <MdMail className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:waqaras.dev@gmail.com" className="text-neutral-500 hover:text-emerald-400 transition-colors">waqaras.dev@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <BiPhone className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href="tel:+923266704738" className="text-neutral-500 hover:text-emerald-400 transition-colors">+92 326 6704738</a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <BiMapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-neutral-500">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <Button type="submit" className="w-full text-black bg-emerald-400 hover:bg-emerald-500">
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {responseMsg && (
                <p className="text-center text-sm mt-2 text-gray-300">{responseMsg}</p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
