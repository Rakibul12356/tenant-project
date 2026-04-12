import React from 'react';
import { Building2, Users, DollarSign, PieChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Property Management",
      desc: "Easily manage multiple properties, units, and building details from a single dashboard.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Tenant Tracking",
      desc: "Keep track of all your tenants, their contact info, and lease agreements in one place.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: DollarSign,
      title: "Automated Rent",
      desc: "Track rent payments, generate invoices, and monitor utility bills automatically.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: PieChart,
      title: "Financial Reports",
      desc: "Generate monthly and yearly income vs expense reports with just one click.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-page-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading)" }}>Powerful Features</h2>
          <p className="text-base sm:text-lg" style={{ color: "var(--home-text)" }}>Everything you need to run your rental business efficiently and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: "var(--home-card-bg)", border: "1px solid var(--home-card-border)" }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6 ${feature.color}`}>
                <feature.icon size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: "var(--home-heading)" }}>{feature.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--home-text)" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
