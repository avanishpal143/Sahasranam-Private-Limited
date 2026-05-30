import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Zap, Leaf, Truck, HelpCircle, ShieldCheck, Cpu, X, CheckCircle, ArrowRight 
} from 'lucide-react';
import FAQ from '../components/FAQ';
import CTACard from '../components/CTACard';

const SERVICES_DATA = [
  {
    id: 'smart-infra',
    title: 'Smart Building Infrastructure',
    icon: Building2,
    short: 'Comprehensive MEP, HVAC ducting, automated IBMS control loops, surveillance, and critical 2N redundant Data Centres.',
    bullets: [
      'Mechanical, Electrical, and Plumbing (MEP) layouts integrated for optimal sustainability and carbon reduction.',
      'Climate management (HVAC) systems including ventilation, automated duct dampers, and temperature controls.',
      'Integrated Building Management Systems (IBMS) establishing a centralized operations brain to monitor energy flows.',
      'Redundant Data Center infrastructure featuring 2N redundancy layouts to guarantee 100% continuous uptime.',
      'Surveillance setups, public address (PA) frameworks, and fire fighting safety linkages.'
    ],
    codes: 'Conforming to NBC (National Building Code), IS-732 (Electrical Installations), and ASHRAE climate specs.',
    img: '/pdf_images/img_4_14.jpeg'
  },
  {
    id: 'grid-elec',
    title: 'Grid Electrification',
    icon: Zap,
    short: 'Substations operating at 66kV and above, cabling systems, custom HT/LT panel design, and power transformer testing.',
    bullets: [
      'Design & Engineering for substations up to 400KV, enabling high-voltage grid connections.',
      'Underground and overhead cable laying, jointing, termination, and FRP/GI support trays (cabling lengths up to 40Km+).',
      'Manufacturing & testing of electrical panels: HT/LT, MCC (Motor Control), PCC (Power Control), AMF & APFC panels.',
      'Supply, installation, and commissioning of power and distribution transformers ranging from 3.15 MVA to 31.5 MVA (33/11kV).',
      'Transformer oil filtration, dielectric strength testing, and continuous maintenance programs.'
    ],
    codes: 'IEC 61439 (Switchgear Assemblies), IS-2026 (Power Transformers), CEA (Central Electricity Authority) guidelines.',
    img: '/pdf_images/img_8_2.jpeg'
  },
  {
    id: 'renewables',
    title: 'Renewable Energy & BESS (BESS | Solar | Wind | CBG)',
    icon: Leaf,
    short: 'Utility-scale Battery Energy Storage Systems (BESS) sizing, solar farm layouts, wind resource modeling, and Compressed Bio-Gas (CBG) installations.',
    bullets: [
      'BESS load analysis & sizing to determine optimum container battery sizing for peak shaving and load shifting.',
      'Greenfield BESS engineering with 4-hour storage depth parameters (proven 500MW Saudi Arabia FEED capability).',
      'Solar farm site feasibility, soil analysis, structure shadow simulation, and detailed cabling layouts.',
      'Wind turbine suitability studies, foundation civil load designs, access roads, and grid synchronization analyses.',
      'Compressed Bio-Gas (CBG) project engineering support, process flow, and utility connections.',
      'Detailed pre-bid calculations, yield estimation models, and grid stability reports.'
    ],
    codes: 'IEC 62933 (BESS Systems), IEC 61727 (PV Utility Interfaces), IEEE 1547 (Interconnection Standards).',
    img: '/pdf_images/img_9_2.jpeg'
  },
  {
    id: 'mobilization',
    title: 'Site Mobilization Services',
    icon: Truck,
    short: 'Comprehensive logistical setup including temporary offices, guesthouses, staff vehicles, police verifications, and safety tie-ups.',
    bullets: [
      'Site Infrastructure: Construction of temporary project offices, security kiosks, and stores.',
      'Accommodation & Guest Houses: Fully furnished rental spaces for deployed engineers and supervisors.',
      'Logistics & Safety gear: Arrangements for utility vehicles, transport buses, and certified PPE supplies.',
      'Regulatory compliance: Background checks, police verifications, local labor registries, and license setups.',
      'Emergency health tie-ups: Retainer agreements with regional hospitals and emergency health facilities.'
    ],
    codes: 'Sourced from HSE Safety Manuals, state-specific contract labor regulations, and corporate security codes.',
    img: '/pdf_images/img_16_2.jpeg'
  },
  {
    id: 'consultancy',
    title: 'Project Consultancy (PMC)',
    icon: HelpCircle,
    short: 'Owner’s Engineer representations, pre-bid engineering assessments, quality control checks (TPQMA), and audit closures.',
    bullets: [
      'Owner’s Engineer Services: Representing clients to oversee EPC contractor speed, quality, and bill clearances.',
      'Pre-bid Engineering: Quick sizing drawings, material estimation (BOQ), and costing calculations for tender bids.',
      'Quality Audits & TPQMA: In-process inspections and material verification visits at supplier factories.',
      'Legacy Project Closures: Representing organizations to resolve outstanding audits and clear long-term bank guarantees.',
      'Technical Manpower Support: Deploys qualified engineers (ITI, B.E.) for testing, commissioning, or oversight tasks.'
    ],
    codes: 'Quality assurance aligned to ISO 9001 (QMS) and PMBOK project management practices.',
    img: '/pdf_images/img_3_2.jpeg'
  },
  {
    id: 'tech-support',
    title: 'Technical Support & Permitting',
    icon: ShieldCheck,
    short: 'Single-line diagrams, engineering certification stamps, earthing layouts, and government permit clearances.',
    bullets: [
      'Permits & Approvals: Sourcing grid approvals, MSME compliance files, and electricity inspector clearances.',
      'Lightning & Earthing protection: Specialized grid layouts calculation (IEEE 80 earthing math).',
      'Substation control panel logic: SCADA link diagrams, relay coordination configurations, and synchronizing logics.'
    ],
    codes: 'IS-3043 (Code for Earthing), IEEE-80 (Safety in AC Substation Grounding).',
    img: '/pdf_images/img_1_2.jpeg'
  },
  {
    id: 'eng-design',
    title: 'Engineering Design',
    icon: Cpu,
    short: 'Detailed structural drawings, mechanical panel schematics, high-performance wiring routing, and digital twins.',
    bullets: [
      'Computer-aided design (CAD): Drafting structural layouts for solar panels and substation gantry frames.',
      'Short-circuit studies and load-flow calculations to prevent panel trips and wiring overflows.',
      'Dynamic power quality analysis, harmonics simulation, and active filter recommendations.'
    ],
    codes: 'IEEE 519 (Harmonics Control), IS-13947 (Low-voltage Switchgear).',
    img: '/pdf_images/img_4_9.jpeg'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="w-full pt-24 bg-transparent min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      {/* Header Banner */}
      <section className="py-20 bg-slate-100/10 border-b border-slate-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Integrated Service Portfolio
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
            Click on any division below to inspect detailed engineering specifications, international codes, and full installation scopes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="glass-card rounded-2xl p-8 hover:translate-y-[-8px] transition-all duration-300 cursor-pointer border-glow light-sweep flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-snug">{service.title}</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{service.id.replace('-', ' ')}</p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">{service.short}</p>
                </div>
                
                <div className="pt-6 flex items-center gap-1.5 text-xs text-primary font-bold">
                  <span>View Specifications</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 border border-slate-100"
            >
              {/* Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-primary">
                    {React.createElement(selectedService.icon, { size: 20 })}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-lg leading-tight">
                      {selectedService.title}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mt-0.5">
                      Engineering Specification Sheet
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Visual Header Image */}
              {selectedService.img && (
                <div className="w-full h-48 overflow-hidden relative bg-slate-100">
                  <img 
                    src={selectedService.img} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  <span className="absolute bottom-3 left-6 text-[8px] font-bold uppercase tracking-widest bg-slate-900/60 text-white px-2 py-0.5 rounded border border-slate-700">
                    Real Project Asset
                  </span>
                </div>
              )}


              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Scope of Operations</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedService.short}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technical Delivery Deliverables</h4>
                  <ul className="space-y-3 text-xs text-slate-600">
                    {selectedService.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <CheckCircle size={15} className="text-secondary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50/50 p-4 rounded-xl space-y-1">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Regulatory Standards Applied</h4>
                  <p className="text-xs font-mono text-slate-600">
                    {selectedService.codes}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 p-6 flex justify-end gap-3 sticky bottom-0 bg-white/95 backdrop-blur z-20">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Close Specification
                </button>
                <a
                  href="/contact"
                  className="px-4 py-2 bg-primary hover:bg-primary-light text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-colors"
                >
                  Discuss Project Details
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FAQ />
      <CTACard />

    </div>
  );
}
