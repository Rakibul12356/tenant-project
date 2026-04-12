import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  HeartHandshake
} from "lucide-react";

const CORE_VALUES = [
  { 
    name: "Complete Automation", 
    desc: "From rent reminders to invoice generation, we automate the repetitive tasks so you don't have to.", 
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-100"
  },
  { 
    name: "Bank-Grade Security", 
    desc: "Tenant NID copies, lease agreements, and financial data are encrypted and stored securely.", 
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  { 
    name: "Mobile Accessibility", 
    desc: "Manage your properties on the go. Access tenant details and payment status from any device.", 
    icon: Smartphone,
    color: "text-emerald-500",
    bg: "bg-emerald-100"
  },
  { 
    name: "Landlord-First Approach", 
    desc: "Built with direct feedback from property owners in Bangladesh to solve real-world local problems.", 
    icon: HeartHandshake,
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" style={{ backgroundColor: "var(--home-section-bg, #f8fafc)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading, #0f172a)" }}>Why Landlords Trust Us</h2>
          <p className="text-lg" style={{ color: "var(--home-text, #475569)" }}>The principles that drive our platform's design and functionality.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map(({ name, desc, icon: Icon, color, bg }) => (
            <div
              key={name}
              className="p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${bg}`}>
                <Icon size={28} className={`transition-transform group-hover:scale-110 ${color}`} />
              </div>
              <h3 className="font-bold text-xl mb-2" style={{ color: "var(--home-heading, #0f172a)" }}>{name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--home-text, #475569)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
