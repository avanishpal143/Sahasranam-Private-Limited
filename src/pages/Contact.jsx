import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Phone, Mail, MapPin, Building, ShieldCheck, CheckCircle2, Send, Clock, Layers 
} from 'lucide-react';

const PROJECT_TYPES = [
  'Battery Energy Storage (BESS)',
  'Substation Design (HV/EHV)',
  'Solar Utility Installation',
  'Wind Farm Consultation',
  'Smart Buildings (MEP/HVAC/IBMS)',
  'Site Mobilization Support',
  'Project Management (PMC)'
];

const BUDGET_RANGES = [
  'Below $50,000',
  '$50,000 - $200,000',
  '$200,000 - $1,000,000',
  '$1,000,000+'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[0],
    message: '',
    inquiryType: 'Technical Consultancy'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database write
    setTimeout(() => {
      // Save to local storage
      try {
        const existing = JSON.parse(localStorage.getItem('sepl_leads') || '[]');
        existing.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('sepl_leads', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
      setSubmitted(true);
      
      // Fire confetti animation!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0F766E', '#14B8A6', '#F59E0B']
      });
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[0],
      message: '',
      inquiryType: 'Technical Consultancy'
    });
  };

  return (
    <div className="w-full pt-24 bg-white min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      {/* Header Banner */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Connect with Us</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Consult With Our Engineers
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
            Submit your project parameters. Our strategic business development and technical design departments will reply within 24 working hours.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info & Cad Map */}
          <div className="lg:col-span-5 space-y-8 text-slate-600">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-teal-50 px-2.5 py-1 rounded border border-teal-100/50 w-fit block">
                Primary Coordinates
              </span>
              <h2 className="text-2xl font-extrabold text-slate-800">
                Sri Sahasranam Energy
              </h2>
              <p className="text-sm leading-relaxed">
                Direct all business inquiries, tendering support bids, and material inspection requests to our 전략 center.
              </p>
            </div>

            {/* Coordinates List */}
            <ul className="space-y-6 text-xs">
              <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Registered Office</h4>
                  <p className="mt-1 leading-relaxed text-slate-500">
                    Plot No. 13, Ground Floor, Pocket - 9, Sector - 22, Rohini, New Delhi - 110086, India.
                  </p>
                  <span className="block mt-1 font-semibold text-primary">Near Migsun Rohini Central Mall.</span>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Direct Phone Channels</h4>
                  <div className="mt-1 flex flex-col gap-1 text-slate-500 font-medium">
                    <a href="tel:+917428306467" className="hover:text-primary transition-colors">+91 74283 06467</a>
                    <a href="tel:+918826345500" className="hover:text-primary transition-colors">+91 88263 45500</a>
                  </div>
                  <span className="block mt-1 font-semibold text-accent">Director Business: Sachin Jain</span>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Official Email Channels</h4>
                  <div className="mt-1 flex flex-col gap-1 text-slate-500 font-medium">
                    <a href="mailto:sales@sahasranam.in" className="hover:text-primary transition-colors">sales@sahasranam.in</a>
                    <a href="mailto:sahasranamenergy@gmail.com" className="hover:text-primary transition-colors text-[10px]">sahasranamenergy@gmail.com</a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Visual Site Mobilization Banner from PDF */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Operations Logistics Photo</span>
              <div className="glass-card rounded-2xl overflow-hidden p-0 relative h-40 border-glow group shadow-sm">
                <img 
                  src="/pdf_images/img_16_2.jpeg" 
                  alt="Site Mobilization Office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <span className="text-[8px] font-bold text-secondary uppercase tracking-widest bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700 inline-block mb-1">
                    PDF Page 16 Image
                  </span>
                  <h4 className="font-extrabold text-white text-xs leading-snug">Turnkey Site Erection Headquarters</h4>
                </div>
              </div>
            </div>

            {/* Vector Cad Map Representation */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">GIS Location Mapping</span>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-hidden relative select-none">
                <svg viewBox="0 0 400 200" className="w-full h-auto bg-slate-950">
                  {/* Grid lines */}
                  <path d="M 0 40 L 400 40 M 0 80 L 400 80 M 0 120 L 400 120 M 0 160 L 400 160 M 80 0 L 80 200 M 160 0 L 160 200 M 240 0 L 240 200 M 320 0 L 320 200" fill="none" stroke="rgba(20, 184, 166, 0.04)" strokeWidth="1" />
                  {/* Sector-22 roads outline */}
                  <path d="M 30 20 L 350 20 M 30 100 L 370 100 M 30 170 L 350 170 M 80 20 L 80 170 M 260 20 L 260 170 M 340 20 L 340 170" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="3" />
                  {/* Pocket-9 Area */}
                  <rect x="95" y="35" width="150" height="50" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" />
                  <text x="170" y="60" fill="rgba(20, 184, 166, 0.4)" fontSize="8" textAnchor="middle">POCKET-9 / SECTOR-22</text>
                  {/* Migsun Rohini Mall */}
                  <rect x="275" y="35" width="50" height="50" rx="2" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" />
                  <text x="300" y="62" fill="#F59E0B" fontSize="7" textAnchor="middle">MIGSUN MALL</text>
                  {/* Company Pin Node */}
                  <circle cx="150" cy="100" r="10" fill="none" stroke="#14B8A6" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: '150px 100px', animationDuration: '3s' }} />
                  <circle cx="150" cy="100" r="5" fill="#14B8A6" />
                  <text x="150" y="125" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">SRI SAHASRANAM ENERGY</text>
                </svg>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                  28.7188° N, 77.0694° E
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden border-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-100 pb-4 mb-4">
                      <h3 className="text-xl font-extrabold text-slate-800">Submit Project Parameters</h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        Fields marked with an asterisk (*) are mandatory for pre-bid engineering evaluations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sachin Jain"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Corporate Company *</label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Tractebel PMC"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sachin.jain@sahasranam.in"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Contact Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 74283 06467"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        >
                          <option value="Technical Consultancy">Technical Consultancy</option>
                          <option value="EPC Contract Tender">EPC Contract Tender</option>
                          <option value="Pre-Bid Joint Venture">Pre-Bid Joint Venture</option>
                          <option value="Site Mobilization Request">Site Mobilization Request</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Project Type Focus</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                        >
                          {PROJECT_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Estimated Budget Scope</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        {BUDGET_RANGES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Message & Technical Details *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details about sizing, geographical location, timeline constraints, or specific IS/IEC standards required."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-800 outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-glow light-sweep transition-all duration-300 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Clock size={16} className="animate-spin" />
                          <span>Generating engineering ticket...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Submit Technical Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 size={36} className="animate-pulse" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-800">Inquiry Logged Successfully</h3>
                      <p className="text-slate-500 text-xs mt-1.5 max-w-sm leading-relaxed mx-auto">
                        Your pre-bid ticket has been stored in our system registry. Confetti fired to celebrate potential partnerships.
                      </p>
                    </div>

                    <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl text-left max-w-sm w-full space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Inquiry Type:</span>
                        <span className="font-bold text-slate-700">{formData.inquiryType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Project Focus:</span>
                        <span className="font-bold text-slate-700">{formData.projectType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Response SLA:</span>
                        <span className="font-bold text-primary">Within 24 Working Hours</span>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Log Another Ticket
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}
