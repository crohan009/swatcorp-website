import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
  ];

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-primary/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
            <img
              src="/logos/swat_logo-no-background.png"
              alt="SWAT Corp"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-syne font-bold text-xl tracking-tight text-white hidden sm:block">
              SWAT CORP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-primary'
                    : 'text-gray-300 hover:text-white'
                } link-hover`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                data-testid="more-dropdown"
                className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 py-2 glass-effect rounded-xl shadow-2xl"
                  >
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      data-testid="dropdown-about"
                    >
                      Our Mission
                    </Link>
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      data-testid="dropdown-team"
                    >
                      Leadership
                    </Link>
                    <Link
                      to="/news"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      data-testid="dropdown-news"
                    >
                      Latest Updates
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              data-testid="header-contact-btn"
              className="hidden md:block btn-primary bg-brand-primary hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50"
            >
              Get in Touch
            </button>

            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10"
              data-testid="mobile-nav"
            >
              <nav className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-brand-primary/20 text-brand-primary'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  data-testid="mobile-contact-btn"
                  className="mt-2 mx-4 bg-brand-primary text-white py-3 rounded-full font-medium"
                >
                  Get in Touch
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
