import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'product' | 'article';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FarmTrack BioSciences",
      "description": "Leading provider of biopesticides, organic pest control solutions, and sustainable agricultural products in Kenya and East Africa",
      "url": "https://farmtrack.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://farmtrack.com/favicon.svg",
        "width": "512",
        "height": "512"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+254-711-495522",
          "contactType": "customer service",
          "availableLanguage": ["English", "Swahili"],
          "areaServed": "KE"
        },
        {
          "@type": "ContactPoint",
          "email": "farmtrack.consulting@gmail.com",
          "contactType": "customer service"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "NJIRU, Mwiki - Kasarani road",
        "addressLocality": "Nairobi",
        "addressRegion": "Nairobi County",
        "addressCountry": "Kenya"
      },
      "sameAs": [
        "https://web.facebook.com/p/Farmtrack-Consulting-LTD-100063821324618/",
        "https://api.whatsapp.com/send?phone=%2B254711495522"
      ],
      "foundingDate": "2010",
      "numberOfEmployees": "50-100",
      "industry": "Agriculture",
      "keywords": [
        "biopesticides",
        "organic pest control",
        "sustainable agriculture",
        "biological control agents",
        "eco-friendly farming",
        "IPM solutions",
        "Kenya agriculture",
        "East Africa farming"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-1.2921",
          "longitude": "36.8219"
        },
        "geoRadius": "2000000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "FarmTrack BioSciences Product Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Biopesticides",
              "description": "Organic pest control solutions for sustainable agriculture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Agricultural Equipment",
              "description": "Traps and monitoring equipment for pest management"
            }
          }
        ]
      }
    };

    if (type === 'website') {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "FarmTrack BioSciences",
        "url": "https://farmtrack.com",
        "description": "Leading provider of biopesticides and organic pest control solutions",
        "publisher": baseData,
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://farmtrack.com/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
    }

    if (data) {
      return { ...baseData, ...data };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;