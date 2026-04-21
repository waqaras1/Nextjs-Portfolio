export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Waqar Ahmed",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Full-Stack Software Engineer at Aykays based in Karachi, Pakistan, specializing in React.js, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and modern web development.",
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
      "React.js",
      "Next.js", 
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Full-Stack Development",
      "Web Development",
      "API Development",
      "Microservices"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Software Engineer",
      "description": "Building modern, scalable web applications with expertise in both frontend and backend development."
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Waqar Ahmed Portfolio",
    "url": "https://waqaras.dev",
    "description": "Professional portfolio of Waqar Ahmed, a Full-Stack Software Engineer at Aykays based in Karachi, Pakistan.",
    "author": {
      "@type": "Person",
      "name": "Waqar Ahmed"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
} 