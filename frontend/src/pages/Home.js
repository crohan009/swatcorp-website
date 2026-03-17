import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Zap, Target } from 'lucide-react';
import VenturesSection from '../components/VenturesSection';

const Home = ({ onContactClick }) => {
  const scrollToVentures = () => {
    document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="page-transition" data-testid="home-page">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Venture Incubator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
            >
              Incubating<br />
              <span className="text-gradient">the Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl"
            >
              We are dedicated to incubating cutting-edge ventures that redefine the status quo through innovation and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToVentures}
                data-testid="explore-ventures-btn"
                className="btn-primary bg-brand-primary hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50"
              >
                Explore Ventures
                <ArrowDown className="w-5 h-5" />
              </button>
              <button
                onClick={onContactClick}
                data-testid="hero-contact-btn"
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToVentures}
            className="text-gray-500 hover:text-white transition-colors animate-bounce"
            data-testid="scroll-down-btn"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </section>

      <div id="ventures">
        <VenturesSection />
      </div>

      <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-gradient">SWAT Corp</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We bring ideas to life with a unique blend of expertise and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'We push boundaries and challenge conventional thinking to create breakthrough solutions.',
              },
              {
                icon: Target,
                title: 'Focused Execution',
                description: 'From concept to launch, we maintain laser focus on delivering exceptional results.',
              },
              {
                icon: Sparkles,
                title: 'Future Ready',
                description: 'Our ventures are built to scale and adapt to the ever-evolving technological landscape.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background-surface/50 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 group"
                data-testid={`feature-${index}`}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="font-syne text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 md:p-16"
          >
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Whether you have an idea to share or want to collaborate, we'd love to hear from you.
            </p>
            <button
              onClick={onContactClick}
              data-testid="cta-contact-btn"
              className="btn-primary bg-brand-primary hover:bg-blue-500 text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50"
            >
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
