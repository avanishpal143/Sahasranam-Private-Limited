import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Wind, Sun, Battery, Database, Settings, ShieldAlert, Cpu, Layers, HardHat 
} from 'lucide-react';

const NODES_DATA = [
  { id: 'mep', label: 'MEP Systems', icon: Layers, desc: 'Mechanical, Electrical, & Plumbing integration for high-performance commercial and industrial spaces.', category: 'Smart Building' },
  { id: 'hvac', label: 'HVAC Solutions', icon: Settings, desc: 'Advanced ventilation, ducting, and automated climate control systems optimized for energy efficiency.', category: 'Smart Building' },
  { id: 'ibms', label: 'IBMS', icon: Cpu, desc: 'Integrated Building Management Systems representing the automated brain of modern smart infrastructures.', category: 'Smart Building' },
  { id: 'datacenter', label: 'Data Centres', icon: Database, desc: 'High-reliability power systems and EHV substations featuring 2N redundancy to ensure continuous uptime.', category: 'Smart Building' },
  { id: 'substation', label: 'HV/EHV Substations', icon: ShieldAlert, desc: 'Substation engineering (66kV to 400kV), underground/overhead cabling, and grid synchronization panels.', category: 'Grid Electrification' },
  { id: 'bess', label: 'BESS Storage', icon: Battery, desc: 'Utility-scale Battery Energy Storage Systems sizing, load shifting, peak shaving, and hybrid integration.', category: 'Renewables' },
  { id: 'solar', label: 'Solar Farms', icon: Sun, desc: 'Detailed feasibility studies, structural layouts, and EPC services for utility-scale solar farms.', category: 'Renewables' },
  { id: 'wind', label: 'Wind Farms', icon: Wind, desc: 'Wind resource assessments, turbine selection, foundation civil design, and grid interconnection support.', category: 'Renewables' },
  { id: 'pmc', label: 'Project Consultancy', icon: HardHat, desc: 'Owner’s Engineer services, pre-bid engineering, quality audits, material inspection (TPQMA), and project lifecycle management.', category: 'EPC & Consultancy' },
  { id: 'design', label: 'Engineering Design', icon: Building, desc: 'Detailed electrical drawing, SLD creation, earthing design, and regulatory compliance clearance.', category: 'EPC & Consultancy' }
];

