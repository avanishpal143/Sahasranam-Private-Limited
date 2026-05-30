import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2 
} from 'lucide-react';
import logo from '../assets/logo.svg';

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
    <footer className="bg-slate-900 text-slate-400 border-t-4 border-primary pt-16 pb-8 relative overflow-hidden">
      {/* Subtle grid background for footer */}
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Sahasranam Energy" className="w-10 h-10 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-wider text-white uppercase leading-none">
                  Sri Sahasranam Energy
                </span>
                <span className="text-[9px] font-semibold text-primary-light uppercase tracking-widest mt-1">
                  Private Limited
                </span>
              </div>
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
                  <a href="mailto:sales@sahasranam.in" className="hover:text-white transition-colors">sales@sahasranam.in</a>
                  <a href="mailto:sahasranamenergy@gmail.com" className="hover:text-white transition-colors text-[10px]">sahasranamenergy@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-5">
              Newsletter Subscription
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscribe to our monthly brief detailing energy infrastructure trends, safety compliance standards, and renewable technology insights.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 rounded-lg p-3">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Subscription Confirmed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Corporate Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-xs outline-none focus:border-primary-light w-full transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
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
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Cookies Settings</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Compliance Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
