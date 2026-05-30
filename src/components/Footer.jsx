import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2 
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t-4 border-primary pt-12 pb-6 relative overflow-hidden">
      {/* Subtle grid background for footer */}
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="group inline-block">
              <Logo lightBg={false} suffixText="Energy" subText="Private Limited" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Integrated Design & Project Management Consultants and small-scale EPC contractor. Advancing industrial safety & sustainability across smart building infrastructure, grid electrification, and renewable energy storage.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800/80 border border-slate-700/50 rounded-lg p-2.5 w-fit">
              <ShieldCheck size={16} className="text-secondary" />
              <span>Safety First, ISO Compliant</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-5">
              Operations & Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Smart Building (MEP/HVAC/IBMS)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Grid Electrification (HV/EHV)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Renewable Energy (BESS/Solar)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Site Mobilization Logistics
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Project Management (PMC)
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary-light transition-colors">
                  Featured Portfolios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-5">
              Contact Information
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Registered Office: Plot No. 13, Ground Floor, Pocket-9, Sector-22, Rohini, New Delhi - 110086, India.
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-primary-light shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917428306467" className="hover:text-white transition-colors">+91 74283 06467</a>
                  <a href="tel:+918826345500" className="hover:text-white transition-colors">+91 88263 45500</a>
                </div>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="text-primary-light shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:sachin.jain@sahasranam.com" className="hover:text-white transition-colors">sachin.jain@sahasranam.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate compliance block */}
        <div className="border-t border-b border-slate-800 py-6 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-[10px] tracking-wide text-slate-400">
          <div>
            <span className="block font-bold text-white uppercase text-[8px] text-slate-500 mb-1">CIN IDENTIFIER</span>
            <span>U43299DL2024PTC430500</span>
          </div>
          <div>
            <span className="block font-bold text-white uppercase text-[8px] text-slate-500 mb-1">GSTIN</span>
            <span>07ABNCS3455N1ZN</span>
          </div>
          <div>
            <span className="block font-bold text-white uppercase text-[8px] text-slate-500 mb-1">MSME REGISTRATION</span>
            <span>UDYAM-DL-06-0121202</span>
          </div>
          <div>
            <span className="block font-bold text-white uppercase text-[8px] text-slate-500 mb-1">PAN NO.</span>
            <span>ABNCS3455N</span>
          </div>
          <div>
            <span className="block font-bold text-white uppercase text-[8px] text-slate-500 mb-1">TAN REFERENCE</span>
            <span>DELS07099I</span>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <span>
            © {new Date().getFullYear()} Sri Sahasranam Energy Private Limited. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <Link to="/terms" state={{ tab: 'privacy' }} className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" state={{ tab: 'terms' }} className="hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link to="/terms" state={{ tab: 'cookies' }} className="hover:text-slate-400 transition-colors">Cookies Settings</Link>
            <Link to="/terms" state={{ tab: 'ethics' }} className="hover:text-slate-400 transition-colors">Compliance Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
