import React from "react";
import { Building } from "lucide-react";

const AboutHeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg, #f8fafc)" }}>
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-medium text-sm border bg-white shadow-sm" style={{ color: "var(--home-heading, #0f172a)" }}>
          <Building size={16} className="text-blue-600" />
          <span>Transforming Property Management</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: "var(--home-heading, #0f172a)" }}>
          Modernizing Real Estate <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">For Smart Landlords</span>
        </h1>
        
        <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ color: "var(--home-text, #475569)" }}>
          We are on a mission to simplify property management in Bangladesh. Say goodbye to manual ledgers, paper receipts, and lost tenant data.
        </p>

        {/* Hero Image - Premium Modern Building */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Modern corporate property building" 
            className="w-full h-64 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end hidden sm:flex">
            <div className="text-white text-left">
              <p className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-80">Our Vision</p>
              <p className="text-2xl font-bold">100% Digital Real Estate Ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
