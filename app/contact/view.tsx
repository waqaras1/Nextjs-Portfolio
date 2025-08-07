"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/navigation";
import { BiMapPin, BiPhone, BiCheckCircle, BiErrorCircle, BiLoaderAlt, BiTime, BiRocket, BiLogoWhatsapp } from "react-icons/bi";
import { MdMail } from "react-icons/md";

const PageView = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | "">("");

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setResponseMsg("");
    setResponseType("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResponseType("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setResponseType("error");
      }
      setResponseMsg(data.message);
    } catch {
      setResponseType("error");
      setResponseMsg("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const contactInfo = [
    { icon: MdMail, title: "Email", value: "waqaras.dev@gmail.com", href: "mailto:waqaras.dev@gmail.com", color: "text-emerald-400" },
    { icon: BiPhone, title: "Phone", value: "+92 326 6704738", href: "tel:+923266704738", color: "text-sky-400" },
    { icon: BiMapPin, title: "Location", value: "Karachi, Pakistan", href: "#", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl space-y-8 p-6 sm:p-10">
        <Navigation title="" showBack={true} />
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Feel free to reach out through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-4 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-black/40 transition-all duration-300 group">
                  <div className={`p-3 rounded-full bg-black/40 border border-gray-700/30 group-hover:border-emerald-500/30 transition-colors ${info.color}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{info.title}</h3>
                    <a href={info.href} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <Card variant="glass" className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BiTime className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="font-medium text-gray-300">Response Time</p>
                    <p className="text-sm text-gray-400">Typically within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BiRocket className="w-5 h-5 text-sky-400" />
                  <div>
                    <p className="font-medium text-gray-300">Availability</p>
                    <p className="text-sm text-gray-400">Open to new projects</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input id="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                {errors.name && <p className="text-red-400 text-xs mt-1 px-1">{errors.name}</p>}
              </div>
              <div>
                <Input id="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} required />
                {errors.email && <p className="text-red-400 text-xs mt-1 px-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea id="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
                {errors.message && <p className="text-red-400 text-xs mt-1 px-1">{errors.message}</p>}
              </div>
              
              <div className="pt-2 space-y-6">
                <Button type="submit" variant="outline" className="w-full h-14 border-emerald-500/30 bg-emerald-500/10 text-gray-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-white transition-all" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <BiLoaderAlt className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </Button>
                <Button asChild variant="outline" className="w-full h-14 border-green-500/30 bg-green-500/10 text-gray-300 hover:bg-green-500/20 hover:border-green-500/50 hover:text-white transition-all duration-300">
                  <a href="https://wa.me/923266704738" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <BiLogoWhatsapp className="text-green-400 w-5 h-5" />
                    <span> Prefer a quick chat? Message me on WhatsApp!</span>
                  </a>
                </Button>
                {responseMsg && (
                  <div className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                    responseType === "success" 
                      ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400" 
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}>
                    {responseType === "success" ? <BiCheckCircle className="w-5 h-5" /> : <BiErrorCircle className="w-5 h-5" />}
                    <span>{responseMsg}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PageView;
