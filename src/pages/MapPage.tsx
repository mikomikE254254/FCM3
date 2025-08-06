import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Leaf, Droplets, Sun, Shield } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import LLMOptimization from '../components/seo/LLMOptimization';
import { regions } from '../data/mapData';

const MapPage: React.FC = () => {
  const practices = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Eco-friendly practices that preserve soil health and biodiversity"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Efficient irrigation systems and water management techniques"
    },
    {
      icon: Sun,
      title: "Climate Adaptation",
      description: "Resilient farming methods adapted to changing climate conditions"
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Integrated pest management and organic protection methods"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Farm Locations - FarmTrack</title>
        <meta name="description" content="Discover FarmTrack locations across Kenya. Find farms in your region and learn about local agricultural practices." />
      </Helmet>
      
      <LLMOptimization 
        content="FarmTrack farm locations across Kenya regions with sustainable farming practices"
        keywords={['farm locations', 'Kenya agriculture', 'regional farming', 'sustainable practices']}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Farm Locations" 
            subtitle="Discover FarmTrack presence across Kenya's agricultural regions"
          />

          {/* Regions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
                }}
              >
                {/* Header */}
                <div className="bg-white p-6 relative">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="text-green-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">{region.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-1">{region.description}</p>
                  <p className="text-sm text-gray-600">Farms: {region.farms}</p>
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Main Crops:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.crops.map((crop, cropIndex) => (
                          <span
                            key={cropIndex}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Climate:</h4>
                      <p className="text-gray-600 text-sm">{region.climate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Good Farming Practices Section */}
          <div className="mt-16">
            <SectionTitle 
              title="Good Farming Practices" 
              subtitle="Sustainable methods we promote across all regions"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practices.map((practice, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <practice.icon className="text-white mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-bold text-white mb-3">{practice.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;