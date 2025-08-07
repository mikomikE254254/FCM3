import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const leftNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bioproducts', path: '/products' },
    { name: 'Performance', path: '/performance' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const rightNavLinks = [
    { name: 'Map', path: '/map' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: '80px',
      }}
    >
      {/* Glassy background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-green-800/15 to-green-900/20 backdrop-blur-md"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Company Logo and Name */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="FarmTrack BioSciences logo - organic biopesticides and sustainable agriculture"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold transition-colors duration-300 group-hover:text-opacity-80 leading-tight text-[#25D366]"
                style={{ 
                  fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                  fontWeight: 700,
                  fontSize: '24px',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(37, 211, 102, 0.6)',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
                }}
              >
                FarmTrack BioSciences
              </span>
              <span 
                className="text-xs font-medium tracking-wide opacity-90 text-[#25D366]"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(37, 211, 102, 0.4)'
                }}
              >
                Sustainable Agriculture Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Split Layout */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-5xl mx-8">
            <div className="flex items-center justify-between w-full">
              
              {/* Left Navigation Links */}
              <div className="flex items-center space-x-6">
                {leftNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 group ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    }`}
                    style={{ 
                      fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
                      filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))'
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Underline animation */}
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#25D366] transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></div>
                  </Link>
                ))}
              </div>

              {/* Center space */}
              <div className="flex items-center justify-center">
                {/* Empty space to maintain layout balance */}
              </div>

              {/* Right Navigation Links */}
              <div className="flex items-center space-x-6">
                {rightNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 group ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                    }`}
                    style={{ 
                      fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
                      filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))'
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Underline animation */}
                    <div 
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#25D366] transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></div>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 border border-white/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white drop-shadow-lg" />
            ) : (
              <Menu size={24} className="text-white drop-shadow-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ height: '100vh' }}
        >
          {/* Mobile Menu Header */}
          <div 
            className="flex items-center justify-between p-6 border-b border-gray-100"
            style={{ height: '60px' }}
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="FarmTrack BioSciences logo"
                className="h-8 w-8 object-contain"
              />
              <span 
                className="font-bold"
                style={{ 
                  color: '#25D366',
                  fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700
                }}
              >
                FarmTrack
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-6 py-8 space-y-2">
              {allNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                    link.name === 'Bioproducts'
                      ? 'text-[#25D366] bg-white border-2 border-[#25D366] font-bold shadow-lg'
                      : location.pathname === link.path
                      ? 'text-[#25D366] bg-[#25D366]/10 border-l-4 border-[#25D366]'
                      : 'text-[#25D366] hover:text-[#25D366]/80 hover:bg-[#25D366]/5'
                  }`}
                  style={{ 
                    fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                    fontSize: '16px',
                    fontWeight: link.name === 'Bioproducts' ? 700 : 600,
                    minHeight: '44px'
                  }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Section */}
            <div className="p-6 border-t border-gray-100 space-y-4">
              <a
                href="tel:+254711495522"
                className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#25D366]/90 transition-all duration-300 flex items-center justify-center"
                style={{ 
                  fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                  minHeight: '44px'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Now
              </a>
              <a
                href="mailto:farmtrack.consulting@gmail.com"
                className="w-full border-2 border-[#25D366] text-[#25D366] px-6 py-4 rounded-xl font-semibold hover:bg-[#25D366]/5 transition-all duration-300 flex items-center justify-center"
                style={{ 
                  fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                  minHeight: '44px'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;