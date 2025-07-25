export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Waqar Ahmed",
    "jobTitle": "Software Engineer (Backend)",
    "description": "Backend Developer at Aykays based in Karachi, Pakistan, specializing in Node.js, Express.js, PostgreSQL, and full-stack development with React.js and Next.js.",
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Waqar Ahmed Portfolio",
    "url": "https://waqaras.dev",
    "description": "Professional portfolio of Waqar Ahmed, a Backend Developer at Aykays based in Karachi, Pakistan.",
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