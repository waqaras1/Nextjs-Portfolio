import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Waqar Ahmed - Full Stack Developer",
  description: "The professional portfolio of Waqar Ahmed, a passionate Full Stack Developer specializing in modern web technologies like React, Next.js, and Node.js.",
  keywords: ["Waqar Ahmed", "Full Stack Developer", "Next.js", "React", "Portfolio", "Web Developer"],
  authors: [{ name: "Waqar Ahmed" }],
  creator: "Waqar Ahmed",
  publisher: "Waqar Ahmed",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Waqar Ahmed - Full Stack Web Developer",
    description: "Portfolio website of Waqar Ahmed, a passionate Full Stack Web Developer",
    siteName: "Waqar Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqar Ahmed - Full Stack Web Developer",
    description: "Portfolio website of Waqar Ahmed, a passionate Full Stack Web Developer",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preload" href="/bgvid.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        <div className="fixed inset-0 w-full h-full z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover object-center"
            poster="/video-poster.jpg"
          >
            <source src="/bgvid.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
        </div>
        <div className="relative z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
