import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Battery, Wind, Sun, Settings, ShieldCheck, MapPin, Layers 
} from 'lucide-react';
import TiltCard from '../components/TiltCard';
import FAQ from '../components/FAQ';
import CTACard from '../components/CTACard';

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'bess', label: 'BESS' },
  { id: 'substation', label: 'Substation' },
  { id: 'datacenter', label: 'Data Centre' },
  { id: 'mep-hvac', label: 'MEP / HVAC' },
  { id: 'solar-wind', label: 'Solar / Wind' }
];

const PROJECTS_DATA = [
  {
    id: 'bess-muwaih',
    title: 'Al-Muwaih ISP BESS Plant',
    client: 'M/s Tractebel',
    country: 'Saudi Arabia (KSA)',
    capacity: '500MW / 2000MWh (4 Hr depth)',
    sector: 'BESS',
    tech: 'Lithium-Ion Battery Storage with utility grid controllers',
    status: 'FEED Services Complete',
    type: 'bess',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'bess-hadar',
    title: 'Hadar ISP BESS Plant',
    client: 'M/s Tractebel',
    country: 'Saudi Arabia (KSA)',
    capacity: '500MW / 2000MWh (4 Hr depth)',
    sector: 'BESS',
    tech: 'Greenfield utility-scale energy buffer & substation links',
    status: 'FEED Services Complete',
    type: 'bess',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'bess-khushayb',
    title: 'Khushayb ISP BESS Plant',
    client: 'M/s Tractebel',
    country: 'Saudi Arabia (KSA)',
    capacity: '500MW / 2000MWh (4 Hr depth)',
    sector: 'BESS',
    tech: 'Detailed FEED sizing & compliance certifications',
    status: 'FEED Services Complete',
    type: 'bess',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'bess-kahafah',
    title: 'Kahafah ISP BESS Plant',
    client: 'M/s Tractebel',
    country: 'Saudi Arabia (KSA)',
    capacity: '500MW / 2000MWh (4 Hr depth)',
    sector: 'BESS',
    tech: 'Grid-forming inverter modeling & power flow simulations',
    status: 'FEED Services Complete',
    type: 'bess',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'bess-germany',
    title: 'WeiBenthum-kettig BESS Plant',
    client: 'M/s Tractebel',
    country: 'Germany',
    capacity: '50MW / 100MWh (2 Hr duration)',
    sector: 'BESS',
    tech: 'Containerized battery buffer for regional grid load control',
    status: 'FEED Services Complete',
    type: 'bess',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'wind-abu-dhabi',
    title: 'Al-Sila Wind Farm Project',
    client: 'M/s Tractebel',
    country: 'Abu Dhabi (UAE)',
    capacity: 'Utility Scale Bidding Support',
    sector: 'Wind',
    tech: 'Wind turbine selection support, resource studies & grid codes',
    status: 'Bidding Support Complete',
    type: 'solar-wind',
    img: '/pdf_images/img_3_2.jpeg'
  },
  {
    id: 'substation-amazon',
    title: 'Amazon Data Centre Substation',
    client: 'M/s Tractebel',
    country: 'Mumbai, India',
    capacity: '400/220KV HV Substation',
    sector: 'Substation',
    tech: 'Tender support & detailed grid interconnection configurations',
    status: 'Tender Support Completed',
    type: 'substation',
    subType: 'datacenter',
    img: '/pdf_images/img_4_9.jpeg'
  },
  {
    id: 'substation-hsiidc',
    title: 'HSIIDC Global City Grid Erection',
    client: 'M/s Vardhan',
    country: 'Gurugram (Haryana), India',
    capacity: '33KV Substations (3 Nos.)',
    sector: 'Substation',
    tech: '38 HT panels, 40Km cabling, SCADA grid system setup',
    status: 'Erection & Pre-Commissioning Complete',
    type: 'substation',
    img: '/pdf_images/img_8_2.jpeg'
  },
  {
    id: 'mep-atl',
    title: 'Amperex Technology Ltd (ATL) MEP',
    client: 'M/s Vardhan',
    country: 'Gurugram (Haryana), India',
    capacity: 'MEP & Industrial Erection',
    sector: 'MEP / HVAC',
    tech: 'Factory cabling, LT panel installation, and plant illumination',
    status: 'Erection Phase Complete',
    type: 'mep-hvac',
    img: '/pdf_images/img_4_13.jpeg'
  },
  {
    id: 'mobilization-msil',
    title: 'Maruti Suzuki (MSIL) Site Setup',
    client: 'M/s NTT Data',
    country: 'Sonipat (Haryana), India',
    capacity: 'Site Mobilization Logistics',
    sector: 'Mobilization Logistics',
    tech: 'Temporary offices, vehicle fleet, PPE supply, hospital links',
    status: 'Mobilization Complete',
    type: 'mep-hvac',
    img: '/pdf_images/img_16_2.jpeg'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bess') return project.type === 'bess';
    if (activeFilter === 'substation') return project.type === 'substation';
    if (activeFilter === 'datacenter') return project.type === 'datacenter' || project.subType === 'datacenter';
    if (activeFilter === 'mep-hvac') return project.type === 'mep-hvac';
    if (activeFilter === 'solar-wind') return project.type === 'solar-wind';
    return true;
  });

  return (
    <div className="w-full pt-24 bg-transparent min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      {/* Header Banner */}
      <section className="py-20 bg-slate-100/10 border-b border-slate-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Track Record</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Our Executed Portfolios
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
            Reflecting engineering excellence across international grid connections, industrial MEP setups, and utility BESS storage operations.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-wrap gap-2.5">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === cat.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                className="w-full"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/70 border border-slate-100 rounded-2xl overflow-hidden hover:bg-white hover:shadow-lg hover:border-teal-200/50 transition-all duration-300 relative border-glow flex flex-col justify-between h-full shadow-sm group"
                >
                  {/* Project Image Header */}
                  {project.img && (
                    <div className="w-full h-40 overflow-hidden relative border-b border-slate-100 bg-slate-100">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider px-2 py-0.5 bg-teal-50 rounded">
                          {project.sector}
                        </span>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                          {project.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                          <MapPin size={12} className="text-slate-400 shrink-0" />
                          <span>{project.country}</span>
                        </p>
                      </div>

                      <div className="pt-2 space-y-2 border-t border-slate-100 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Client:</span>
                          <span className="font-semibold text-slate-800">{project.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Capacity:</span>
                          <span className="font-semibold text-slate-800 text-right">{project.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Technology:</span>
                          <span className="font-semibold text-slate-700 text-right max-w-[170px] leading-relaxed">
                            {project.tech}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center text-[10px] text-slate-400 font-semibold mt-4">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={14} className="text-secondary" />
                        HSE Verified
                      </span>
                      <span>IS/IEC Compliant</span>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No projects found matching the criteria.
          </div>
        )}
      </section>

      <FAQ />
      <CTACard />

    </div>
  );
}
