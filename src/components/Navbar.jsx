import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import Magnetic from './Magnetic';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/75 backdrop-filter backdrop-blur-md border-b border-teal-900/10 shadow-sm' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="group">
            <Logo lightBg={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-bold tracking-wide uppercase transition-colors duration-300 py-1 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {/* Underline for active state */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic>
            <a
                href="https://wa.me/917428306467?text=Hello%20Sri%20Sahasranam%20Energy%2C%20I%20would%20like%20to%20consult%20with%20an%20engineering%20expert."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 border-glow light-sweep transition-all duration-300"
              >
                Talk To Experts
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ top: '64px', height: 'calc(100vh - 64px)' }}>
        <div className="px-4 py-8 space-y-6 flex flex-col h-full bg-gradient-to-b from-white to-teal-50/20">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold tracking-wide uppercase py-2 border-b border-slate-100 flex justify-between items-center ${
                    isActive ? 'text-primary border-primary/20' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="w-1.5 h-1.5 bg-primary rounded-full" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 flex flex-col gap-4 mt-auto">
            <a
              href="https://wa.me/917428306467?text=Hello%20Sri%20Sahasranam%20Energy%2C%20I%20would%20like%20to%20consult%20with%20an%20engineering%20expert."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-primary hover:bg-primary-light text-white font-bold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              Talk To Experts
              <ArrowRight size={16} />
            </a>
            
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold bg-slate-50 border border-slate-100 rounded-lg p-3 mt-4">
              <ShieldCheck size={16} className="text-primary" />
              100% HSE Safety Compliant
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
