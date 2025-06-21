"use client"; // Make sure this runs client-side

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { BiMapPin, BiPhone, BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { useEffect } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | "">("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
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
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
    } catch (error) {
      setResponseType("error");
      setResponseMsg("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: MdMail,
      title: "Email",
      value: "waqaras.dev@gmail.com",
      href: "mailto:waqaras.dev@gmail.com",
      color: "text-emerald-400"
    },
    {
      icon: BiPhone,
      title: "Phone",
      value: "+92 326 6704738",
      href: "tel:+923266704738",
      color: "text-sky-400"
    },
    {
      icon: BiMapPin,
      title: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "text-blue-400"
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-96 h-96 bg-black/20 rounded-xl border border-gray-700/50"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl space-y-8 p-6 sm:p-10">
        <Navigation title="Get in Touch" />
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Let's Connect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Feel free to reach out through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-700/30 bg-black/20 hover:bg-black/40 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-full bg-black/40 border border-gray-700/30 group-hover:border-emerald-500/30 transition-colors ${info.color}`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{info.title}</h3>
                    <a 
                      href={info.href} 
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <Card variant="glass" className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-400">100%</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                label="Name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
              />

              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <Textarea
                id="message"
                label="Message"
                placeholder="Tell me about your project or how I can help..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                required
              />

              <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-medium h-12"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>

              {responseMsg && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  responseType === "success" 
                    ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400" 
                    : "bg-red-500/20 border border-red-500/30 text-red-400"
                }`}>
                  {responseType === "success" ? (
                    <BiCheckCircle className="w-5 h-5" />
                  ) : (
                    <BiErrorCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">{responseMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8 border-t border-gray-700/30">
          <h2 className="text-2xl font-bold text-white">
            Ready to start your next project?
          </h2>
          <p className="text-gray-400">
            Let's discuss your ideas and bring them to life together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="gradient" size="lg">React Development</Badge>
            <Badge variant="gradient" size="lg">Next.js Projects</Badge>
            <Badge variant="gradient" size="lg">Full Stack Solutions</Badge>
            <Badge variant="gradient" size="lg">UI/UX Design</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
