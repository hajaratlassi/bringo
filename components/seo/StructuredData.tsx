export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bringo",
    description:
      "AI-powered customer acquisition systems combining paid acquisition, AI Search, conversion and automation.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bringo",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    description:
      "AI-powered customer acquisition systems built for growth.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
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