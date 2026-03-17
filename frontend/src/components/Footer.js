import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'News', path: '/news' },
    ],
    ventures: [
      { name: 'IVY', href: 'https://www.ivy.gen.in/', external: true },
      { name: 'Calyx', href: 'https://www.calyxcorp.shop/', external: true },
      { name: 'CalPal', href: 'https://github.com/crohan009/calpal_app', external: true },
      { name: 'TouchBase', href: '#', external: false },
    ],
  };

  return (
    <footer data-testid="main-footer" className="relative z-10 bg-background-secondary/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logos/swat_logo-no-background.png"
                alt="SWAT Corp"
                className="h-12 w-auto"
              />
              <span className="font-syne font-bold text-2xl tracking-tight text-white">
                SWAT CORP
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Incubating cutting-edge ventures that redefine the status quo. 
              We build the future through innovation, technology, and relentless pursuit of excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:crohan@swat-corp.com"
                data-testid="footer-email"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-github"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-twitter"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-white mb-6 tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-${link.name.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onContactClick}
                  data-testid="footer-contact-btn"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-syne font-semibold text-white mb-6 tracking-wide">VENTURES</h4>
            <ul className="space-y-3">
              {footerLinks.ventures.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`footer-venture-${link.name.toLowerCase()}`}
                      className="text-gray-400 hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <span
                      data-testid={`footer-venture-${link.name.toLowerCase()}`}
                      className="text-gray-500 cursor-default"
                    >
                      {link.name} <span className="text-xs">(Coming Soon)</span>
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SWAT Corp Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={onContactClick}
              data-testid="footer-get-in-touch"
              className="text-brand-primary hover:text-brand-cyan transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