export default function NetworkDiagram() {
  const [activeNode, setActiveNode] = useState(null);

  // SVG Coordinates setup (800x500 workspace)
  const cx = 400;
  const cy = 250;
  const r = 175; // radius of circular node layout

  return (
    <div className="w-full py-12 px-4 flex flex-col items-center">
      <div className="text-center mb-10 max-w-2xl">
        <span className="text-sm font-bold tracking-widest text-primary uppercase">Ecosystem Map</span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          Connected Engineering Capabilities
        </h3>
        <p className="text-slate-600 mt-3 text-sm md:text-base">
          Interactive network map representing how Sahasranam Energy bridges industrial systems, renewable resources, and smart controls.
        </p>
      </div>

      <div className="w-full max-w-4xl glass-card rounded-2xl p-6 md:p-10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* SVG Network Map */}
        <div className="col-span-2 relative flex justify-center items-center select-none">
          <svg viewBox="0 0 800 500" className="w-full max-w-[650px] h-auto drop-shadow-md">
            {/* Definitions for gradients and drop shadows */}
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#0F766E" />
              </linearGradient>
              <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feOffset dx="0" dy="2" result="offset" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.1" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting lines from center to outer nodes */}
            {NODES_DATA.map((node, index) => {
              const angle = (index * (360 / NODES_DATA.length) - 90) * (Math.PI / 180);
              const nx = cx + r * Math.cos(angle);
              const ny = cy + r * Math.sin(angle);
              const isActive = activeNode?.id === node.id;

              return (
                <g key={`line-${node.id}`}>
                  {/* Background solid line */}
                  <line 
                    x1={cx} 
                    y1={cy} 
                    x2={nx} 
                    y2={ny} 
                    stroke={isActive ? '#F59E0B' : '#E2E8F0'} 
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className="transition-colors duration-300"
                  />
                  {/* Dash flowing line representing energy flow */}
                  <line 
                    x1={cx} 
                    y1={cy} 
                    x2={nx} 
                    y2={ny} 
                    stroke={isActive ? '#F59E0B' : '#14B8A6'} 
                    strokeWidth={isActive ? 3 : 1.8}
                    strokeDasharray="8 6"
                    className="transition-all duration-300"
                    style={{
                      animation: 'dash 1.5s linear infinite',
                      opacity: isActive ? 1 : 0.65
                    }}
                  />
                </g>
              );
            })}

            {/* Central Node: Sahasranam Energy */}
            <g transform={`translate(${cx}, ${cy})`} className="cursor-pointer">
              {/* Outer pulsing ring */}
              <circle 
                r="40" 
                fill="none" 
                stroke="#14B8A6" 
                strokeWidth="1"
                className="opacity-40 animate-ping"
                style={{ transformOrigin: 'center', animationDuration: '3s' }}
              />
              <circle 
                r="34" 
                fill="url(#glowGrad)" 
                filter="url(#shadow)"
              />
              <text 
                textAnchor="middle" 
                dy="-2" 
                fill="#FFFFFF" 
                fontSize="9" 
                fontWeight="800" 
                letterSpacing="0.5"
                style={{ pointerEvents: 'none' }}
              >
                SAHASRANAM
              </text>
              <text 
                textAnchor="middle" 
                dy="9" 
                fill="#FFFFFF" 
                fontSize="7" 
                fontWeight="500" 
                letterSpacing="1"
                style={{ pointerEvents: 'none' }}
              >
                ENERGY
              </text>
            </g>

            {/* Outer Nodes */}
            {NODES_DATA.map((node, index) => {
              const angle = (index * (360 / NODES_DATA.length) - 90) * (Math.PI / 180);
              const nx = cx + r * Math.cos(angle);
              const ny = cy + r * Math.sin(angle);
              const isActive = activeNode?.id === node.id;
              const IconComp = node.icon;

              return (
                <g 
                  key={node.id} 
                  transform={`translate(${nx}, ${ny})`}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveNode(node)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Outer pulse */}
                  {isActive && (
                    <circle 
                      r="28" 
                      fill="none" 
                      stroke="#F59E0B" 
                      strokeWidth="1.5"
                      className="animate-ping"
                      style={{ animationDuration: '1.5s' }}
                    />
                  )}
                  {/* Node fill circle */}
                  <circle 
                    r="20" 
                    fill={isActive ? 'url(#activeGrad)' : '#FFFFFF'} 
                    stroke={isActive ? '#F59E0B' : '#0F766E'} 
                    strokeWidth={isActive ? 2 : 1.5}
                    filter="url(#shadow)"
                    className="transition-all duration-300"
                  />
                  {/* Text label underneath/above the node depending on position */}
                  <text 
                    textAnchor="middle" 
                    y={ny > cy ? 32 : -26} 
                    fill={isActive ? '#0F766E' : '#475569'} 
                    fontSize="10" 
                    fontWeight={isActive ? '800' : '600'}
                    className="transition-all duration-300 select-none"
                  >
                    {node.label}
                  </text>

                  {/* Render inline icon */}
                  <g transform="translate(-8, -8)" style={{ pointerEvents: 'none' }}>
                    <IconComp size={16} color={isActive ? '#FFFFFF' : '#0F766E'} />
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Sidebar Info Display */}
        <div className="flex flex-col justify-center h-full min-h-[220px] bg-slate-50/50 border border-slate-100 rounded-xl p-6 relative">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <span className="text-xs font-bold text-accent px-2.5 py-1 bg-amber-50 rounded-full border border-amber-100 uppercase">
                  {activeNode.category}
                </span>
                <h4 className="text-xl font-bold text-slate-800 mt-2">{activeNode.label}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{activeNode.desc}</p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-primary font-semibold">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Engineering Standard Quality
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center h-full text-slate-400 py-6"
              >
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center mb-4">
                  <Cpu size={20} className="text-slate-300 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <h4 className="text-sm font-semibold text-slate-600">Explore Capabilities</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                  Hover over any node in the network to inspect detailed solutions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
