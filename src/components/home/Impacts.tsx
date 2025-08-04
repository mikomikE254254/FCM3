import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Impact {
  title: string;
  image: string;
  description: string;
}

const Impacts: React.FC = () => {
  const [selectedImpact, setSelectedImpact] = useState<Impact | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impacts = [
    {
      title: 'Innovation',
image:'https://images.pexels.com/photos/32280286/pexels-photo-32280286.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
      description: 'Our Innovative pest and disease control now replaces harmful synthetic chemicals with natural, bio-based alternatives. These include plant extracts to disrupt insect mating, biopesticides targeting pests, and entomopathogenic fungi (EPF) that kill insects naturally. Parasitoids and engineered bacteria also help manage crop threats. Together, these eco-friendly solutions promote sustainable agriculture by protecting crops without harming the environment, offering a safer and more sustainable alternative to conventional chemical pesticides.'
    },
    {
      title: 'LOSS REDUCTION & INCREASED YIELDS',
      image: 'https://i.postimg.cc/15W2GPH1/Untitled-design-66.png',
      description: 'FarmTrack reduces produce loss and boosts yields by up to 80% through advanced bioscience solutions like biopesticides, natural extracts, and beneficial microbes. These eco-friendly methods protect crops from pests and diseases, improve soil health, and enhance plant growth—ensuring higher productivity, sustainability, and reduced dependency on synthetic chemicals.'
    },
    {
      title: 'compliance with market requirements',
      image: 'https://i.postimg.cc/BZx9rdBd/Untitled-design-69.png',
      description: 'FarmTrack ensures farm produce meets international and local market standards by using natural, residue-free bioscience solutions. Our eco-friendly methods leave no harmful chemicals, making crops safe for consumption. This builds global trust, enhances market access, and positions FarmTrack produce as clean, sustainable, and reputable across both local and international markets.(human animal environment ,bees)'
    },
    {
      title: 'ONE HEALTH +',
      image: 'https://i.postimg.cc/jS1FwXhH/Untitled-design-70.png',
      description: 'FarmTrack\'s bioscience solutions promote user health and environmental safety by targeting only specific pests, leaving beneficial organisms unharmed. With no chemical residue left behind, crops remain safe for consumption. These eco-friendly methods support long-term sustainability by preserving soil and water quality, ensuring healthier ecosystems and reliable, clean food production for future generations.'
    },
  ];

  return (
    <>
      <section id="impacts" className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Impacts" 
            subtitle="See how FarmTrack transforms modern agriculture through these key areas"
          />

          <div 
            ref={ref} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className={`card cursor-pointer ${inView ? 'animate-scaleUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImpact(impact)}
              >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={impact.image} 
                    alt={impact.title} 
                    className="w-full h-full object-contain bg-gray-50" 
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{impact.title}</h3>
                <p className="text-gray-600 line-clamp-3">{impact.description}</p>
                <button className="text-primary font-medium mt-2 hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Detail Overlay */}
      {selectedImpact && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scaleUp">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedImpact.title}</h2>
              <button
                onClick={() => setSelectedImpact(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
              <img 
                src={selectedImpact.image} 
                alt={selectedImpact.title}
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
            <p className="text-gray-600 leading-relaxed">{selectedImpact.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Impacts;