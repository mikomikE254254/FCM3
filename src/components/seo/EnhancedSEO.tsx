import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqSchema?: any[];
  productSchema?: any;
  organizationSchema?: any;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "FarmTrack BioSciences - Leading Biopesticides & Organic Pest Control Solutions",
  description = "Revolutionary biopesticides and organic pest control solutions for sustainable agriculture. Increase yields by 80%, reduce chemicals by 95%, and achieve organic certification with FarmTrack BioSciences.",
  keywords = "biopesticides, organic pest control, sustainable agriculture, biological control agents, eco-friendly farming, IPM solutions, Kenya agriculture",
  canonicalUrl = "https://farmtrack.com",
  ogImage = "https://farmtrack.com/og-image.jpg",
  breadcrumbs,
  faqSchema,
  productSchema,
  organizationSchema
}) => {
  // Enhanced Organization Schema
  const enhancedOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FarmTrack BioSciences",
    "alternateName": "FarmTrack",
    "description": "Leading provider of biopesticides, organic pest control solutions, and sustainable agricultural products in Kenya and East Africa",
    "url": "https://farmtrack.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://farmtrack.com/favicon.svg",
      "width": "512",
      "height": "512"
    },
    "image": "https://farmtrack.com/og-image.jpg",
    "telephone": "+254-711-495522",
    "email": "farmtrack.consulting@gmail.com",
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "industry": "Agriculture",
    "naics": "325320",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+254-711-495522",
        "contactType": "customer service",
        "availableLanguage": ["English", "Swahili"],
        "areaServed": ["KE", "TZ", "UG", "RW"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "farmtrack.consulting@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["English", "Swahili"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NJIRU, Mwiki - Kasarani road",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "addressCountry": "KE",
      "postalCode": "00100"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2454593",
      "longitude": "36.9406194"
    },
    "sameAs": [
      "https://web.facebook.com/p/Farmtrack-Consulting-LTD-100063821324618/",
      "https://api.whatsapp.com/send?phone=%2B254711495522"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FarmTrack BioSciences Product Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Biopesticides",
            "description": "Organic pest control solutions for sustainable agriculture",
            "category": "Agricultural Chemicals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Agricultural Equipment",
            "description": "Traps and monitoring equipment for pest management",
            "category": "Agricultural Equipment"
          }
        }
      ]
    },
    "award": [
      "Leading Agricultural Innovation Company East Africa 2023",
      "Sustainable Agriculture Excellence Award 2022"
    ],
    "knowsAbout": [
      "Biopesticides",
      "Organic Pest Control",
      "Sustainable Agriculture",
      "Integrated Pest Management",
      "Biological Control Agents",
      "Entomopathogenic Fungi",
      "Pheromone Traps",
      "Fruit Fly Control",
      "Crop Protection",
      "Agricultural Innovation"
    ],
    ...organizationSchema
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FarmTrack BioSciences",
    "url": "https://farmtrack.com",
    "description": "Leading provider of biopesticides and organic pest control solutions",
    "publisher": enhancedOrgSchema,
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://farmtrack.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://farmtrack.com/products"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://farmtrack.com/performance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://farmtrack.com/about"
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Enhanced Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="FarmTrack BioSciences" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="sw_KE" />
      
      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@FarmTrackBio" />
      <meta name="twitter:creator" content="@FarmTrackBio" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="FarmTrack BioSciences" />
      <meta name="publisher" content="FarmTrack BioSciences" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Kenya" />
      <meta name="geo.position" content="-1.2454593;36.9406194" />
      <meta name="ICBM" content="-1.2454593, 36.9406194" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile and App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FarmTrack" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//images.pexels.com" />
      <link rel="dns-prefetch" href="//i.postimg.cc" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedOrgSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema
          })}
        </script>
      )}
      
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;