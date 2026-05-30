import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactCountUp from 'react-countup';
const CountUp = typeof ReactCountUp === 'function' ? ReactCountUp : (ReactCountUp.default || ReactCountUp);
import { 
  ArrowRight, ShieldCheck, Award, Zap, Cpu, Settings, Database, 
  Building2, Factory, HelpCircle, Activity, Leaf, CheckCircle2, ChevronRight, Users, Quote
} from 'lucide-react';
import ThreeHeroCanvas from '../components/ThreeHeroCanvas';
import NetworkDiagram from '../components/NetworkDiagram';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';

// Framer motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="w-full relative bg-transparent">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Cinematic Image Background Layer with linear gradient fade */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img 
            src="/hero_bg.png" 
            alt="Renewable Energy Grid" 
            className="w-full h-full object-cover opacity-[0.55] scale-105"
            style={{ filter: 'contrast(1.05) brightness(1.02)' }}
          />
          {/* Mask to ensure perfect text readability and blend with light premium theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
        </div>

        {/* WebGL 3D Canvas Background */}
        <ThreeHeroCanvas />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] energy-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-xs font-bold text-primary tracking-widest uppercase"
            >
              <ShieldCheck size={14} className="text-secondary" />
              Advancing Industrial Safety & Sustainability
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Engineering Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Energy Infrastructure
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-medium leading-relaxed"
            >
              Integrated Design, EPC, and Project Management Solutions for Smart Buildings, Grid Electrification, and Renewable Energy Projects.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Magnetic>
                <Link 
                  to="/services" 
                  className="px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 border-glow light-sweep transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight size={14} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link 
                  to="/contact" 
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-lg shadow-sm hover:shadow transition-all duration-300"
                >
                  Talk To Experts
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Grid Side Stats Panel */}
          <div className="lg:col-span-4 w-full h-full flex items-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[360px] glass-card rounded-2xl p-6 space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider border-b border-teal-900/10 pb-3 flex items-center justify-between">
                <span>Key Statistics</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-extrabold text-primary">
                    <CountUp end={22} duration={3} suffix="+" />
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-primary">
                    <CountUp end={500} duration={3} suffix="MW+" />
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">BESS Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-primary">
                    <CountUp end={100} duration={3} suffix="%" />
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Safety Driven</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-primary">
                    Multi
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Sector Expertise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED EXPERTISE */}
      <section className="py-20 bg-slate-100/10 border-t border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Box 1 */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-primary">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Engineering Excellence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Adherence to the highest engineering and design standards, leveraging type-tested equipment (up to 4000 Amp, 100 kA) conforming to IS/IEC standards.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-accent">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Technology Leadership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pioneering smart infrastructure integrations, utility BESS storage, grid substations with 2N redundancy, and IoT-enabled asset controls.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 space-y-4">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Safety First (HSE)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Absolute zero tolerance for safety violations. Complete compliance with statutory requirements, hospital tie-ups, and police verifications.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2.5. CLIENTELE & ASSOCIATE PARTNERS */}
      <section className="py-16 bg-gradient-to-br from-teal-50/60 via-white/80 to-blue-50/50 border-t border-b border-slate-200/20 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] energy-grid pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Esteemed Clientele */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase bg-teal-100/60 border border-teal-200/60 px-3 py-1 rounded-full inline-block">
                Client Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Esteemed Clientele
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sri Sahasranam Energy Private Limited is proud to execute high-value sub-consultancies and electrical engineering services directly for industry pioneers globally.
              </p>
              
              {/* Client cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Tractebel', role: 'Global Utility Design' },
                  { name: 'Vardhan', role: 'Electrical EPC / MEP' },
                  { name: 'NTT Data', role: 'Data Center Site Setup' }
                ].map((c) => (
                  <div key={c.name} className="glass-card rounded-xl p-4 text-center border-glow hover:translate-y-[-4px] bg-white/90 shadow-sm">
                    <h4 className="text-sm font-extrabold text-primary font-mono tracking-wide">{c.name}</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase mt-1.5 leading-tight">{c.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Associate Partners */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-200/50 lg:pl-10">
              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-block">
                Collaborations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Associate Partners Network
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We collaborate with a robust, certified team of engineering consultants, fabricators, and energy system auditors to deliver turnkey excellence.
              </p>
              
              {/* Partners flex-grid */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  'M/s Mithshree Consultants',
                  'M/s Sudha Infrastructure',
                  'M/s Vibhuh Power & Energy Solutions',
                  'M/s Photo Urja',
                  'M/s Yashvik Engineering',
                  'M/s Unified India',
                  'M/s Mahadev Group'
                ].map((partner) => (
                  <span 
                    key={partner} 
                    className="px-3 py-2.5 bg-white/80 border border-slate-100 hover:border-primary/20 text-slate-700 text-xs font-semibold rounded-lg shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                    {partner}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-gradient-to-br from-teal-50/50 via-white/80 to-blue-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Sector Operations</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              Powering critical infrastructure with customized MEP, substation, and battery energy installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Data Centres', icon: Database, desc: 'High-availability power networks with 2N redundancy and EHV substation linkages optimized for uptime.', bg: 'bg-teal-50/50' },
              { title: 'Commercial Buildings', icon: Building2, desc: 'Integrated MEP, smart HVAC ducting, and automated building management systems (IBMS).', bg: 'bg-amber-50/50' },
              { title: 'Industrial Plants', icon: Factory, desc: 'Heavy-duty power distribution systems, motor control centers (MCC), cabling, and plant lighting.', bg: 'bg-blue-50/50' },
              { title: 'Utilities', icon: Settings, desc: 'Design engineering for transmission lines, EHV substations (up to 400KV), and grid sync structures.', bg: 'bg-purple-50/50' },
              { title: 'Renewable Energy (BESS/Solar/Wind/CBG)', icon: Leaf, desc: 'Utility BESS integration (500MW scale), solar/wind layouts, and Compressed Bio-Gas (CBG) engineering feeds.', bg: 'bg-emerald-50/50' },
              { title: 'Smart Infrastructure', icon: Cpu, desc: 'Surveillance control centers, IoT sensor integrations, and stadium high-mast lighting projects.', bg: 'bg-sky-50/50' }
             ].map((ind, i) => {
              const Icon = ind.icon;
              return (
                <TiltCard
                  key={ind.title}
                  className="w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="glass-card rounded-2xl p-8 hover:translate-y-[-8px] transition-all duration-300 light-sweep border-glow flex flex-col justify-between h-full"
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center text-slate-800`}>
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{ind.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                    </div>
                    <div className="pt-6 flex items-center gap-1.5 text-xs text-primary font-bold">
                      <span>Learn engineering specs</span>
                      <ChevronRight size={14} />
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SERVICE ECOSYSTEM */}
      <section className="py-20 bg-transparent border-t border-b border-slate-200/30">
        <NetworkDiagram />
      </section>

      {/* 5. WHY CHOOSE SAHASRANAM */}
      <section className="py-24 bg-gradient-to-br from-teal-50/50 via-white/80 to-amber-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Copy */}
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Core Value Proposition</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Why Industry Leaders Trust Sahasranam Energy
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-slate-600 text-sm leading-relaxed">
                We represent a single point of contact for the complete project lifecycle. Our integrated approach bridges the gap between conceptual design and physical execution, reducing coordination complexity and ensuring regulatory compliance from day one.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Quality Assurance System', desc: 'NABL accredited testing, type-tested panels, and strict adherence to IS/IEC compliance.' },
                  { title: 'HSE First Safety Culture', desc: 'Emergency medical access, police verifications for teams, strict PPE compliance, and zero violation tolerance.' },
                  { title: 'Elite Technical Staff', desc: 'Directly led by veteran electrical engineers and senior supervisors (up to 26+ years experience).' },
                  { title: 'Global Execution Reach', desc: 'Proven capability supporting international projects in Saudi Arabia, Germany, Abu Dhabi, and across India.' }
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphics Panel */}
            <div className="glass-card rounded-2xl p-8 space-y-6 relative border-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest block border-b border-slate-100 pb-3">
                Corporate Credentials
              </span>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-50">
                  <span className="text-slate-500">Corporate Identity (CIN)</span>
                  <span className="font-mono text-slate-800 font-bold">U43299DL2024PTC430500</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-50">
                  <span className="text-slate-500">MSME Registration</span>
                  <span className="font-mono text-slate-800 font-bold">UDYAM-DL-06-0121202</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-50">
                  <span className="text-slate-500">GST Registration</span>
                  <span className="font-mono text-slate-800 font-bold">07ABNCS3455N1ZN</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-50">
                  <span className="text-slate-500">Occupational Health (HSE)</span>
                  <span className="text-primary font-bold">100% Fully Compliant</span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex gap-3 items-center">
                <Activity size={24} className="text-primary" />
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  <strong>Site Mobilization Services:</strong> We handle guest houses, staff vehicle logistics, PPE supplies, and hospital tie-ups to deliver immediate site readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECT LIFECYCLE */}
      <section className="py-24 bg-slate-100/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Execution Timeline</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our Project Lifecycle
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed pt-2">
              End-to-end meticulous management from engineering design to substation commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* Connecting line behind items */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-slate-100 -z-10" />

            {[
              { step: '01', title: 'Design & SLDs', desc: 'Detailed computer-aided engineering, structural math, and single-line drawing creation.' },
              { step: '02', title: 'Procurement', desc: 'Leveraging established vendor networks to obtain type-tested, cost-optimal machinery.' },
              { step: '03', title: 'Site Mobilization', desc: 'Setting up operations base, temporary offices, guest houses, and local compliance.' },
              { step: '04', title: 'Erection & Install', desc: 'Panel mounting, HV/LT distribution wiring, cable tray laying, and transformer erection.' },
              { step: '05', title: 'Commissioning', desc: 'Strict pre-testing, oil filtration, grid synchronization, SCADA links, and handover.' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50/50 border border-slate-100 rounded-xl p-5 space-y-3 relative hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-sm font-extrabold text-primary">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RENEWABLE ENERGY EXCELLENCE */}
      <section className="py-24 bg-gradient-to-r from-teal-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] energy-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary-light uppercase bg-teal-950/60 border border-teal-800/40 px-3 py-1.5 rounded-full w-fit block">
                Green Grid Technologies
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Renewable Energy & BESS (BESS | Solar | Wind | CBG)
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Specialized in the integration of Battery Energy Storage Systems (BESS), utility solar farms, wind installations, and Compressed Bio-Gas (CBG) projects. We ensure stable grid connectivity, power load shifting, frequency regulation, and voltage support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    Load Sizing & Analysis
                  </h3>
                  <p className="text-xs text-slate-400">Determining optimum storage capacity and discharge depth (e.g. 4-hour storage depth layouts).</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    Hybrid Integration
                  </h3>
                  <p className="text-xs text-slate-400">Coordinating battery banks with photovoltaic cells and wind turbine arrays to prevent generation drops.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    BESS Control Systems
                  </h3>
                  <p className="text-xs text-slate-400">Sophisticated control topologies for frequency regulation, active filtering, and grid synchronization.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    Wind & Solar Farm PMC
                  </h3>
                  <p className="text-xs text-slate-400">Resource studies, geotechnical site evaluations, and grid compliance reports.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light rounded-full" />
                    CBG Plants Integration
                  </h3>
                  <p className="text-xs text-slate-400">Process design layout, feed engineering, and Compressed Bio-Gas utility connections.</p>
                </div>
              </div>
            </div>

            {/* Right side metric showcase */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Featured BESS Execution</h3>
              
              {/* Embedded Real Photo from PDF */}
              <div className="relative rounded-xl overflow-hidden h-44 border border-white/10 group mb-4">
                <img 
                  src="/pdf_images/img_9_2.jpeg" 
                  alt="BESS Container Installation" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[9px] font-bold uppercase tracking-widest bg-primary text-white px-2 py-0.5 rounded-md">
                  Real BESS Installation Photo (PDF Page 9)
                </span>
              </div>

              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Saudi Arabia (Tractebel FEED)</span>
                    <span className="font-bold text-white">4 x 500MW / 2000MWh</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Germany (WeiBenthum FEED)</span>
                    <span className="font-bold text-white">50MW / 100MWh</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Wind Farm Tender Support (Abu Dhabi)</span>
                    <span className="font-bold text-white">Al-Sila Bidding Support</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                Our consultancy services ensure that BESS solutions are bankable, efficient, and seamlessly connected to high-voltage transmission lines.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SMART INFRASTRUCTURE */}
      <section className="py-24 bg-gradient-to-tr from-slate-100/60 via-white/80 to-teal-50/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6 space-y-2 mt-4">
                  <Cpu className="text-primary" size={20} />
                  <h4 className="font-bold text-slate-800 text-xs">IBMS Brains</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Centralized automation loops cutting costs by up to 30%.</p>
                </div>
                <div className="glass-card rounded-2xl p-6 space-y-2">
                  <Database className="text-primary" size={20} />
                  <h4 className="font-bold text-slate-800 text-xs">Data Centres</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Substation layouts with 2N redundancy for zero-downtime.</p>
                </div>
                <div className="glass-card rounded-2xl p-6 space-y-2">
                  <ShieldCheck className="text-primary" size={20} />
                  <h4 className="font-bold text-slate-800 text-xs">Surveillance</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">CCTV, PA, and fire systems integration.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6 space-y-2">
                  <Settings className="text-primary" size={20} />
                  <h4 className="font-bold text-slate-800 text-xs">MEP / HVAC</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Ducting, cable trays, and custom panels.</p>
                </div>
                
                {/* Real Installation Image Card from PDF */}
                <div className="glass-card rounded-2xl overflow-hidden p-0 relative h-[215px] border-glow group shadow-sm">
                  <img 
                    src="/pdf_images/img_4_14.jpeg" 
                    alt="Real HVAC MEP Installation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[8px] font-bold text-secondary uppercase tracking-widest bg-slate-900/50 px-2 py-0.5 rounded border border-slate-700 inline-block mb-1">
                      PDF Page 4 Image
                     </span>
                    <h4 className="font-extrabold text-white text-xs leading-snug">Smart Ducting Installation</h4>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Copy */}
            <div className="space-y-6">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Smart Buildings</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                High-Reliability Smart Infrastructure
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
              <p className="text-slate-600 text-sm leading-relaxed">
                We design and integrate smart systems that transform facilities into high-efficiency, sustainable operations. We specialize in coordinating mechanical, electrical, and plumbing (MEP) systems, climate management (HVAC), security controls (Surveillance), and intelligent building loops (IBMS).
              </p>
              
              <div className="bg-white border border-slate-100 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                <CheckCircle2 className="text-secondary mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Net-Zero Building Path</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Deploying IoT-enabled sensors for real-time asset monitoring, predictive maintenance, and bridging traditional services with renewable inputs to establish carbon-neutral structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FEATURED PROJECTS */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3 text-left">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Track Record</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Featured Portfolios
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            <Link 
              to="/projects" 
              className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:text-primary-light transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Al-Muwaih ISP BESS Plant',
                client: 'Tractebel (KSA)',
                capacity: '500MW / 2000MWh',
                sector: 'BESS Solutions',
                tech: 'Greenfield Lithium BESS, 4Hr Storage Depth',
                status: 'FEED Phase Complete',
                img: '/pdf_images/img_9_2.jpeg'
              },
              {
                title: 'Hadar ISP BESS Plant',
                client: 'Tractebel (KSA)',
                capacity: '500MW / 2000MWh',
                sector: 'BESS Solutions',
                tech: 'Greenfield Lithium BESS, 4Hr Storage Depth',
                status: 'FEED Phase Complete',
                img: '/pdf_images/img_9_2.jpeg'
              },
              {
                title: 'WeiBenthum-kettig BESS',
                client: 'Tractebel (Germany)',
                capacity: '50MW / 100MWh',
                sector: 'BESS Solutions',
                tech: 'Greenfield BESS, 2Hr Storage',
                status: 'FEED Complete',
                img: '/pdf_images/img_9_2.jpeg'
              },
              {
                title: 'Amazon Data Centre Substation',
                client: 'Tractebel (Mumbai)',
                capacity: '400/220KV HV Substation',
                sector: 'Grid Electrification',
                tech: 'Tender engineering support for redundant links',
                status: 'Tender Support Completed',
                img: '/pdf_images/img_8_2.jpeg'
              },
              {
                title: 'HSIIDC Global City Gurugram',
                client: 'Vardhan (India)',
                capacity: '33KV Substations (3 Nos.)',
                sector: 'Electrical EPC',
                tech: '38 HT panels, 40Km cabling, SCADA grid setup',
                status: 'Erection & Testing Complete',
                img: '/pdf_images/img_8_2.jpeg'
              },
              {
                title: 'Amperex Technology Ltd (ATL)',
                client: 'Vardhan (Gurugram)',
                capacity: 'MEP & Industrial Erection',
                sector: 'Smart Building Infrastructure',
                tech: 'Factory cabling, panel installations, and wiring',
                status: 'Erection Phase Complete',
                img: '/pdf_images/img_4_13.jpeg'
              }
            ].map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/70 border border-slate-100 rounded-2xl overflow-hidden hover:bg-white hover:shadow-lg hover:border-teal-200/50 transition-all duration-300 flex flex-col justify-between border-glow relative group shadow-sm"
              >
                {/* Project Image Header */}
                <div className="w-full h-40 overflow-hidden relative border-b border-slate-100 bg-slate-100">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </div>
                
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[9px] font-bold text-primary uppercase tracking-wider px-2 py-0.5 bg-teal-50 rounded">
                        {p.sector}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">
                        {p.status}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-800 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-[10px] text-slate-500 mt-1">Client: <strong>{p.client}</strong></p>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Capacity:</span>
                        <span className="font-semibold text-slate-700">{p.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Technology:</span>
                        <span className="font-semibold text-slate-700 text-right max-w-[170px] truncate">{p.tech}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MANAGEMENT TEAM */}
      <section className="py-24 bg-gradient-to-b from-slate-100/50 to-slate-50/20 border-t border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Leadership Structure</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Management Leadership
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed pt-2">
              Driven by veteran industry professionals with deep electrical engineering backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Sachin Jain', role: 'Director, Strategic Partnerships & Business Development', exp: '22+ Years Experience', spec: 'B.E. (Electrical). Core focus on BESS expansion, owner\'s representation, and EPC bidding.' },
              { name: 'Geeta Jain', role: 'Director', exp: '41+ Years Experience', spec: 'Graduate. Guiding corporate strategy, compliance pathways, and financial auditing controls.' },
              { name: 'Amit Kumar Singh', role: 'Associate Director', exp: '22+ Years Experience', spec: 'B.E. (Electrical). Leading EHV substation engineering design and grid synchronizations.' }
            ].map((member, i) => (
              <div 
                key={member.name}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between hover:bg-white transition-all duration-300 border-glow"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-primary mb-2">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug">{member.name}</h3>
                    <p className="text-xs text-primary font-semibold mt-0.5">{member.role}</p>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded border border-amber-100 mt-2 inline-block">
                      {member.exp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                    {member.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-r from-teal-50/30 to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Client Feedback</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Trusted Relationships
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Sahasranam Energy provided invaluable FEED support for our greenfield BESS projects in Saudi Arabia. Their grasp of frequency regulation and load shift parameters is world-class.",
                author: "Senior Engineering Consultant",
                org: "M/s Tractebel"
              },
              {
                quote: "The site mobilization speed and 33KV substation testing support they delivered at Kharkhoda was stellar. Zero safety warnings and complete local police compliance.",
                author: "Project Operations Head",
                org: "NTT Data Site Operations"
              }
            ].map((t, index) => (
              <div key={index} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 relative flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-slate-200" size={32} />
                <p className="text-slate-600 text-sm leading-relaxed italic relative z-10 mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold text-slate-800">{t.author}</h4>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider mt-0.5">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA / LEAD PROMPT */}
      <section className="py-20 bg-slate-100/10 relative overflow-hidden border-t border-slate-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full inline-block">
            Start Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to Advance Your Energy Infrastructure?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Consult with our senior electrical designers, BESS sizing specialists, and project coordinators. Build your smart building, substation, or green grid on solid expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 border-glow light-sweep transition-all duration-300 animate-pulse"
            >
              Contact Our Engineers
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
