import { useState, useEffect, useCallback } from 'react';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { footerSocialLinks, quickLinks } from '../data/content';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-1 mb-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Anas
              </span>
              <span className="text-xl font-bold text-blue-600">.</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A passionate full-stack developer dedicated to creating innovative
              web solutions and bringing digital ideas to life through clean,
              efficient code and beautiful design.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  anasfurqan643@gmail.com
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Location</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Pakistan</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Availability</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Open for freelance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Anas Furqan.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <FiHeart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
