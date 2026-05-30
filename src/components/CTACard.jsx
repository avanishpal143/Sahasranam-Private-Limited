import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

/**
 * CTACard Component
 * Renders a premium call-to-action banner promoting WhatsApp chat and email consultation.
 */
export default function CTACard() {
  const whatsappUrl = `https://wa.me/917428306467?text=${encodeURIComponent(
    'Hello Sri Sahasranam Energy, I would like to consult with an engineering expert.'
  )}`;

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Container with modern dark background and design elements */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-teal-500/20">
        
        {/* Abstract background details */}
        <div className="absolute inset-0 opacity-[0.04] energy-grid pointer-events-none" />
        <div className="absolute -top-1/2 -left-1/4 w-[60%] h-[120%] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[60%] h-[120%] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text content block */}
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-[10px] font-extrabold text-teal-400 uppercase tracking-widest bg-teal-950/60 border border-teal-800/40 px-3 py-1 rounded-full w-fit block">
              Consultation Gateway
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-amber-300">
                Energy Infrastructure Projects?
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Connect directly with our veteran supervisors and engineering planners to discuss your battery storage sizing, high-voltage substation blueprints, or MEP requirements.
            </p>
          </div>

          {/* Action buttons block */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-center justify-end w-full">
            
            {/* WhatsApp Chat Button */}
            <Magnetic className="w-full sm:w-auto lg:w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group transition-all duration-300 pointer-events-auto"
              >
                {/* Embedded WhatsApp Logo */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.863-9.848.001-2.63-1.019-5.101-2.871-6.957C16.408 1.994 13.938 1.01 11.31 1.01c-5.436 0-9.86 4.418-9.863 9.85-.001 1.962.511 3.878 1.482 5.56l-.973 3.551 3.69-.967zM17.382 14.2c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>Consult via WhatsApp</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            {/* Email Director Button */}
            <a
              href="mailto:sachin.jain@sahasranam.com"
              className="w-full sm:w-auto lg:w-full px-6 py-4 bg-slate-800/80 hover:bg-slate-850 text-slate-200 border border-slate-700 hover:border-slate-650 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-300 pointer-events-auto"
            >
              <Mail size={16} />
              <span>Email Business Director</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
