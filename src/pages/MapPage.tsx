import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, TrendingUp, Users, MapPin, Phone, Mail, X, BarChart3, Leaf, Award } from 'lucide-react';
import { regions, RegionData } from '../data/mapData';

const MapPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const generateSimpleMetrics = (region: RegionData) => {
    return {
      yieldIncrease: region.improvement,
      pestReduction: Math.round(region.improvement * 0.85),
      profitGrowth: Math.round(region.improvement * 1.2),
      chemicalReduction: Math.round(region.improvement * 0.9),
      qualityImprovement: Math.round(region.improvement * 1.1)
    };
  };

  const handleRegionClick = (region: RegionData) => {
    setSelectedRegion(region);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseOverlay = () => {
    setSelectedRegion(null);
    document.body.style.overflow = 'auto';
  };

  const handleContactCall = () => {
    window.open('tel:+254711495522', '_self');
  };

  const handleContactEmail = () => {
    window.open('mailto:farmtrack.consulting@gmail.com', '_self');
  };

  return (
    <>
      <Helmet>
        <title>Regional Impact Map | FarmTrack BioSciences - Kenya Agricultural Performance</title>
        <meta name="description" content="Explore FarmTrack's agricultural impact across Kenya's regions. Interactive map showing performance metrics and regional success stories." />
        <meta name="keywords" content="Kenya agriculture map, regional impact, agricultural transformation, county performance" />
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">
        
        {/* Hero Image Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/15634908/pexels-photo-15634908/free-photo-of-high-angle-view-of-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Agricultural landscape across Kenya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 title-animation">Kenya Agricultural Impact</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Click on any county to see detailed agricultural improvements
              </p>
            </div>
          </div>
        </div>

        <div className="section-padding">
          <div className="container mx-auto max-w-6xl">

            {/* Simple Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-green-800" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{regions.length}</div>
                    <div className="text-sm text-gray-600">Counties</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp size={24} className="text-green-800" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {Math.round(regions.reduce((sum, r) => sum + r.improvement, 0) / regions.length)}%
                    </div>
                    <div className="text-sm text-gray-600">Avg. Improvement</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-green-800" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {regions.reduce((sum, r) => sum + r.population, 0).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">People Impacted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* County Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {regions.map((region, index) => {
                const metrics = generateSimpleMetrics(region);
                const isHovered = hoveredRegion === region.id;

                return (
                  <div
                    key={region.id}
                    className={`relative transition-all duration-500 transform cursor-pointer ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region)}
                  >
                    {/* County Box */}
                    <div
                      className="relative bg-white rounded-lg shadow-lg overflow-hidden group border-2 border-green-600 hover:shadow-2xl"
                      style={{
                        transform: isHovered ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0deg) rotateY(0deg)',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                        boxShadow: isHovered 
                          ? '0 15px 30px rgba(0,0,0,0.15), 0 0 15px rgba(34, 197, 94, 0.3)'
                          : '0 8px 20px rgba(0,0,0,0.08)',
                        minHeight: '180px'
                      }}
                    >
                      {/* Green Header with fruit images */}
                      <div className="bg-green-600 p-4 text-white relative overflow-hidden">
                        {/* Small fruit images in the background */}
                        <div className="absolute inset-0 opacity-20 flex items-center justify-end pr-2">
                          <div className="flex space-x-1">
                            <img 
                              src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=50" 
                              alt="Mango" 
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <img 
                              src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=50" 
                              alt="Avocado" 
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <img 
                              src="https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=50" 
                              alt="Orange" 
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-bold relative z-10">{region.name}</h3>
                            <p className="text-white/90 text-sm relative z-10">{region.crop}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold relative z-10">{region.improvement}%</div>
                            <div className="text-white/80 text-xs relative z-10">Growth</div>
                          </div>
                        </div>
                      </div>

                      {/* White Content Area */}
                      <div className="bg-white p-4">
                        {/* Simple Stats */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="text-center">
                            <div className="text-base font-bold text-green-700">{region.population}M</div>
                            <div className="text-xs text-gray-600">Population</div>
                          </div>
                          <div className="text-center">
                            <div className="text-base font-bold text-green-700">{metrics.pestReduction}%</div>
                            <div className="text-xs text-gray-600">Pest Control</div>
                          </div>
                          <div className="text-center">
                            <div className="text-base font-bold text-green-700">{metrics.profitGrowth}%</div>
                            <div className="text-xs text-gray-600">Profit</div>
                          </div>
                        </div>

                        {/* Click to view details */}
                        <div className="flex justify-center">
                          <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium group-hover:bg-green-200 transition-all duration-300">
                            Click for Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Good Farming Practices Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Good Farming Practices</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Integrated Pest Management",
                    description: "Combining biological, cultural, and mechanical pest control methods for sustainable farming.",
                    icon: "🌱"
                  },
                  {
                    title: "Soil Health Management",
                    description: "Maintaining soil fertility through organic matter and proper nutrient management.",
                    icon: "🌍"
                  },
                  {
                    title: "Water Conservation",
                    description: "Efficient irrigation systems and water harvesting techniques for sustainable water use.",
                    icon: "💧"
                  },
                  {
                    title: "Crop Rotation",
                    description: "Rotating different crops to maintain soil health and break pest cycles naturally.",
                    icon: "🔄"
                  },
                  {
                    title: "Organic Fertilization",
                    description: "Using compost and organic fertilizers to improve soil structure and fertility.",
                    icon: "🌿"
                  },
                  {
                    title: "Biodiversity Conservation",
                    description: "Maintaining beneficial insects and natural predators for ecological balance.",
                    icon: "🦋"
                  }
                ].map((practice, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-3xl mb-3">{practice.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{practice.title}</h3>
                    <p className="text-gray-600 text-sm">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* County Detail Overlay */}
      {selectedRegion && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scaleUp">
            
            {/* Header */}
            <div className="bg-green-600 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={handleCloseOverlay}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedRegion.name}</h2>
                  <p className="text-white/90 text-lg">{selectedRegion.crop}</p>
                  <p className="text-white/80 text-sm">Population: {selectedRegion.population}M people</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Side - Images */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt={`${selectedRegion.name} farming before FarmTrack`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Before FarmTrack Solutions</h4>
                      <p className="text-gray-600 text-sm">Traditional farming methods with limited pest control and lower yields in {selectedRegion.name}.</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt={`${selectedRegion.name} farming after FarmTrack`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2">After FarmTrack Solutions</h4>
                      <p className="text-gray-600 text-sm">Thriving crops with sustainable pest management and significantly improved yields in {selectedRegion.name}.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="space-y-6">
                  
                  {/* Performance Metrics */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <BarChart3 size={20} className="mr-2 text-green-700" />
                      Performance Improvements
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'Yield Increase', value: generateSimpleMetrics(selectedRegion).yieldIncrease, color: 'bg-green-600' },
                        { label: 'Pest Reduction', value: generateSimpleMetrics(selectedRegion).pestReduction, color: 'bg-blue-600' },
                        { label: 'Profit Growth', value: generateSimpleMetrics(selectedRegion).profitGrowth, color: 'bg-purple-600' },
                        { label: 'Chemical Reduction', value: generateSimpleMetrics(selectedRegion).chemicalReduction, color: 'bg-orange-600' }
                      ].map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-gray-700 font-medium">{metric.label}</span>
                          <div className="flex items-center space-x-3">
                            <div className="w-24 bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full ${metric.color} transition-all duration-1000`}
                                style={{ width: `${metric.value}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-800 font-bold w-12 text-right">{metric.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-blue-700" />
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Reduced chemical pesticide use by {generateSimpleMetrics(selectedRegion).chemicalReduction}%</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Improved crop quality for export markets</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Enhanced soil health and biodiversity</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Increased farmer income and livelihood security</p>
                      </div>
                    </div>
                  </div>

                  {/* Environmental Impact */}
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Leaf size={20} className="mr-2 text-yellow-700" />
                      Environmental Impact
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-700">100%</div>
                        <div className="text-sm text-gray-600">Pollinator Safe</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-700">85%</div>
                        <div className="text-sm text-gray-600">Soil Health Boost</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-700">90%</div>
                        <div className="text-sm text-gray-600">Water Quality</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-700">95%</div>
                        <div className="text-sm text-gray-600">Biodiversity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Get FarmTrack Solutions in {selectedRegion.name}
                </h3>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={handleContactCall}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </button>
                  <button 
                    onClick={handleContactEmail}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Mail size={18} />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapPage;