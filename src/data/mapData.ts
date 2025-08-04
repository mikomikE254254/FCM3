/**
 * FARMTRACK BIOSCIENCES REGIONAL MAP DATA STRUCTURE
 * =================================================
 * 
 * This file contains regional impact data for FarmTrack's presence across Kenya.
 * The data shows agricultural improvements and adoption rates by county.
 * 
 * STRUCTURE OVERVIEW:
 * - RegionData: Interface defining regional information structure
 * - regions: Array containing data for each county/region
 * 
 * REGIONAL CATEGORIES:
 * 1. Central Kenya: Coffee, tea, and horticultural crops
 * 2. Western Kenya: Maize, sugarcane, and mixed farming
 * 3. Rift Valley: Large-scale agriculture and livestock
 * 4. Coast Region: Coconuts, cashews, and tropical fruits
 * 5. Eastern Kenya: Drought-resistant crops and livestock
 * 
 * REGION FIELDS:
 * - id: Unique identifier for each region
 * - name: Official county/region name
 * - crop: Primary agricultural focus in the region
 * - improvement: Percentage improvement in yields/productivity
 * - population: Population in millions for context
 * - position: CSS positioning for map visualization (if used)
 */

export interface RegionData {
  id: string;
  name: string;
  crop: string;
  improvement: number;
  population: number;
  position: {
    top: string;
    left: string;
  };
}

export const regions: RegionData[] = [
  // ========================================
  // CENTRAL KENYA REGION
  // ========================================
  // High-value crops: coffee, tea, horticulture
  // Urban and peri-urban agriculture
  
  {
    id: 'nairobi',
    name: 'Nairobi County',
    crop: 'Urban Farming',
    improvement: 32,
    population: 4.4,
    position: {
      top: '60%',
      left: '53%'
    }
  },
  {
    id: 'kiambu',
    name: 'Kiambu County',
    crop: 'Coffee',
    improvement: 38,
    population: 2.4,
    position: {
      top: '55%',
      left: '51%'
    }
  },
  {
    id: 'nyeri',
    name: 'Nyeri County',
    crop: 'Coffee ,Tea ,avocados',
    improvement: 40,
    population: 0.8,
    position: {
      top: '47%',
      left: '53%'
    }
  },
  {
    id: 'marsabit',
    name: 'MURANGA-COUNTY',
    crop: 'Mangoes',
    improvement: 22,
    population: 0.5,
    position: {
      top: '18%',
      left: '54%'
    }
  },
  
  // ========================================
  // RIFT VALLEY REGION
  // ========================================
  // Large-scale agriculture, flowers, and mixed farming
  
  {
    id: 'nakuru',
    name: 'Nakuru County',
    crop: 'ROSSES',
    improvement: 45,
    population: 2.2,
    position: {
      top: '53%',
      left: '42%'
    }
  },
  {
    id: 'uasin_gishu',
    name: 'Kirinyaga County',
    crop: 'Avocados',
    improvement: 47,
    population: 1.2,
    position: {
      top: '44%',
      left: '38%'
    }
  },
  {
    id: 'kilifi',
    name: 'Uasin-gishu County',
    crop: 'Maize & Avocados',
    improvement: 26,
    population: 1.5,
    position: {
      top: '72%',
      left: '70%'
    }
  },
  
  // ========================================
  // EASTERN KENYA REGION
  // ========================================
  // Drought-resistant crops, fruits, and livestock
  
  {
    id: 'mombasa',
    name: 'Makueni County',
    crop: 'Mangoes & Oranges',
    improvement: 28,
    population: 1.2,
    position: {
      top: '80%',
      left: '67%'
    }
  },
  {
    id: 'machakos',
    name: 'Machakos County',
    crop: 'Vegetables & Fruits',
    improvement: 31,
    population: 1.4,
    position: {
      top: '65%',
      left: '58%'
    }
  },
  {
    id: 'meru',
    name: 'Meru County',
    crop: 'Avocadoes & Miraa',
    improvement: 35,
    population: 1.5,
    position: {
      top: '43%',
      left: '60%'
    }
  },
  
  // ========================================
  // WESTERN KENYA REGION
  // ========================================
  // Maize, sugarcane, and mixed farming systems
  
  {
    id: 'kisumu',
    name: 'Kitui County',
    crop: 'Mangoes,tomatoes,oranges and pumpkins',
    improvement: 42,
    population: 1.2,
    position: {
      top: '50%',
      left: '27%'
    }
  },
  {
    id: 'kakamega',
    name: 'Embu County',
    crop: 'coffee',
    improvement: 39,
    population: 2.0,
    position: {
      top: '42%',
      left: '28%'
    }
  }
];

/**
 * REGIONAL IMPACT METRICS:
 * ========================
 * 
 * The improvement percentages represent:
 * - Yield increases compared to conventional methods
 * - Pest reduction effectiveness
 * - Overall farm productivity improvements
 * - Farmer satisfaction and adoption rates
 * 
 * CALCULATION METHODOLOGY:
 * - Based on field trials and farmer surveys
 * - Averaged over multiple growing seasons
 * - Adjusted for regional variations and crop types
 * - Validated through third-party assessments
 * 
 * USAGE NOTES:
 * ============
 * 
 * 1. Data Updates:
 *    - Review quarterly based on new field data
 *    - Update improvement percentages annually
 *    - Add new regions as expansion occurs
 *    - Remove or consolidate underperforming areas
 * 
 * 2. Visualization:
 *    - Position coordinates are for CSS-based maps
 *    - Colors can be assigned based on improvement levels
 *    - Interactive features can show detailed statistics
 *    - Mobile-responsive design considerations
 * 
 * 3. Performance Tracking:
 *    - Monitor regional adoption rates
 *    - Track customer satisfaction by region
 *    - Identify high-potential expansion areas
 *    - Correlate with sales and distribution data
 * 
 * 4. Marketing Applications:
 *    - Use for regional success stories
 *    - Target marketing campaigns by region
 *    - Identify testimonial opportunities
 *    - Support sales team with local data
 */