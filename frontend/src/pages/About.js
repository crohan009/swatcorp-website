import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Every venture we incubate is aligned with our core mission to advance technology for human benefit.',
    },
    {
      icon: Eye,
      title: 'Visionary Thinking',
      description: 'We see opportunities where others see obstacles, turning bold ideas into market-ready solutions.',
    },
    {
      icon: Rocket,
      title: 'Rapid Execution',
      description: 'Speed matters. We move fast from ideation to implementation without compromising on quality.',
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Trust is the foundation of everything we do. We operate with transparency and accountability.',
    },
  ];

  return (
    <div className="page-transition pt-24" data-testid="about-page">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-brand-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Building Tomorrow's <span className="text-gradient">Technology</span> Today
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              SWAT Corp is a forward-thinking venture incubator dedicated to transforming innovative ideas into 
              successful businesses. We identify, nurture, and scale ventures that have the potential to 
              reshape industries and improve lives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="mission-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To incubate cutting-edge ventures that redefine the status quo. We believe in the power 
                of technology to solve complex problems and create new possibilities.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our approach combines deep technical expertise with strategic business acumen, 
                enabling us to guide ventures from concept to market leadership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-effect p-1">
                <img
                  src="https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxBYnN0cmFjdCUyMGRhcmslMjBkYXRhJTIwbmV0d29yayUyMHBhcnRpY2xlc3xlbnwwfHx8fDE3NzM3MTc3MjV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Technology Network"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background-secondary/30" data-testid="vision-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              To be the catalyst for breakthrough innovations that shape the future of technology and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background-surface/50 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 group"
                data-testid={`value-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-syne text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="stats-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4+', label: 'Active Ventures' },
              { value: '2025', label: 'Founded' },
              { value: '100%', label: 'Commitment' },
              { value: '∞', label: 'Possibilities' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="font-syne text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
