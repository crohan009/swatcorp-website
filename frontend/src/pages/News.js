import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'SWAT Corp Launches New Venture Incubation Program',
      excerpt: 'We\'re excited to announce our expanded program for nurturing innovative startups across AI, fitness tech, and cognitive computing.',
      date: '2025-01-15',
      category: 'Announcement',
      featured: true,
    },
    {
      id: 2,
      title: 'IVY: The Future of Personal AI Assistants',
      excerpt: 'Our flagship AI venture IVY continues to push boundaries in personalized artificial intelligence.',
      date: '2025-01-10',
      category: 'Venture Update',
      featured: false,
    },
    {
      id: 3,
      title: 'Calyx Expands Training Gear Product Line',
      excerpt: 'Premium athletic equipment brand Calyx introduces new products designed for serious athletes.',
      date: '2025-01-05',
      category: 'Product Launch',
      featured: false,
    },
    {
      id: 4,
      title: 'CalPal Mobile App Development Update',
      excerpt: 'Progress update on CalPal, the calisthenics companion app designed to transform your fitness journey.',
      date: '2024-12-20',
      category: 'Development',
      featured: false,
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="page-transition pt-24" data-testid="news-page">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-brand-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              News & Updates
            </span>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Latest from <span className="text-gradient">SWAT Corp</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Stay updated with the latest developments, announcements, and insights from our ventures.
            </p>
          </motion.div>

          {news.filter(item => item.featured).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 p-8 md:p-12 rounded-3xl glass-effect border border-brand-primary/30 hover:border-brand-primary/50 transition-all duration-300 group cursor-pointer"
              data-testid={`featured-news-${index}`}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-medium mb-4">
                Featured
              </span>
              <h2 className="font-syne text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(item.date)}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400">
                  {item.category}
                </span>
              </div>
            </motion.article>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.filter(item => !item.featured).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background-surface/50 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 group cursor-pointer"
                data-testid={`news-item-${index}`}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium mb-4">
                  {item.category}
                </span>
                <h3 className="font-syne text-lg font-semibold text-white mb-3 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                  </span>
                  <span className="text-brand-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="subscribe-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="font-syne text-2xl md:text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Get the latest updates on our ventures and announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                data-testid="subscribe-email"
                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 transition-all"
              />
              <button
                data-testid="subscribe-btn"
                className="btn-primary bg-brand-primary hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50"
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
