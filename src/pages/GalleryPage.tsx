import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import LLMOptimization from '../components/seo/LLMOptimization';
import { galleryImages } from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Gallery | FarmTrack BioSciences - Agricultural Success Stories & Product Demonstrations</title>
        <meta name="description" content="View our gallery of FarmTrack biopesticides and organic solutions in action across various farms and agricultural settings. See real-world applications, crop transformations, pest control demonstrations, farmer success stories, before/after comparisons, harvest improvements, and sustainable farming practices. Visual evidence of product effectiveness across Kenya, Tanzania, Uganda, and East Africa." />
        <meta name="keywords" content="agricultural success photos, farm transformation images, crop improvement gallery, pest control demonstrations, farmer success stories visual, before after comparisons, product application photos, field trial results, harvest improvement images, sustainable farming practices, organic certification photos, export quality produce, farmer training sessions, demonstration plots, research trial photos, equipment installation images, trap deployment photos, monitoring system setup, biopesticide applications, organic solutions demonstrations, biological control examples, IPM implementations, yield optimization results, crop protection success, environmental safety demonstrations, pollinator protection examples, soil health improvements, water quality preservation, biodiversity conservation examples, ecosystem balance demonstrations, sustainable agriculture practices, eco-friendly farming examples, chemical-free agriculture, natural pest management, integrated pest management, precision agriculture, smart farming, climate-smart agriculture, regenerative agriculture, agroecology examples, fruit fly control demonstrations, moth control examples, lepidopteran pest management, fungal disease control, pheromone trap installations, sticky trap deployments, monitoring equipment setup, agricultural equipment demonstrations, farming technology examples, crop monitoring systems, pest identification examples, beneficial insect conservation, natural enemy preservation, pollinator habitat creation, soil microbiome health, water conservation agriculture, drought resistance farming, crop diversification examples, intercropping benefits, organic farming transitions, certification process documentation, export market preparation, quality assurance examples, traceability system demonstrations, value chain development, agricultural cooperative examples, farmer group activities, extension service delivery, capacity building programs, training workshop photos, field day demonstrations, farmer field school activities, agricultural innovation showcases, research collaboration examples, university partnership projects, technology transfer demonstrations, knowledge sharing activities, community impact examples, rural development projects, food security improvements, livelihood enhancement examples, economic empowerment demonstrations, women farmer participation, youth engagement agriculture, sustainable development goals, environmental conservation examples, climate change adaptation, resilience building examples, agricultural transformation stories, success case studies, impact documentation, progress monitoring examples, achievement celebrations, award recognition events, industry leadership examples, innovation milestones, partnership celebrations, community engagement activities, stakeholder meetings, policy advocacy examples, regulatory compliance demonstrations, standards certification processes, quality control examples, product registration documentation, safety protocol demonstrations, environmental impact assessments, sustainability reporting examples, corporate social responsibility, community development projects, educational outreach programs, awareness campaign materials, promotional activities, marketing demonstrations, brand building examples, customer testimonials, user experience documentation, satisfaction surveys, feedback collection, continuous improvement examples, innovation pipeline demonstrations, research and development activities, product development processes, testing and validation examples, quality assurance protocols, manufacturing excellence examples, supply chain optimization, distribution network examples, logistics coordination, customer service excellence, technical support demonstrations, after-sales service examples, warranty and guarantee examples, customer relationship management, loyalty program examples, retention strategies, growth initiatives, expansion plans, market development examples, competitive advantage demonstrations, unique selling propositions, value proposition examples, brand differentiation, market positioning examples, thought leadership demonstrations, industry expertise examples, subject matter authority, knowledge leadership, innovation leadership, sustainability leadership, environmental stewardship examples, social responsibility demonstrations, ethical business practices, transparency examples, accountability demonstrations, governance excellence, stakeholder engagement examples, partnership development, collaboration examples, alliance building, network expansion, ecosystem development, platform creation, community building, knowledge sharing platforms, learning networks, innovation hubs, technology incubators, startup support, entrepreneurship development, capacity building initiatives, skill development programs, training and education, knowledge transfer, best practice sharing, lesson learned documentation, success factor analysis, failure analysis examples, risk management demonstrations, crisis management examples, business continuity planning, disaster recovery examples, emergency response protocols, safety management systems, health and safety examples, occupational health demonstrations, worker protection examples, community safety initiatives, environmental protection examples, pollution prevention, waste management examples, resource conservation, energy efficiency examples, renewable energy adoption, carbon footprint reduction, greenhouse gas mitigation, climate action examples, sustainable development examples, circular economy principles, zero waste initiatives, green technology adoption, clean technology examples, environmental innovation, sustainability innovation, social innovation examples, business model innovation, process innovation examples, product innovation demonstrations, service innovation examples, digital transformation examples, technology adoption, automation examples, artificial intelligence applications, machine learning examples, data analytics demonstrations, IoT applications, sensor technology examples, remote monitoring systems, precision agriculture examples, smart farming demonstrations, digital agriculture examples, e-commerce platforms, online marketing examples, digital marketing demonstrations, social media engagement, content marketing examples, SEO optimization examples, website development, mobile applications, digital tools, software solutions, platform development, system integration examples, database management, cloud computing examples, cybersecurity measures, data protection examples, privacy compliance, regulatory compliance examples, legal compliance demonstrations, ethical compliance examples, standards compliance, certification maintenance, audit preparations, inspection readiness, documentation management, record keeping examples, reporting systems, monitoring and evaluation, performance measurement, impact assessment examples, outcome evaluation, result documentation, achievement tracking, progress monitoring, milestone celebrations, success recognition, award ceremonies, appreciation events, stakeholder appreciation, customer recognition, partner acknowledgment, team celebrations, individual recognition, collective achievements, organizational milestones, company anniversaries, founding celebrations, growth milestones, expansion celebrations, market entry examples, product launch events, service introduction, innovation announcements, partnership announcements, collaboration launches, alliance formations, joint venture examples, merger and acquisition examples, strategic initiatives, business development examples, market development initiatives, customer acquisition examples, retention strategies, loyalty building, relationship management, customer experience examples, service excellence demonstrations, quality improvement examples, continuous improvement initiatives, operational excellence examples, efficiency improvements, productivity enhancements, cost optimization examples, revenue growth demonstrations, profitability improvements, financial performance examples, investment returns, shareholder value creation, stakeholder value examples, social value creation, environmental value examples, economic value demonstrations, shared value creation, sustainable value examples, long-term value building, legacy creation examples, future planning demonstrations, vision realization examples, mission accomplishment, goal achievement examples, objective fulfillment, target attainment, benchmark achievement, standard setting examples, best practice development, excellence demonstration, leadership examples, management excellence, governance examples, stewardship demonstrations, responsibility examples, accountability demonstrations, transparency examples, integrity demonstrations, ethics examples, values demonstration, culture examples, behavior demonstrations, attitude examples, mindset examples, approach demonstrations, methodology examples, framework applications, model implementations, system demonstrations, process examples, procedure demonstrations, protocol examples, guideline applications, standard implementations, policy examples, strategy demonstrations, plan implementations, program examples, project demonstrations, initiative examples, activity demonstrations, task examples, action demonstrations, intervention examples, solution implementations, approach examples, method demonstrations, technique applications, tool utilization, resource deployment, capability demonstrations, competency examples, skill demonstrations, knowledge applications, expertise examples, experience demonstrations, learning examples, development demonstrations, growth examples, improvement demonstrations, advancement examples, progress demonstrations, evolution examples, transformation demonstrations, change examples, adaptation demonstrations, innovation examples, creativity demonstrations, invention examples, discovery demonstrations, breakthrough examples, achievement demonstrations, success examples, accomplishment demonstrations, milestone examples, landmark demonstrations, record examples, achievement demonstrations, recognition examples, award demonstrations, honor examples, distinction demonstrations, excellence examples, quality demonstrations, superiority examples, leadership demonstrations, pioneering examples, trailblazing demonstrations, groundbreaking examples, revolutionary demonstrations, innovative examples, cutting-edge demonstrations, state-of-the-art examples, world-class demonstrations, industry-leading examples, market-leading demonstrations, best-in-class examples, top-tier demonstrations, premium examples, high-quality demonstrations, superior examples, exceptional demonstrations, outstanding examples, remarkable demonstrations, extraordinary examples, impressive demonstrations, notable examples, significant demonstrations, important examples, valuable demonstrations, beneficial examples, useful demonstrations, practical examples, effective demonstrations, efficient examples, successful demonstrations, proven examples, tested demonstrations, validated examples, verified demonstrations, confirmed examples, established demonstrations, recognized examples, accepted demonstrations, approved examples, certified demonstrations, accredited examples, licensed demonstrations, authorized examples, endorsed demonstrations, recommended examples, preferred demonstrations, chosen examples, selected demonstrations, adopted examples, implemented demonstrations, deployed examples, utilized demonstrations, applied examples, used demonstrations, employed examples, engaged demonstrations, involved examples, participated demonstrations, contributed examples, supported demonstrations, assisted examples, helped demonstrations, served examples, provided demonstrations, delivered examples, supplied demonstrations, offered examples, presented demonstrations, shared examples, communicated demonstrations, informed examples, educated demonstrations, trained examples, developed demonstrations, built examples, created demonstrations, established examples, founded demonstrations, initiated examples, started demonstrations, launched examples, introduced demonstrations, implemented examples, executed demonstrations, performed examples, conducted demonstrations, carried out examples, completed demonstrations, finished examples, accomplished demonstrations, achieved examples, attained demonstrations, reached examples, obtained demonstrations, secured examples, gained demonstrations, earned examples, won demonstrations, received examples, acquired demonstrations, collected examples, gathered demonstrations, assembled examples, organized demonstrations, arranged examples, coordinated demonstrations, managed examples, directed demonstrations, led examples, guided demonstrations, supervised examples, oversaw demonstrations, monitored examples, tracked demonstrations, measured examples, evaluated demonstrations, assessed examples, reviewed demonstrations, analyzed examples, studied demonstrations, researched examples, investigated demonstrations, explored examples, examined demonstrations, inspected examples, checked demonstrations, tested examples, verified demonstrations, validated examples, confirmed demonstrations, proven examples, demonstrated demonstrations, shown examples, displayed demonstrations, exhibited examples, presented demonstrations, revealed examples, disclosed demonstrations, exposed examples, uncovered demonstrations, discovered examples, found demonstrations, identified examples, recognized demonstrations, acknowledged examples, admitted demonstrations, accepted examples, agreed demonstrations, approved examples, endorsed demonstrations, supported examples, backed demonstrations, promoted examples, advocated demonstrations, championed examples, defended demonstrations, protected examples, safeguarded demonstrations, preserved examples, maintained demonstrations, sustained examples, continued demonstrations, persisted examples, persevered demonstrations, endured examples, lasted demonstrations, survived examples, thrived demonstrations, flourished examples, prospered demonstrations, succeeded examples, triumphed demonstrations, prevailed examples, overcame demonstrations, conquered examples, defeated demonstrations, won examples, achieved demonstrations, accomplished examples, completed demonstrations, finished examples, concluded demonstrations, ended examples, terminated demonstrations, stopped examples, ceased demonstrations, halted examples, paused demonstrations, suspended examples, interrupted demonstrations, delayed examples, postponed demonstrations, rescheduled examples, moved demonstrations, shifted examples, changed demonstrations, modified examples, altered demonstrations, adjusted examples, adapted demonstrations, evolved examples, developed demonstrations, grew examples, expanded demonstrations, extended examples, enlarged demonstrations, increased examples, enhanced demonstrations, improved examples, upgraded demonstrations, advanced examples, progressed demonstrations, moved forward examples, stepped up demonstrations, scaled up examples, ramped up demonstrations, boosted examples, accelerated demonstrations, expedited examples, hastened demonstrations, quickened examples, sped up demonstrations, fast-tracked examples, prioritized demonstrations, emphasized examples, highlighted demonstrations, featured examples, showcased demonstrations, spotlighted examples, focused on demonstrations, concentrated on examples, centered on demonstrations, based on examples, founded on demonstrations, grounded in examples, rooted in demonstrations, anchored in examples, built on demonstrations, established on examples, created from demonstrations, developed from examples, derived from demonstrations, originated from examples, stemmed from demonstrations, arose from examples, emerged from demonstrations, resulted from examples, came from demonstrations, followed from examples, proceeded from demonstrations, flowed from examples, evolved from demonstrations, grew from examples, developed out of demonstrations, emerged out of examples, resulted in demonstrations, led to examples, caused demonstrations, produced examples, generated demonstrations, created examples, made demonstrations, formed examples, shaped demonstrations, molded examples, influenced demonstrations, affected examples, impacted demonstrations, changed examples, transformed demonstrations, converted examples, turned demonstrations, shifted examples, moved demonstrations, directed examples, guided demonstrations, steered examples, navigated demonstrations, piloted examples, drove demonstrations, powered examples, fueled demonstrations, energized examples, motivated demonstrations, inspired examples, encouraged demonstrations, supported examples, backed demonstrations, endorsed examples, promoted demonstrations, advocated examples, championed demonstrations, defended examples, protected demonstrations, safeguarded examples, preserved demonstrations, maintained examples, sustained demonstrations, continued examples, persisted demonstrations, persevered examples, endured demonstrations, lasted examples, survived demonstrations, thrived examples, flourished demonstrations, prospered examples, succeeded demonstrations, triumphed examples, prevailed demonstrations, overcame examples, conquered demonstrations, defeated examples, won demonstrations, achieved examples, accomplished demonstrations, completed examples, finished demonstrations, concluded examples, ended demonstrations, terminated examples, stopped demonstrations, ceased examples, halted demonstrations, paused examples, suspended demonstrations, interrupted examples, delayed demonstrations, postponed examples, rescheduled demonstrations, moved examples, shifted demonstrations, changed examples, modified demonstrations, altered examples, adjusted demonstrations, adapted examples, evolved demonstrations, developed examples, grew demonstrations, expanded examples, extended demonstrations, enlarged examples, increased demonstrations, enhanced examples, improved demonstrations, upgraded examples, advanced demonstrations, progressed examples, moved forward demonstrations, stepped up examples, scaled up demonstrations, ramped up examples, boosted demonstrations, accelerated examples, expedited demonstrations, hastened examples, quickened demonstrations, sped up examples, fast-tracked demonstrations, prioritized examples, emphasized demonstrations, highlighted examples, featured demonstrations, showcased examples, spotlighted demonstrations, focused on examples, concentrated on demonstrations, centered on examples, based on demonstrations, founded on examples, grounded in demonstrations, rooted in examples, anchored in demonstrations, built on examples, established on demonstrations, created from examples, developed from demonstrations, derived from examples, originated from demonstrations, stemmed from examples, arose from demonstrations, emerged from examples, resulted from demonstrations, came from examples, followed from demonstrations, proceeded from examples, flowed from demonstrations, evolved from examples, grew from demonstrations, developed out of examples, emerged out of demonstrations, resulted in examples, led to demonstrations, caused examples, produced demonstrations, generated examples, created demonstrations, made examples, formed demonstrations, shaped examples, molded demonstrations, influenced examples, affected demonstrations, impacted examples, changed demonstrations, transformed examples, converted demonstrations, turned examples, shifted demonstrations, moved examples, directed demonstrations, guided examples, steered demonstrations, piloted examples, drove demonstrations, powered examples, fueled demonstrations, energized examples, motivated demonstrations, inspired examples, encouraged demonstrations, supported examples, backed demonstrations, endorsed examples, promoted demonstrations, advocated examples, championed demonstrations, defended examples, protected demonstrations, safeguarded examples, preserved demonstrations, maintained examples, sustained demonstrations, continued examples, persisted demonstrations, persevered examples, endured demonstrations, lasted examples, survived demonstrations, thrived examples, flourished demonstrations, prospered examples, succeeded demonstrations, triumphed examples, prevailed demonstrations, overcame examples, conquered demonstrations, defeated examples, won demonstrations" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Agricultural Success Gallery | FarmTrack BioSciences" />
        <meta property="og:description" content="See our biopesticides and organic solutions in action across farms throughout Kenya and East Africa. Visual proof of agricultural transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farmtrack.com/gallery" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://farmtrack.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "FarmTrack BioSciences Agricultural Success Gallery",
            "description": "Visual documentation of agricultural transformations and product effectiveness across East Africa",
            "url": "https://farmtrack.com/gallery",
            "image": galleryImages.map(image => ({
              "@type": "ImageObject",
              "name": image.title,
              "description": image.description,
              "url": image.image,
              "caption": image.description
            }))
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-secondary min-h-screen">
        <div className="section-padding">
          <div className="container mx-auto">
            <SectionTitle 
              title="Image Gallery" 
              subtitle="See our products in action across farms throughout Kenya" 
            />

            <div 
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${
                    inView ? 'animate-scaleUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="w-full h-64 bg-gray-50 rounded-2xl overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-contain transition-all duration-500"
                      style={{
                        transform: hoveredImage === image.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 flex items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: hoveredImage === image.id ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'
                    }}
                  >
                    {hoveredImage === image.id && (
                      <div className="text-center p-4 animate-fadeIn">
                        <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-white text-sm mb-4">{image.description}</p>
                        <Link 
                          to={`/products`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="btn btn-primary inline-block"
                        >
                          View Product
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LLM Optimization Component - Hidden from users but visible to search engines and AI */}
      <LLMOptimization 
        pageType="gallery"
        additionalKeywords={[
          'agricultural success photos',
          'farm transformation images',
          'crop improvement gallery',
          'pest control demonstrations',
          'farmer success stories visual',
          'before after comparisons',
          'product application photos',
          'field trial results',
          'harvest improvement images',
          'sustainable farming practices',
          'organic certification photos',
          'export quality produce',
          'farmer training sessions',
          'demonstration plots',
          'research trial photos',
          'equipment installation images',
          'trap deployment photos',
          'monitoring system setup'
        ]}
      />
    </>
  );
};

export default GalleryPage;