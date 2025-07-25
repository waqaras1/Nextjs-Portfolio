import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Waqar Ahmed - Software Engineer (Backend) | Backend Developer in Karachi",
  description: "Professional portfolio of Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Specializing in Node.js, Express.js, PostgreSQL, and full-stack development with React.js and Next.js. View my projects and get in touch for collaboration.",
  keywords: [
    "Waqar Ahmed", 
    "Software Engineer", 
    "Backend Developer", 
    "Node.js Developer", 
    "Express.js Developer", 
    "PostgreSQL Developer", 
    "React Developer", 
    "Next.js Developer", 
    "API Developer", 
    "Microservices Developer",
    "Portfolio",
    "Backend Development",
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
    title: "Waqar Ahmed - Software Engineer (Backend) | Backend Developer in Karachi",
    description: "Professional portfolio of Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Specializing in Node.js, Express.js, PostgreSQL, and full-stack development.",
    siteName: "Waqar Ahmed Portfolio",
    images: [
      {
        url: "https://waqaras.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Waqar Ahmed - Software Engineer (Backend)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqar Ahmed - Software Engineer (Backend) | Backend Developer in Karachi",
    description: "Professional portfolio of Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan. Specializing in Node.js, Express.js, PostgreSQL, and full-stack development.",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.clarity.ms" />
        
        {/* Resource hints for external links */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/bgvid.mp4" 
          as="video" 
          type="video/mp4"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Waqar Ahmed",
              "jobTitle": "Software Engineer (Backend)",
              "description": "Backend Developer at Aykays based in Karachi, Pakistan, specializing in Node.js, Express.js, PostgreSQL, and full-stack development with React.js and Next.js.",
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
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "API Development",
                "Microservices",
                "Backend Development"
              ]
            }),
          }}
        />
        
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s9slmzu950");
          `}
        </Script>
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
            style={{ contentVisibility: 'auto' }}
          >
            <source src="/bgvid.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
        </div>
        <div className="relative z-20">
          {children}
        </div>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2NW404RPRG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NW404RPRG', {
              page_title: 'Waqar Ahmed - Software Engineer',
              page_location: 'https://waqaras.dev'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
