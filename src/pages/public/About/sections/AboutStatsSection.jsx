import React from "react";

const AboutStatsSection = () => {
  const stats = [
    { value: "10,000+", label: "Units Managed" },
    { value: "৳50M+", label: "Rent Processed Monthly" },
    { value: "99.9%", label: "Data Accuracy" }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400">
          {stats.map((stat, idx) => (
            <div key={idx} className="py-4 md:py-0">
              <h4 className="text-4xl sm:text-5xl font-extrabold mb-2">{stat.value}</h4>
              <p className="text-blue-100 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
