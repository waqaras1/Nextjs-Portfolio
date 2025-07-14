export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Waqar Ahmed",
    "jobTitle": "MERN Stack Developer",
    "description": "MERN Stack Developer based in Karachi, Pakistan, specializing in React, Next.js, Node.js, and MongoDB development.",
    "url": "https://waqaras.dev",
    "image": "https://waqaras.dev/og-image.jpg",
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Waqar Ahmed Portfolio",
    "url": "https://waqaras.dev",
    "description": "Professional portfolio of Waqar Ahmed, a MERN Stack Developer based in Karachi, Pakistan.",
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
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
} 