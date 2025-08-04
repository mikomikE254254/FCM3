/**
 * SEO and LLM Optimization Utilities
 * Advanced functions for enhanced search engine and AI optimization
 */

export interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  keywordDensity: number;
  readabilityScore: number;
  structuredDataPresent: boolean;
  imageAltTags: number;
  internalLinks: number;
  externalLinks: number;
}

export interface LLMOptimizationMetrics {
  contentDepth: number;
  semanticKeywords: number;
  contextualInformation: number;
  hiddenContentForAI: number;
  structuredDataComplexity: number;
}

/**
 * Calculate SEO score for a page
 */
export const calculateSEOScore = (content: string, metadata: any): SEOMetrics => {
  const titleLength = metadata.title?.length || 0;
  const descriptionLength = metadata.description?.length || 0;
  
  // Calculate keyword density
  const keywords = metadata.keywords?.split(',') || [];
  const keywordDensity = keywords.reduce((density, keyword) => {
    const regex = new RegExp(keyword.trim(), 'gi');
    const matches = content.match(regex) || [];
    return density + matches.length;
  }, 0) / content.split(' ').length * 100;

  // Simple readability score (Flesch-Kincaid approximation)
  const sentences = content.split(/[.!?]+/).length;
  const words = content.split(/\s+/).length;
  const syllables = content.split(/[aeiouAEIOU]/).length;
  const readabilityScore = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));

  // Count image alt tags
  const imageAltTags = (content.match(/alt="[^"]*"/g) || []).length;

  // Count internal and external links
  const internalLinks = (content.match(/href="\/[^"]*"/g) || []).length;
  const externalLinks = (content.match(/href="https?:\/\/[^"]*"/g) || []).length;

  return {
    titleLength,
    descriptionLength,
    keywordDensity,
    readabilityScore,
    structuredDataPresent: !!metadata.structuredData,
    imageAltTags,
    internalLinks,
    externalLinks
  };
};

/**
 * Generate comprehensive meta keywords for LLM optimization
 */
export const generateLLMKeywords = (
  primaryKeywords: string[],
  secondaryKeywords: string[],
  industryTerms: string[],
  locationTerms: string[]
): string[] => {
  const combinations = [];
  
  // Generate keyword combinations
  primaryKeywords.forEach(primary => {
    secondaryKeywords.forEach(secondary => {
      combinations.push(`${primary} ${secondary}`);
    });
    
    locationTerms.forEach(location => {
      combinations.push(`${primary} ${location}`);
    });
    
    industryTerms.forEach(industry => {
      combinations.push(`${primary} ${industry}`);
    });
  });

  // Add three-word combinations
  primaryKeywords.forEach(primary => {
    secondaryKeywords.forEach(secondary => {
      locationTerms.forEach(location => {
        combinations.push(`${primary} ${secondary} ${location}`);
      });
    });
  });

  return [...new Set([...primaryKeywords, ...secondaryKeywords, ...combinations])];
};

/**
 * Generate FAQ schema for structured data
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));
};

/**
 * Generate Product schema for structured data
 */
export const generateProductSchema = (product: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "FarmTrack BioSciences"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "FarmTrack BioSciences"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "KES",
      "seller": {
        "@type": "Organization",
        "name": "FarmTrack BioSciences"
      }
    },
    "additionalProperty": product.advantages?.map((advantage: string, index: number) => ({
      "@type": "PropertyValue",
      "name": `Advantage ${index + 1}`,
      "value": advantage
    }))
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Validate and optimize meta tags
 */
export const optimizeMetaTags = (title: string, description: string) => {
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  return {
    title: optimizedTitle,
    description: optimizedDescription,
    warnings: {
      titleTooLong: title.length > 60,
      titleTooShort: title.length < 30,
      descriptionTooLong: description.length > 160,
      descriptionTooShort: description.length < 120
    }
  };
};

/**
 * Generate semantic keywords for LLM understanding
 */
export const generateSemanticKeywords = (baseKeyword: string): string[] => {
  const semanticMap: { [key: string]: string[] } = {
    'biopesticides': [
      'biological pesticides', 'organic pest control', 'natural pesticides',
      'eco-friendly pest management', 'sustainable pest control', 'biological control agents',
      'microbial pesticides', 'botanical pesticides', 'entomopathogenic products'
    ],
    'agriculture': [
      'farming', 'cultivation', 'crop production', 'agricultural practices',
      'farm management', 'agronomy', 'horticulture', 'agricultural science',
      'sustainable farming', 'organic farming', 'precision agriculture'
    ],
    'pest control': [
      'pest management', 'insect control', 'pest elimination', 'pest prevention',
      'integrated pest management', 'IPM', 'biological control', 'pest monitoring',
      'pest suppression', 'pest reduction'
    ],
    'Kenya': [
      'East Africa', 'Kenyan agriculture', 'African farming', 'tropical agriculture',
      'sub-Saharan agriculture', 'developing country agriculture', 'smallholder farming'
    ]
  };

  const related = semanticMap[baseKeyword.toLowerCase()] || [];
  return [...related, baseKeyword];
};

/**
 * Calculate LLM optimization score
 */
export const calculateLLMScore = (content: string, hiddenContent: string): LLMOptimizationMetrics => {
  const contentDepth = content.split(' ').length;
  const semanticKeywords = (content.match(/\b(biopesticide|organic|sustainable|biological|eco-friendly|natural|integrated|pest|control|agriculture|farming)\b/gi) || []).length;
  const contextualInformation = (content.match(/\b(Kenya|East Africa|farmer|crop|yield|harvest|soil|environment)\b/gi) || []).length;
  const hiddenContentForAI = hiddenContent.split(' ').length;
  const structuredDataComplexity = (content.match(/@type|@context|schema\.org/g) || []).length;

  return {
    contentDepth,
    semanticKeywords,
    contextualInformation,
    hiddenContentForAI,
    structuredDataComplexity
  };
};

/**
 * Generate comprehensive sitemap entries
 */
export const generateDynamicSitemap = () => {
  const baseUrl = 'https://farmtrack.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // Static pages
    { url: `${baseUrl}/`, priority: 1.0, changefreq: 'weekly' },
    { url: `${baseUrl}/products`, priority: 0.9, changefreq: 'weekly' },
    { url: `${baseUrl}/performance`, priority: 0.8, changefreq: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.7, changefreq: 'monthly' },
    { url: `${baseUrl}/gallery`, priority: 0.6, changefreq: 'weekly' },
    { url: `${baseUrl}/map`, priority: 0.6, changefreq: 'monthly' },
    { url: `${baseUrl}/faq`, priority: 0.5, changefreq: 'monthly' },
    
    // Category pages (future expansion)
    { url: `${baseUrl}/products/fruit-fly-solutions`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/products/biopesticide-solutions`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/products/lepidopteran-solutions`, priority: 0.8, changefreq: 'weekly' },
    { url: `${baseUrl}/products/accessories`, priority: 0.7, changefreq: 'weekly' },
    { url: `${baseUrl}/products/fungicide-solutions`, priority: 0.7, changefreq: 'weekly' }
  ].map(entry => ({
    ...entry,
    lastmod: currentDate
  }));
};