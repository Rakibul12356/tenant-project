import React from 'react';
import { Smartphone, Check, ShieldCheck, Headset, DollarSign, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: Smartphone, text: "100% Digital & Mobile Friendly" },
    { icon: Check, text: "Intuitive and easy-to-use interface" },
    { icon: ShieldCheck, text: "Secure data encryption" },
    { icon: Headset, text: "24/7 Dedicated Customer Support" },
    { icon: DollarSign, text: "Transparent pricing, no hidden costs" },
    { icon: Zap, text: "Regular updates with new features" }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-page-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Image block - Real Dashboard feel */}
          <div className="lg:order-1 relative w-full mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Property Management Dashboard Interface" 
              className="rounded-3xl shadow-xl object-cover w-full h-72 sm:h-96 lg:h-[32rem]"
            />
            <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 p-4 sm:p-6 rounded-2xl shadow-xl hidden sm:block" style={{ backgroundColor: "var(--home-card-bg)", border: "1px solid var(--home-card-border)" }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-4">
                <ShieldCheck size={28} className="text-blue-600 sm:w-8 sm:h-8" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base" style={{ color: "var(--home-heading)" }}>Bank-grade Security</h4>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--home-muted)" }}>Your data is fully protected</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text and list section */}
          <div className="lg:order-2 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-snug" style={{ color: "var(--home-heading)" }}>Why Choose Our Platform?</h2>
            <p className="text-base sm:text-lg mb-8 max-w-lg mx-auto sm:mx-0" style={{ color: "var(--home-text)" }}>
              We've built a system that understands the daily struggles of landlords and property managers. Focus on scaling your portfolio while we handle the admin work.
            </p>
            
            <div className="space-y-3 sm:space-y-5 text-left max-w-md mx-auto sm:mx-0">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg transition-colors" style={{ backgroundColor: "var(--home-card-bg)" }}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <benefit.icon size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                  </div>
                  <p className="font-semibold text-sm sm:text-lg" style={{ color: "var(--home-heading)" }}>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
