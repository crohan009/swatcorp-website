import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Rohan C.',
      role: 'Founder & CEO',
      bio: 'Visionary leader driving innovation across all SWAT Corp ventures. Passionate about building technology that makes a difference.',
      image: '/logos/profile_photo.png',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'crohan@swat-corp.com',
      },
    },
  ];

  const advisors = [
    {
      name: 'Advisory Board',
      role: 'Strategic Advisors',
      bio: 'Our network of industry experts and thought leaders providing strategic guidance to our ventures.',
      placeholder: true,
    },
    {
      name: 'Technical Council',
      role: 'Technology Advisory',
      bio: 'Seasoned technologists ensuring our ventures stay at the cutting edge of innovation.',
      placeholder: true,
    },
  ];

  return (
    <div className="page-transition pt-24" data-testid="team-page">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-brand-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              The Minds Behind <span className="text-gradient">SWAT Corp</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Meet the passionate individuals driving innovation and building the future through our ventures.
            </p>
          </motion.div>

          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-syne text-2xl font-semibold text-white mb-8"
            >
              Leadership
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  data-testid={`team-member-${index}`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-background-surface border border-white/10 hover:border-brand-primary/30 transition-all duration-500">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-syne text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-brand-primary text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.bio}
                      </p>
                      
                      <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={member.social.linkedin}
                          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                          data-testid={`linkedin-${index}`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                          data-testid={`twitter-${index}`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                          data-testid={`email-${index}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-syne text-2xl font-semibold text-white mb-8"
            >
              Advisory Network
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl glass-effect border border-white/10 hover:border-brand-primary/30 transition-all duration-300"
                  data-testid={`advisor-${index}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6">
                    <span className="font-syne text-2xl font-bold text-brand-primary">
                      {advisor.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white mb-2">{advisor.name}</h3>
                  <p className="text-brand-primary text-sm font-medium mb-4">{advisor.role}</p>
                  <p className="text-gray-400 leading-relaxed">{advisor.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary/30" data-testid="join-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We're always looking for exceptional talent to join our team. If you're passionate about 
              building the future, we'd love to hear from you.
            </p>
            <a
              href="mailto:crohan@swat-corp.com?subject=Career%20Inquiry"
              data-testid="careers-link"
              className="inline-flex btn-primary bg-brand-primary hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50"
            >
              Explore Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
