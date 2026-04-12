import React from 'react';
import { Building2, HomeIcon, MapPin } from 'lucide-react';

const TrustedBySection = () => {
  return (
    <section className="py-8 border-b" style={{ backgroundColor: "var(--home-section-bg)", borderColor: "var(--home-card-border)" }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--home-muted)" }}>Trusted by over 500+ Property Managers in Bangladesh</p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Replace these with actual logos if you have them */}
          <div className="flex items-center gap-2"><Building2 size={24} /><span className="font-bold text-xl">UrbanEstates</span></div>
          <div className="flex items-center gap-2"><HomeIcon size={24} /><span className="font-bold text-xl">SkylineHomes</span></div>
          <div className="flex items-center gap-2"><MapPin size={24} /><span className="font-bold text-xl">PrimeLocation</span></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
