import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Scale, FileText, CheckSquare, Briefcase } from 'lucide-react';

const TABS = [
  { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
  { id: 'terms', label: 'Terms & Conditions', icon: Scale },
  { id: 'cookies', label: 'Cookie Policy', icon: FileText },
  { id: 'disclaimer', label: 'Engineering Disclaimer', icon: CheckSquare },
  { id: 'ethics', label: 'Corporate Ethics & Compliance', icon: Briefcase }
];

export default function Terms() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    if (location.state && location.state.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <div className="w-full pt-24 bg-white min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] energy-grid pointer-events-none" />

      {/* Header Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Governance & Compliance</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Corporate Policies & Regulations
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Tabs Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar Tab Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-slate-55 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Content Panel */}
          <div className="lg:col-span-8 bg-white border border-slate-150 border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm min-h-[400px]">
            
            {activeTab === 'privacy' && (
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-extrabold text-slate-800 border-b border-slate-100 pb-3">Privacy Policy</h3>
                <p>
                  Sri Sahasranam Energy Private Limited values the privacy of our corporate clients, subcontractors, and partners. This policy details how we gather, protect, and utilize transactional data.
                </p>
                <h4 className="font-bold text-slate-800 text-base">1. Information Collection</h4>
                <p>
                  We only collect data necessary to evaluate pre-bid engineering parameters, establish project contracts, or respond to official inquiries. This includes names, company coordinates, email addresses, and technical descriptions of grid electrification/BESS inquiries.
                </p>
                <h4 className="font-bold text-slate-800 text-base">2. Storage and Security</h4>
                <p>
                  Our database is restricted under enterprise security controls, preventing unauthorized access or leaks. We never rent or distribute client information to third-party databases.
                </p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-extrabold text-slate-800 border-b border-slate-100 pb-3">Terms & Conditions</h3>
                <p>
                  Welcome to the official portal of Sri Sahasranam Energy Private Limited. By accessing this platform, you agree to comply with our terms of usage.
                </p>
                <h4 className="font-bold text-slate-800 text-base">1. Intellectual Properties</h4>
                <p>
                  All vector blueprints, SVG single-line diagrams, engineering text configurations, logos, and layouts are the exclusive property of Sri Sahasranam Energy, protected under corporate copyright laws.
                </p>
                <h4 className="font-bold text-slate-800 text-base">2. Authorized Use</h4>
                <p>
                  This portal is intended to convey technical capabilities to prospective clients. Downloading schematics for unauthorized commercial replication is strictly prohibited.
                </p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-extrabold text-slate-800 border-b border-slate-100 pb-3">Cookie Policy</h3>
                <p>
                  We utilize standard browser cookies to optimize site rendering, recall active tabs on navigation, and track anonymous telemetry.
                </p>
                <h4 className="font-bold text-slate-800 text-base">1. Core Essential Cookies</h4>
                <p>
                  Required to execute routing, load Three.js WebGL canvas parameters, and save active contact forms in local storage. Disabling these may disrupt page transitions.
                </p>
                <h4 className="font-bold text-slate-800 text-base">2. Analytic Telemetry</h4>
                <p>
                  Standard Google Analytics cookies may track viewport sizes and regional page speeds to help us improve loading efficiency.
                </p>
              </div>
            )}

            {activeTab === 'disclaimer' && (
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed font-medium">
                <h3 className="text-2xl font-extrabold text-slate-800 border-b border-slate-100 pb-3 text-amber-600">Engineering Consultancy Disclaimer</h3>
                <p className="text-slate-700 bg-amber-50 border border-amber-100 rounded-xl p-4 italic text-xs leading-relaxed">
                  IMPORTANT: The single-line diagrams (SLDs), CAD blueprints, BESS container cooling flowcharts, and technical data shown in the blueprint gallery represent simplified, generic schematics for capability demonstration purposes.
                </p>
                <p>
                  All calculations, wire sizing, transformer vector groups, and safety distances are subject to site-specific environmental factors, soil resistivity, local utility grid codes, and statutory approvals.
                </p>
                <p>
                  No information on this site constitutes a finalized, certified engineering blueprint. Final designs require physical site validation, site inspections, and formal approval stampings by our certified electrical engineers.
                </p>
              </div>
            )}

            {activeTab === 'ethics' && (
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-extrabold text-slate-800 border-b border-slate-100 pb-3">Ethics & HSE Compliance</h3>
                <p>
                  Sri Sahasranam Energy operates under strict ethical guidelines, ensuring absolute transparency, contract integrity, and workplace safety.
                </p>
                <h4 className="font-bold text-slate-800 text-base">1. HSE Priority Codes</h4>
                <p>
                  We maintain zero tolerance for safety violations on erection sites. All deployed technicians and contractors are provided with safety PPE, and work is overseen by supervisors with up to 26+ years experience.
                </p>
                <h4 className="font-bold text-slate-800 text-base">2. Anti-Bribery & Fairness</h4>
                <p>
                  We comply with anti-corruption regulations. All material procurement and supplier inspection protocols (TPQMA) are conducted under audited commercial controls.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>
      
    </div>
  );
}
