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
  title: "Waqar Ahmed - MERN Stack Developer | Full Stack Web Developer in Karachi",
  description: "Professional portfolio of Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and MongoDB development. View my projects and get in touch for collaboration.",
  keywords: [
    "Waqar Ahmed", 
    "MERN Stack Developer", 
    "Full Stack Developer", 
    "React Developer", 
    "Next.js Developer", 
    "Node.js Developer", 
    "Web Developer Karachi", 
    "Pakistan Web Developer", 
    "MongoDB Developer", 
    "Express.js Developer",
    "Portfolio",
    "Web Development",
    "Karachi"
  ],
  authors: [{ name: "Waqar Ahmed" }],
  creator: "Waqar Ahmed",
  publisher: "Waqar Ahmed",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://waqaras.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waqaras.dev",
    title: "Waqar Ahmed - MERN Stack Developer | Full Stack Web Developer in Karachi",
    description: "Professional portfolio of Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and MongoDB development.",
    siteName: "Waqar Ahmed Portfolio",
    images: [
      {
        url: "https://waqaras.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waqar Ahmed - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqar Ahmed - MERN Stack Developer | Full Stack Web Developer in Karachi",
    description: "Professional portfolio of Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan. Specializing in React, Next.js, Node.js, and MongoDB development.",
    images: ["https://waqaras.dev/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload and DNS Prefetch */}
        <link rel="preload" href="/bgvid.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Waqar Ahmed",
              "jobTitle": "MERN Stack Developer",
              "description": "MERN Stack Developer based in Karachi, Pakistan, specializing in React, Next.js, Node.js, and MongoDB development.",
              "url": "https://waqaras.dev",
              "sameAs": [
                "https://github.com/waqaras1",
                "https://linkedin.com/in/waqaras/",
                "https://instagram.com/waqarr.as"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Aykays"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "Pakistan"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "MERN Stack"
              ]
            }),
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s9slmzu950");
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2NW404RPRG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2NW404RPRG', {
                page_title: 'Waqar Ahmed - MERN Stack Developer',
                page_location: 'https://waqaras.dev'
              });
            `,
          }}
        />
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
