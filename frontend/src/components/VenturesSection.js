import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ventures = [
  {
    id: 'ivy',
    name: 'IVY',
    tagline: 'Intelligent Version of You',
    description: 'An AI-powered personal assistant that learns and adapts to become your intelligent digital twin.',
    logo: '/logos/ivy_logo.png',
    image: 'https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxBcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXVyYWwlMjBuZXR3b3JrJTIwYmx1ZXxlbnwwfHx8fDE3NzM3MTc3MjZ8MA&ixlib=rb-4.1.0&q=85',
    href: 'https://www.ivy.gen.in/',
    color: '#3B82F6',
  },
  {
    id: 'calyx',
    name: 'Calyx',
    tagline: 'Manufacturing High Quality Training Gear',
    description: 'Premium athletic equipment designed for peak performance and durability.',
    logo: '/logos/calyx_logo.png',
    image: 'https://images.unsplash.com/photo-1766389088588-21e13679ffa3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxGdXR1cmlzdGljJTIwYXRobGV0ZSUyMHRyYWluaW5nJTIwZGFyayUyMGxpZ2h0aW5nfGVufDB8fHx8MTc3MzcxNzcyN3ww&ixlib=rb-4.1.0&q=85',
    href: 'https://www.calyxcorp.shop/',
    color: '#10B981',
  },
  {
    id: 'calpal',
    name: 'CalPal',
    tagline: 'A Mobile Calisthenics Pal',
    description: 'Your pocket fitness companion for bodyweight training and progress tracking.',
    logo: '/logos/calpal_logo_light.png',
    image: 'https://images.unsplash.com/photo-1663153206192-6d0e4c9570dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwyfHxNb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBob2xvZ3JhbXxlbnwwfHx8fDE3NzM3MTc3Mjd8MA&ixlib=rb-4.1.0&q=85',
    href: 'https://github.com/crohan009/calpal_app',
    color: '#8B5CF6',
  },
  {
    id: 'touchbase',
    name: 'TouchBase',
    tagline: 'Personal Cognitive Assistant',
    description: 'An intelligent system that helps you stay connected with what matters most.',
    logo: '/logos/touchbase_logo_no_text.png',
    image: 'https://images.unsplash.com/photo-1679210208184-44fd41b1ab87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxGdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFzc2lzdGFudCUyMGhvbG9ncmFtJTIwYmx1ZXxlbnwwfHx8fDE3NzM3MTc3MzZ8MA&ixlib=rb-4.1.0&q=85',
    href: '#',
    color: '#06B6D4',
    comingSoon: true,
  },
];

const VentureCard = ({ venture, index }) => {
  const isComingSoon = venture.comingSoon;

  return (
    <motion.a
      href={isComingSoon ? undefined : venture.href}
      target={isComingSoon ? undefined : '_blank'}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`venture-card group relative overflow-hidden rounded-2xl bg-background-surface border border-white/10 ${
        isComingSoon ? 'cursor-default' : 'cursor-pointer'
      }`}
      style={{ '--card-color': venture.color }}
      data-testid={`venture-card-${venture.id}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={venture.image}
          alt={venture.name}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[320px]">
        <div className="mb-4">
          <img
            src={venture.logo}
            alt={`${venture.name} logo`}
            className="h-14 w-auto mb-4 drop-shadow-lg"
          />
        </div>

        <h3 className="font-syne text-2xl font-bold text-white mb-2 flex items-center gap-2">
          {venture.name}
          {!isComingSoon && (
            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </h3>
        <p className="text-brand-primary text-sm font-medium mb-3">{venture.tagline}</p>
        <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
          {venture.description}
        </p>

        {isComingSoon ? (
          <span className="mt-4 inline-flex items-center text-sm text-gray-500">
            Coming Soon
          </span>
        ) : (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: venture.color }}
          >
            Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: venture.color }}
      />
    </motion.a>
  );
};

const VenturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="ventures-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient">Ventures</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of projects and businesses driving innovation worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.map((venture, index) => (
            <VentureCard key={venture.id} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
