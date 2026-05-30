import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Target, Eye, Compass, Award, Users, HardHat, FileText, Calendar 
} from 'lucide-react';
import FAQ from '../components/FAQ';
import CTACard from '../components/CTACard';

const TEAM_MEMBERS = [
  { name: 'Geeta Jain', qual: 'Graduate', exp: '41+ Years', role: 'Director', desc: 'Oversees organizational direction, compliance, audit systems, and statutory business operations.' },
  { name: 'Sachin Jain', qual: 'B.E. (Electrical)', exp: '22+ Years', role: 'Director', desc: 'Strategic Partnerships & Business Development. Directs BESS modeling, owner representation, and utility client alignments.' },
  { name: 'Amit Kumar Singh', qual: 'B.E. (Electrical)', exp: '22+ Years', role: 'Associate Director', desc: 'Manages core electrical engineering designs, grid compliance codes, and substation projects.' },
  { name: 'Ritika Gupta', qual: 'M.C.A.', exp: '12+ Years', role: 'Manager Finance', desc: 'Directs corporate accounting, budgeting analysis, contractor payouts, and tax compliance audits.' },
  { name: 'Pawan Goel', qual: 'B.Com (Graduate)', exp: '24+ Years', role: 'Manager - Commercial', desc: 'Manages procurement channels, vendor price bidding, logistics schedules, and material contracts.' },
  { name: 'Ramsingh', qual: 'ITI (Electrical)', exp: '16+ Years', role: 'Engineer', desc: 'On-site electrical testing engineer, panel wiring supervisor, and installation checker.' },
  { name: 'Chandrashekhar', qual: 'ITI (Electrical)', exp: '26+ Years', role: 'Supervisor', desc: 'Senior site erection foreman, cabling layout manager, and safety code compliance inspector.' }
];

const TIMELINE_EVENTS = [
  { year: '2004', title: 'Founding Leadership Roots', desc: 'Core engineers begin sub-consultancy engagements, coordinating industrial panel wiring and MEP operations.' },
  { year: '2016', title: 'Substation Erection Milestones', desc: 'Expansion into high-voltage distribution projects, executing 33KV substation layouts and high-mast installations.' },
  { year: '2020', title: 'BESS Sizing Expansion', desc: 'Strategic expansion into battery storage simulations, partner alignments with international engineering organizations.' },
  { year: '2024', title: 'Private Limited Registration', desc: 'Incorporated as Sri Sahasranam Energy Private Limited. Registration of corporate CIN and MSME.' },
  { year: '2025', title: 'Global FEED Executions', desc: 'Commissioned by Tractebel to support 4x500MW Saudi Arabia greenfield BESS layouts and German storage designs.' }
];

