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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
            {regions.map((region, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                style={{
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  height: '400px'
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${region.image})`
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{region.name}</h3>
                    </div>
                    <p className="text-white/90 mb-2 drop-shadow-md">{region.description}</p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 inline-block">
                      <p className="text-sm text-white/90">Farms: {region.farms}</p>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2 drop-shadow-md">Main Crops:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.crops.map((crop, cropIndex) => (
                          <span
                            key={cropIndex}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
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

        {/* Production Offices and Manufacturing Building Section */}
        <div className="mt-16">
          <SectionTitle 
            title="Our Production Offices and Manufacturing Building" 
            subtitle="State-of-the-art facilities ensuring quality and innovation"
          />
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Main Building Image */}
            <div className="h-96 bg-gray-100 relative overflow-hidden">
              <img 
                src="/dcc.jpg" 
                alt="FarmTrack BioSciences Production Offices and Manufacturing Building" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">FarmTrack BioSciences Headquarters</h3>
                <p className="text-white/90">NJIRU, Mwiki - Kasarani road, Kasarani Constituency, Kenya</p>
              </div>
            </div>
            
            {/* Facility Information */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Strategic Location</h4>
                  <p className="text-gray-600 text-sm">
                    Located in Nairobi's industrial hub for easy distribution across East Africa
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">
                    ISO certified manufacturing processes ensuring consistent product quality
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Sustainable Operations</h4>
                  <p className="text-gray-600 text-sm">
                    Eco-friendly manufacturing processes aligned with our environmental mission
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-800 mb-3">Visit Our Facility</h5>
                    <p className="text-gray-600 mb-2">
                      <strong>Address:</strong> NJIRU, Mwiki - Kasarani road, Kasarani Constituency, Kenya
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Phone:</strong> +254 711 495522
                    </p>
                    <p className="text-gray-600">
                      <strong>Email:</strong> farmtrack.consulting@gmail.com
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-800 mb-3">Operating Hours</h5>
                    <p className="text-gray-600 mb-2">
                      <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                    </p>
                    <p className="text-gray-600">
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href="https://www.google.com/maps/place/Farmtrack+Consulting+Limited/@-1.2454593,36.9380445,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center justify-center"
                  >
                    <MapPin size={18} className="mr-2" />
                    Get Directions
                  </a>
                  
                  <a
                    href="tel:+254711495522"
                    className="btn btn-outline flex items-center justify-center"
                  >
                    <span className="mr-2">📞</span>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;