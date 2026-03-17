import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const ContactModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact`, formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
        onClick={onClose}
        data-testid="contact-modal-backdrop"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg glass-effect rounded-2xl p-8 modal-content"
          data-testid="contact-modal"
        >
          <button
            onClick={onClose}
            data-testid="contact-modal-close"
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
              data-testid="contact-success"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-syne text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="font-syne text-2xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-gray-400">Have a question or idea? We'd love to hear from you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email-input"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    data-testid="contact-message-input"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none"
                    placeholder="Tell us about your idea or question..."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm" data-testid="contact-error">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="w-full btn-primary bg-brand-primary hover:bg-blue-500 text-white py-3.5 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-gray-500 text-sm">
                Or email us directly at{' '}
                <a
                  href="mailto:crohan@swat-corp.com"
                  className="text-brand-primary hover:text-brand-cyan transition-colors"
                  data-testid="contact-direct-email"
                >
                  crohan@swat-corp.com
                </a>
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