export default function About() {
  return (
    <div className="w-full relative pt-24 bg-transparent">
      
      {/* 1. HEADER HERO */}
      <section className="py-20 bg-slate-100/10 border-b border-slate-200/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Engineering & Infrastructure Leadership
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-2">
            Providing high-quality design consultancy, project management (PMC), and EPC services across smart buildings, grid electrifications, and battery storages.
          </p>
        </div>
      </section>

      {/* 2. STORY, MISSION, VISION */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary px-2.5 py-1 bg-teal-50 rounded-full border border-teal-100 uppercase">
                Our Heritage
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800">The Sahasranam Journey</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sri Sahasranam Energy Private Limited is a premier Design & Project Management Consultant and small-scale EPC contractor in India. Providing expert, independent advice and technical assistance to our clients across all project phases—from fundamental studies to the operation of complex utilities—is the foundation of our success.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We have specialization in comprehensive design and engineering services to ensure the optimal performance, efficiency, and bankability of solar, wind, Battery Energy Storage System (BESS), and Compressed Bio-Gas (CBG) projects. Our clients can be confident that we will develop a sound basis for decision-making and will assist them in all aspects of their projects up to successful conclusion.
              </p>
            </div>
            
            {/* Right column: Credentials & Banner */}
            <div className="lg:col-span-5 space-y-6">
              {/* Credentials Box */}
              <div className="bg-white/80 border border-slate-200/40 rounded-2xl p-8 space-y-6 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
                <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center gap-2">
                  <FileText size={16} className="text-primary" />
                  <span>Company Credentials</span>
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold mb-0.5">Registered Office Address</span>
                    <span className="text-slate-700 leading-relaxed font-medium">
                      Plot No. 13, Ground Floor, Pocket - 9, Sector - 22, Rohini, New Delhi - 110086. Near Migsun Rohini Central Mall.
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">CIN</span>
                      <span className="text-slate-700 font-mono font-bold">U43299DL2024PTC430500</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">MSME NO</span>
                      <span className="text-slate-700 font-mono font-bold">UDYAM-DL-06-0121202</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">GSTIN</span>
                      <span className="text-slate-700 font-mono font-bold">07ABNCS3455N1ZN</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold mb-0.5">LIN Reference</span>
                      <span className="text-slate-700 font-mono font-bold">1-4089-0938-8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Banner Card */}
              <div className="glass-card rounded-2xl overflow-hidden p-0 relative h-52 border-glow group shadow-sm">
                <img 
                  src="/pdf_images/img_1_2.jpeg" 
                  alt="Sri Sahasranam Energy Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <span className="text-[8px] font-bold text-secondary uppercase tracking-widest bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700 inline-block mb-1">
                    Design & Consultancy Cover
                  </span>
                  <h4 className="font-extrabold text-white text-xs">Advancing Industrial Safety & Sustainability</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-primary">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower modern infrastructure through innovative building automation, rigorous engineering safety, and sustainable utility-scale energy integrations.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-accent">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the preferred global engineering partner for high-efficiency smart infrastructures, EHV grid operations, and utility-scale BESS integrations by 2030.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grounded in absolute technical precision, occupational health (HSE), operational transparency, and client-centric engineering innovation.
              </p>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="border-t border-slate-100 pt-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-primary px-2.5 py-1 bg-teal-50 rounded-full border border-teal-100 uppercase">
                Why We Excel
              </span>
              <h3 className="text-2xl font-extrabold text-slate-800 mt-2">Key Differentiators</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                How Sahasranam Energy bridges the gap between conceptual engineering design and physical infrastructure execution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: 'Single Point Contact', desc: 'Covering the full lifecycle from feasibility to commissioning, eliminating multi-vendor friction.' },
                { title: 'Quality Assurance', desc: 'Strict adherence to IS/IEC standards and type-tested equipment with NABL accredited testing.' },
                { title: 'HSE First Culture', desc: 'Occupational health, background-verified personnel, site accommodation, and hospital safety tie-ups.' },
                { title: 'Experienced Team', desc: 'Technical directors and operations supervisors with up to 26+ years of active field execution.' },
                { title: 'Specialized Focus', desc: 'Niche core competency in safety-driven grids, automated building management, and BESS containers.' }
              ].map((diff, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2 hover:bg-white hover:shadow-sm transition-all duration-300">
                  <h4 className="font-extrabold text-slate-800 text-sm">{diff.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. TIMELINE OF PROGRESS */}
      <section className="py-24 bg-slate-100/10 border-t border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Growth</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Evolution Timeline</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto relative border-l-2 border-primary/20 pl-8 space-y-12 py-4">
            {TIMELINE_EVENTS.map((event) => (
              <div key={event.year} className="relative space-y-2">
                {/* Bullet */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
                
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  Year {event.year}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-1">{event.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT PROFILE */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Expert Professionals</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Management & Technical Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed pt-2">
              Our engineering personnel holds extensive domain qualifications, executing high-value infrastructure projects globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.name}
                className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 relative flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300 border-glow"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 leading-snug">{member.name}</h3>
                      <p className="text-xs text-primary font-semibold mt-0.5">{member.role}</p>
                    </div>
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100">
                      {member.exp}
                    </span>
                  </div>
                  
                  <div className="text-[10px] font-bold text-slate-500 bg-slate-100 rounded px-2.5 py-1 w-fit">
                    QUALIFICATION: {member.qual}
                  </div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100/80 pt-4">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. CLIENTELE & ASSOCIATE PARTNERS */}
      <section className="py-24 bg-gradient-to-tr from-slate-100/50 via-white to-teal-50/30 border-t border-b border-slate-200/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Partners and Client list */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold tracking-widest text-primary uppercase bg-teal-50 border border-teal-100 px-3 py-1 rounded-full inline-block">
                Corporate Ecosystem
              </span>
              <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">
                Our Esteemed Clientele & Associate Partners
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                By bridging the gap between conceptual design and physical execution, we collaborate with utility planners, EPC operators, and compliance agencies.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Clients</h4>
                <div className="flex flex-wrap gap-3">
                  {['M/s Tractebel', 'M/s Vardhan', 'M/s NTT Data'].map((client) => (
                    <span key={client} className="px-3.5 py-2 bg-white border border-slate-100 shadow-sm rounded-lg text-xs font-bold text-primary font-mono">
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Associate Partners</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'M/s Mithshree Consultants',
                    'M/s Sudha Infrastructure',
                    'M/s Vibhuh Power & Energy Solutions',
                    'M/s Photo Urja',
                    'M/s Yashvik Engineering',
                    'M/s Unified India',
                    'M/s Mahadev Group'
                  ].map((partner) => (
                    <div key={partner} className="px-2.5 py-2.5 bg-white/70 border border-slate-100 rounded-lg text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                      <span className="truncate">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: PDF Image Map */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl overflow-hidden p-0 relative h-64 border-glow group shadow-sm">
                <img 
                  src="/pdf_images/img_3_2.jpeg" 
                  alt="Integrated Solutions Map" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <span className="text-[8px] font-bold text-secondary uppercase tracking-widest bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700 inline-block mb-1">
                    PDF Page 3 Image
                  </span>
                  <h4 className="font-extrabold text-white text-xs">Integrated Services Mapping</h4>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                Visualizing the interface between Smart Buildings, Grid Electrification, and Renewable Energy sectors.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CLIENTS TRUST US */}
      <section className="py-20 bg-slate-100/10 border-t border-slate-200/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Trust & Assurance</span>
          <h2 className="text-3xl font-extrabold text-slate-800">
            A Committed Partner for Safe & Sustainable Builds
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            From conducting foundational site studies to managing legacy project closures, we guarantee compliance, quality workmanship, and cost optimization at every milestone.
          </p>
          <div className="flex justify-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-primary" /> HSE First Standard</span>
            <span className="flex items-center gap-1.5"><Award size={16} className="text-primary" /> ISO/IEC Aligned</span>
            <span className="flex items-center gap-1.5"><Users size={16} className="text-primary" /> Local Team Verification</span>
          </div>
        </div>
      </section>

      <FAQ />
      <CTACard />

    </div>
  );
}
