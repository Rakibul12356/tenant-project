import React from 'react';
import { TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { 
      step: "01", 
      title: "Add Your Properties", 
      desc: "Input your buildings, apartments, and commercial spaces along with their details and images." 
    },
    { 
      step: "02", 
      title: "Onboard Tenants", 
      desc: "Add tenant information, NID details, and assign them to specific units with digital lease agreements." 
    },
    { 
      step: "03", 
      title: "Collect & Track", 
      desc: "Generate rent invoices automatically, track due payments, and receive money digitally or manually." 
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-y" style={{ backgroundColor: "var(--home-section-bg)", borderColor: "var(--home-card-border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--home-heading)" }}>Manage properties in 3 simple steps</h2>
            <p className="text-lg mb-10" style={{ color: "var(--home-text)" }}>We've eliminated the complex paperwork. Our platform is designed to get you up and running in minutes, not days.</p>
            
            <div className="space-y-8">
              {steps.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: "var(--home-heading)" }}>{item.title}</h4>
                    <p style={{ color: "var(--home-text)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Mobile app usage image */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Person using property management app" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[30rem]"
              style={{ border: "1px solid var(--home-hero-border)" }}
            />
            {/* Overlay card */}
            <div className="absolute top-8 -left-8 p-4 rounded-xl shadow-lg bg-white hidden md:flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full"><TrendingUp className="text-green-600" /></div>
              <div>
                <p className="text-sm font-bold text-gray-800">Revenue Up</p>
                <p className="text-xs text-gray-500">+24% this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
