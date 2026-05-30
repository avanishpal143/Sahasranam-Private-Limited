import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ZoomIn, Eye, Map, Award, BookOpen, Layers, ShieldCheck, Filter 
} from 'lucide-react';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'bess', label: 'BESS Solutions' },
  { id: 'substation', label: 'Substations' },
  { id: 'datacenter', label: 'Data Centre' },
  { id: 'mep-hvac', label: 'MEP / HVAC' },
  { id: 'solar-wind', label: 'Solar / Wind' },
  { id: 'mobilization', label: 'Site Mobilization' },
  { id: 'design-pmc', label: 'Design & PMC' }
];

const GALLERY_DATA = [
  {
    id: 'bess-schematic',
    title: 'BESS Container Thermal & Cell Layout',
    category: 'BESS Solutions',
    type: 'svg',
    filterType: 'bess',
    desc: 'Thermal cooling ducts, battery racks configuration, and automatic fire suppression control lines layout.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-900 border border-slate-800 rounded-lg">
        <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250 M 50 0 L 50 300 M 100 0 L 100 300 M 150 0 L 150 300 M 200 0 L 200 300 M 250 0 L 250 300 M 300 0 L 300 300 M 350 0 L 350 300" fill="none" stroke="rgba(20, 184, 166, 0.05)" strokeWidth="1" />
        <rect x="40" y="60" width="320" height="180" rx="4" fill="none" stroke="#14B8A6" strokeWidth="2.5" />
        {[80, 140, 200, 260].map((x) => (
          <g key={x}>
            <rect x={x} y="80" width="40" height="140" fill="none" stroke="#0F766E" strokeWidth="1.5" />
            {[90, 110, 130, 150, 170, 190, 210].map((y) => (
              <line key={y} x1={x+4} y1={y} x2={x+36} y2={y} stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" />
            ))}
          </g>
        ))}
        <path d="M 50 70 C 120 40, 280 40, 350 70" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M 50 230 C 120 260, 280 260, 350 230" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 5" />
        <text x="200" y="30" fill="#14B8A6" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">BESS HVAC COOLING PATHS</text>
        <text x="200" y="285" fill="#F59E0B" fontSize="9" fontWeight="medium" textAnchor="middle">500MW CONTAINER MODULE SPEC</text>
      </svg>
    )
  },
  {
    id: 'substation-sld',
    title: '400KV Substation Single Line Diagram',
    category: 'Substations',
    type: 'svg',
    filterType: 'substation',
    desc: 'High-voltage single line schematic showing double bus configurations, circuit breakers, and isolators.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg">
        <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250" fill="none" stroke="rgba(20, 184, 166, 0.05)" strokeWidth="1" />
        <line x1="30" y1="80" x2="370" y2="80" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="30" y1="100" x2="370" y2="100" stroke="#FFFFFF" strokeWidth="3" />
        <text x="40" y="70" fill="#FFFFFF" fontSize="8">BUS-1 (400KV)</text>
        <text x="40" y="112" fill="#FFFFFF" fontSize="8">BUS-2 (400KV)</text>
        {[100, 200, 300].map((x) => (
          <g key={x}>
            <circle cx={x} cy="80" r="2.5" fill="#F59E0B" />
            <line x1={x} y1="80" x2={x-10} y2="130" stroke="#14B8A6" strokeWidth="1.5" />
            <circle cx={x} cy="140" r="3" fill="#FFFFFF" />
            <rect x={x-12} y="150" width="24" height="24" rx="2" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d={`M ${x-6} ${162} L ${x+6} ${162}`} stroke="#FFFFFF" strokeWidth="2" />
            <line x1={x} y1="174" x2={x} y2="240" stroke="#14B8A6" strokeWidth="2.5" />
            <path d={`M ${x-10} 240 L ${x+10} 240 M ${x-6} 245 L ${x+6} 245 M ${x-2} 250 L ${x+2} 250`} stroke="#F59E0B" strokeWidth="1.5" />
          </g>
        ))}
        <text x="200" y="275" fill="#14B8A6" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">DOUBLE BUS SINGLE BREAK SYSTEM</text>
      </svg>
    )
  },
  {
    id: 'hvac-loop',
    title: 'Net-Zero HVAC Mechanical Airflow Loop',
    category: 'MEP / HVAC',
    type: 'svg',
    filterType: 'mep-hvac',
    desc: 'Chilled water supply, air handling unit (AHU) filter flow, and variable air volume dampers control diagram.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-900 border border-slate-800 rounded-lg">
        <rect x="50" y="100" width="300" height="80" fill="none" stroke="#E2E8F0" strokeWidth="2" />
        <line x1="120" y1="100" x2="120" y2="180" stroke="#14B8A6" strokeWidth="3" strokeDasharray="3 3" />
        <text x="120" y="90" fill="#14B8A6" fontSize="8" textAnchor="middle">HEPA FILTER</text>
        <circle cx="200" cy="140" r="25" fill="none" stroke="#F59E0B" strokeWidth="2" />
        <path d="M 200 115 L 200 165 M 175 140 L 225 140" stroke="#F59E0B" strokeWidth="2" />
        <text x="200" y="90" fill="#F59E0B" fontSize="8" textAnchor="middle">INLET AHU BLOWER</text>
        {[80, 160, 240, 320].map((x) => (
          <path key={x} d={`M ${x-20} 140 L ${x+20} 140`} stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" />
        ))}
        <path d="M 280 100 L 280 180 L 290 100 L 290 180 L 300 100 L 300 180" fill="none" stroke="#EF4444" strokeWidth="2" />
        <text x="290" y="90" fill="#EF4444" fontSize="8" textAnchor="middle">HEATING COIL</text>
        <text x="200" y="260" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">VARIABLE AIR VOLUME (VAV) FLOW CHART</text>
      </svg>
    )
  },
  {
    id: 'solar-foundation',
    title: 'Solar Array Structural Foundation & Ground Grid',
    category: 'Solar / Wind',
    type: 'svg',
    filterType: 'solar-wind',
    desc: 'Geotechnical pile foundations, structural torque tube mounts, and earth grid spacing math.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg">
        <line x1="20" y1="200" x2="380" y2="200" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="120" y1="80" x2="280" y2="120" stroke="#14B8A6" strokeWidth="4" />
        <line x1="150" y1="90" x2="150" y2="200" stroke="#E2E8F0" strokeWidth="2.5" />
        <line x1="250" y1="112" x2="250" y2="200" stroke="#E2E8F0" strokeWidth="2.5" />
        <line x1="150" y1="90" x2="250" y2="200" stroke="#F59E0B" strokeWidth="1.5" />
        <rect x="142" y="200" width="16" height="60" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="242" y="200" width="16" height="60" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="200" y="50" fill="#14B8A6" fontSize="10" fontWeight="bold" textAnchor="middle">ROOFTOP / GROUND PILE BLUEPRINT</text>
        <text x="200" y="280" fill="#F59E0B" fontSize="9" fontWeight="medium" textAnchor="middle">IEEE 80 COMPLIANT SHADOW ANGLE</text>
      </svg>
    )
  },
  {
    id: 'wind-rotor',
    title: 'Wind Turbine Nacelle Rotor Vector Diagram',
    category: 'Solar / Wind',
    type: 'svg',
    filterType: 'solar-wind',
    desc: 'Aerodynamic rotor velocity vectors, gearbox links, and high-voltage generator coupling detail.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-900 border border-slate-800 rounded-lg">
        <circle cx="150" cy="150" r="50" fill="none" stroke="#E2E8F0" strokeWidth="2" />
        <circle cx="230" cy="150" r="28" fill="none" stroke="#14B8A6" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const r1 = 45;
          const r2 = 50;
          const a = angle * (Math.PI / 180);
          return <line key={angle} x1={150 + r1*Math.cos(a)} y1={150 + r1*Math.sin(a)} x2={150 + r2*Math.cos(a)} y2={150 + r2*Math.sin(a)} stroke="#E2E8F0" strokeWidth="1.5" />;
        })}
        <line x1="150" y1="150" x2="230" y2="150" stroke="#F59E0B" strokeWidth="3" />
        <rect x="280" y="125" width="60" height="50" rx="3" fill="none" stroke="#E2E8F0" strokeWidth="2" />
        <text x="310" y="155" fill="#FFFFFF" fontSize="9" textAnchor="middle" fontWeight="bold">GEN</text>
        <line x1="258" y1="150" x2="280" y2="150" stroke="#14B8A6" strokeWidth="2.5" />
        <text x="200" y="50" fill="#14B8A6" fontSize="10" fontWeight="bold" textAnchor="middle">ROTATIONAL COUPLING & GEARBOX SPEED UP</text>
        <text x="200" y="260" fill="#F59E0B" fontSize="9" textAnchor="middle">SCADA INTEGRATED FEED STUDY SPEC</text>
      </svg>
    )
  },
  {
    id: 'power-redundancy',
    title: 'Data Centre Dual (2N) Power Loop Path',
    category: 'Data Centre',
    type: 'svg',
    filterType: 'datacenter',
    desc: 'Redundant dual power feeds (Feed A and Feed B) with static transfer switches (STS) layout schematic.',
    svg: (
      <svg viewBox="0 0 400 300" className="w-full h-auto bg-slate-950 border border-slate-800 rounded-lg">
        <rect x="40" y="60" width="80" height="40" rx="3" fill="none" stroke="#EF4444" strokeWidth="2" />
        <text x="80" y="85" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="middle">UTILITY FEED A</text>
        <rect x="280" y="60" width="80" height="40" rx="3" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <text x="320" y="85" fill="#3B82F6" fontSize="8" fontWeight="bold" textAnchor="middle">UTILITY FEED B</text>
        <rect x="150" y="160" width="100" height="50" rx="3" fill="none" stroke="#14B8A6" strokeWidth="2" />
        <text x="200" y="185" fill="#14B8A6" fontSize="9" fontWeight="bold" textAnchor="middle">STS switch</text>
        <path d="M 80 100 L 80 185 L 150 185" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 320 100 L 320 185 L 250 185" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="200" y1="210" x2="200" y2="260" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="200" cy="260" r="4" fill="#F59E0B" />
        <text x="200" y="280" fill="#F59E0B" fontSize="8" textAnchor="middle" fontWeight="bold">CRITICAL SERVERS (2N FEED)</text>
      </svg>
    )
  },
  
  // Real Project Photographs from PDF
  {
    id: 'photo-bess',
    title: '500MW BESS Utility Grid Container',
    category: 'BESS Solutions',
    type: 'image',
    filterType: 'bess',
    src: '/pdf_images/img_9_2.jpeg',
    desc: 'Verifiable physical deployment of Battery Energy Storage System (BESS) containers with safety isolation protocols. PDF Page 9.'
  },
  {
    id: 'photo-substation',
    title: '66KV/33KV Power Distribution Substation',
    category: 'Substations',
    type: 'image',
    filterType: 'substation',
    src: '/pdf_images/img_8_2.jpeg',
    desc: 'High-voltage power transformer erection, substation terminal layouts, and oil filtration services. PDF Page 8.'
  },
  {
    id: 'photo-mep-panel',
    title: 'Smart Building MEP Control Panels',
    category: 'MEP / HVAC',
    type: 'image',
    filterType: 'mep-hvac',
    src: '/pdf_images/img_4_13.jpeg',
    desc: 'Turnkey low-voltage power mechanical controls, plant cabling panels, and wiring terminations. PDF Page 4.'
  },
  {
    id: 'photo-hvac-duct',
    title: 'HVAC Airflow Venting & Duct Systems',
    category: 'MEP / HVAC',
    type: 'image',
    filterType: 'mep-hvac',
    src: '/pdf_images/img_4_14.jpeg',
    desc: 'Industrial building ventilation infrastructure including automated air dampers and climate controls. PDF Page 4.'
  },
  {
    id: 'photo-datacenter-tray',
    title: 'Data Centre High-Redundancy Cabling',
    category: 'Data Centre',
    type: 'image',
    filterType: 'datacenter',
    src: '/pdf_images/img_4_9.jpeg',
    desc: 'FRP/GI support cable tray installation routes customized for double-redundant networks (2N links). PDF Page 4.'
  },
  {
    id: 'photo-wiring-termination',
    title: 'Industrial Plant Power Distribution Routing',
    category: 'Grid Electrification',
    type: 'image',
    filterType: 'substation',
    src: '/pdf_images/img_4_10.jpeg',
    desc: 'Main incoming high-voltage electrical cable terminations inside switchyard chambers. PDF Page 4.'
  },
  {
    id: 'photo-control-relay',
    title: 'Control & Relay Panel Assemblies',
    category: 'Grid Electrification',
    type: 'image',
    filterType: 'substation',
    src: '/pdf_images/img_5_10.jpeg',
    desc: 'Type-tested synchronizing relay panels conforming to IS/IEC standard assemblies. PDF Page 5.'
  },
  {
    id: 'photo-design-cover',
    title: 'Engineering Project Management Study Cover',
    category: 'Design & PMC',
    type: 'image',
    filterType: 'design-pmc',
    src: '/pdf_images/img_1_2.jpeg',
    desc: 'Feasibility analysis and single-line diagram drawing covers for utility bidding support. PDF Page 1.'
  },
  {
    id: 'photo-services-overview',
    title: 'Sahasranam Capability Map & Matrix',
    category: 'Design & PMC',
    type: 'image',
    filterType: 'design-pmc',
    src: '/pdf_images/img_3_2.jpeg',
    desc: 'Functional roadmap mapping smart buildings, grid electrifications, and wind/solar farms. PDF Page 3.'
  },
  {
    id: 'photo-mobilization-site',
    title: 'Operations Mobilization Infrastructure Office',
    category: 'Site Mobilization',
    type: 'image',
    filterType: 'mobilization',
    src: '/pdf_images/img_16_2.jpeg',
    desc: 'Temporary operations center construction, police verifications, safety gear, and guest house setups for site engineers. PDF Page 16.'
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.filterType === activeFilter;
  });

  return (
    <div className="w-full pt-24 bg-transparent min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-slate-100/40 to-slate-50/10 border-b border-slate-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Blueprint Gallery</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Technical Designs & Visuals
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
            Click on any diagram or photograph to inspect active grid structures, vectors, and real site execution assets extracted from the Company Profile.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap gap-2">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              activeFilter === cat.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-white hover:bg-slate-100 border border-slate-200/70 text-slate-600'
            }`}
          >
            {activeFilter === cat.id && <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />}
            {cat.label}
          </button>
        ))}
      </section>

      {/* Pinterest Masonry Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="break-inside-avoid glass-card rounded-2xl p-4 flex flex-col justify-between hover:scale-[1.01] hover:shadow-lg hover:border-teal-200/50 transition-all duration-300 cursor-pointer border-glow group bg-white/80 shadow-sm"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 bg-slate-950 flex items-center justify-center min-h-[220px]">
                  {item.type === 'svg' ? (
                    item.svg
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 max-h-[260px]" 
                    />
                  )}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="px-2 pb-2 text-left">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-100/50">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-2 border-l border-slate-200 pl-2">
                    {item.type}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-800 mt-2.5 leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No items found matching the selected category.
          </div>
        )}
      </section>

      {/* Interactive Lightbox Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            
            {/* Lightbox Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative z-10 border border-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-lg bg-slate-900/40 text-white hover:bg-slate-900/80 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Area */}
                <div className="md:col-span-8 bg-slate-950 p-6 flex items-center justify-center min-h-[300px]">
                  <div className="w-full max-w-[450px] flex items-center justify-center">
                    {selectedItem.type === 'svg' ? (
                      selectedItem.svg
                    ) : (
                      <img 
                        src={selectedItem.src} 
                        alt={selectedItem.title} 
                        className="max-h-[50vh] object-contain rounded-lg shadow-lg" 
                      />
                    )}
                  </div>
                </div>

                {/* Details Area */}
                <div className="md:col-span-4 p-8 flex flex-col justify-between bg-slate-50 text-left">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold text-primary bg-teal-50 border border-teal-100/50 px-2 py-0.5 rounded uppercase tracking-wider inline-block">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-extrabold text-slate-800 text-lg leading-tight">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      {selectedItem.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 mt-6 space-y-3">
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-bold uppercase">
                      <BookOpen size={14} className="text-primary shrink-0" />
                      <span>Doc Type: {selectedItem.type === 'svg' ? 'Vector Schematic' : 'Site photograph'}</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-bold uppercase">
                      <Layers size={14} className="text-primary shrink-0" />
                      <span>Revision: R01 (2025)</span>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-slate-500 font-bold uppercase">
                      <ShieldCheck size={14} className="text-primary shrink-0" />
                      <span>HSE Safety: Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
