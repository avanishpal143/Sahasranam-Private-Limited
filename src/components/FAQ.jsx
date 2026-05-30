import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What industrial services does Sri Sahasranam Energy provide?",
    answer: "We deliver integrated design, detailed engineering, and project management (PMC) services alongside small-scale EPC contracting. Our core operations span smart building systems (MEP, HVAC ducting, and automated building management loops - IBMS), high-voltage grid electrification (HV/EHV substations), and utility-scale renewable energy storage (BESS, Solar, and Wind)."
  },
  {
    question: "What is Sahasranam's experience with Battery Energy Storage Systems (BESS)?",
    answer: "We support major international utility-scale BESS layouts. This includes detailed pre-bid and FEED engineering support for large projects, such as the Al-Muwaih and Hadar BESS installations in Saudi Arabia (with capacity scaling up to 4x 500MW / 2000MWh) and the WeiBenthum BESS project in Germany (50MW / 100MWh)."
  },
  {
    question: "How does Sahasranam ensure compliance with IS/IEC standards and grid codes?",
    answer: "Engineering compliance is central to our process. All blueprints, electrical calculations, single-line diagrams (SLDs), and cable schematics are validated against IS/IEC guidelines. Furthermore, our partners supply panels that are type-tested (up to 4000 Amp, 100 kA) and verified by NABL-accredited laboratories."
  },
  {
    question: "What is your health, safety, and environmental (HSE) safety record?",
    answer: "We operate under an absolute safety-first culture. Our sites maintain a strict zero-tolerance policy for safety violations. All field supervisors and engineers have extensive industry experience (up to 26+ years), and we coordinate background police verifications, site safety equipment (PPE), and local hospital tie-ups for every mobilization."
  },
  {
    question: "Can Sahasranam assist with site mobilization and local logistics?",
    answer: "Yes, we handle complete site readiness. Our teams organize engineering guest houses, local staff transport, custom panel assembly hubs, temporary site offices, guest house cooking setups, and statutory clearances so project execution can start immediately."
  },
  {
    question: "How do I initiate a commercial or technical engineering consultation?",
    answer: "You can click on the floating WhatsApp widget to chat directly with our Business Director, Sachin Jain, or click the 'Talk to Experts' buttons. You can also send formal RFPs, SLDs, and bid documents directly to our consolidated business mail channel: sachin.jain@sahasranam.com."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-slate-50/30 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Expertise Guide</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto pt-2">
            Get quick answers regarding our electrical engineering scope, site safety, and energy capability portfolios.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl overflow-hidden border border-slate-100 bg-white/70 shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary' : 'text-slate-400 group-hover:text-primary'} transition-colors`} />
                    <span className={`text-sm md:text-base font-bold text-slate-800 transition-colors ${isOpen ? 'text-primary' : 'group-hover:text-slate-950'}`}>
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100/50 text-xs md:text-sm text-slate-600 leading-relaxed space-y-2">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
