import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Active Users" },
    { value: "10K+", label: "Properties Managed" },
    { value: "99.9%", label: "System Uptime" }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg)" }}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
          {stats.map((stat, idx) => (
            <div key={idx} className="py-4 sm:py-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">{stat.value}</p>
              <p className="text-slate-400 font-medium text-sm sm:text-lg lg:text-xl tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
