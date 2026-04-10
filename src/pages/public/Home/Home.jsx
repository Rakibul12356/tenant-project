import React from "react";
import { 
  ArrowRight, Users, Receipt, Wrench, Bell, 
  ShieldCheck, LayoutDashboard, Wallet, 
  PieChart, Building2, UserPlus, FileCheck, 
  ChevronRight, ArrowUpRight, Globe, Zap 
} from "lucide-react";

// --- Data Constants ---
const FEATURES = [
  { 
    icon: Receipt, 
    title: "Automated Billing", 
    desc: "Generate smart invoices for Rent, Electricity (DESCO/DPDC), Gas, and Water with one click." 
  },
  { 
    icon: Users, 
    title: "Tenant Verification", 
    desc: "Integrated NID verification and digital tenant profiling to ensure your property's safety." 
  },
  { 
    icon: Wrench, 
    title: "Maintenance Suite", 
    desc: "Assign plumbers or electricians to tenant complaints and track resolution via the owner's app." 
  },
  { 
    icon: Bell, 
    title: "Smart Notifications", 
    desc: "Automated WhatsApp and SMS reminders for overdue rent and upcoming building meetings." 
  },
];

const METRICS = [
  { label: "Active Tenancies", value: "1,240+", growth: "+12%" },
  { label: "Rent Collected", value: "৳45.2M", growth: "+8.4%" },
  { label: "Issue Resolution", value: "98.2%", growth: "+2.1%" },
];

export default function PremiumLandlordPortal() {
  return (
    <div className="bg-[#fcfcfd] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <Building2 size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Estate<span className="text-emerald-600">Pro</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Solutions</a>
            <a href="#dashboard" className="hover:text-emerald-600 transition-colors">Dashboard</a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">v3.0 Live Tracking</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Manage your <br/>Empire <span className="text-emerald-600">Digitally.</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              The premium property management ecosystem designed for Bangladeshi landlords. Streamline rent, utilities, and tenant relations in one secure cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-16 px-10 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-200 group">
                Request Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-16 px-10 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold text-lg hover:border-emerald-600 transition-all flex items-center justify-center gap-3">
                Watch Workflow <Zap size={20} className="text-emerald-600" />
              </button>
            </div>

            <div className="pt-10 flex gap-12 border-t border-slate-100">
              {METRICS.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-slate-900">{m.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase mt-1 flex items-center gap-1">
                    {m.label} <span className="text-emerald-500">{m.growth}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-slate-900 rounded-[3rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture" 
                className="rounded-[2.2rem] h-[550px] w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Glass Card */}
              <div className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white max-w-xs hidden xl:block">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <PieChart size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Yield Analysis</p>
                    <p className="text-lg font-bold">12.4% Annual</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-500">Occupancy</span>
                    <span>94%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Feature Grid --- */}
      <section id="features" className="py-32 bg-[#0a0c10] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Everything you need to <br/>scale your <span className="text-emerald-400 text-italic">Real Estate Portfolio.</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              We've digitized the complex Bangladeshi property laws and utility systems into a simple dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:bg-emerald-600 transition-all duration-500 group">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                  <f.icon size={30} />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-emerald-50 transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Interactive Dashboard Section --- */}
      <section id="dashboard" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="w-16 h-1 bg-emerald-600" />
            <h2 className="text-4xl font-black text-slate-900">Seamless <br/>Financial Reporting.</h2>
            <p className="text-slate-500 text-lg">
              Never wonder where your money is. Get real-time reports on collections, expenses, and net profit per property.
            </p>
            
            <div className="space-y-4">
              {[
                "Instant Bank/Bkash Reconciliation",
                "Automated PDF Tax Reports",
                "Digital Tenancy Agreement Templates"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <FileCheck size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <button className="text-emerald-600 font-bold flex items-center gap-2 group">
              Explore the portal <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 p-8">
              <div className="flex items-center justify-between mb-10">
                <h4 className="font-black flex items-center gap-2">
                  <LayoutDashboard className="text-emerald-600" /> Executive Overview
                </h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400"><Bell size={14} /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">JD</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">April Collection</p>
                  <p className="text-2xl font-black text-slate-900">৳8,42,000</p>
                </div>
                <div className="p-6 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-100">
                  <p className="text-[10px] font-bold text-emerald-100 uppercase text-opacity-80">Pending Dues</p>
                  <p className="text-2xl font-black">৳45,200</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase px-1">Recent Activity</p>
                {[
                  { user: "Unit 4A", type: "Rent Paid", amount: "৳22,500", color: "text-emerald-600" },
                  { user: "Unit 2C", type: "Utility Bill", amount: "৳3,400", color: "text-blue-600" },
                  { user: "Common", type: "Lift Repair", amount: "-৳12,000", color: "text-red-600" },
                ].map((act, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center font-bold text-xs">{act.user}</div>
                      <span className="text-sm font-bold text-slate-700">{act.type}</span>
                    </div>
                    <span className={`font-black ${act.color}`}>{act.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 italic underline decoration-emerald-500 underline-offset-8">Flexible Plans for Every Owner.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-200 text-left">
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <p className="text-slate-400 text-sm mb-6">Up to 10 Units</p>
              <p className="text-4xl font-black mb-8">৳1,999<span className="text-lg text-slate-300">/mo</span></p>
              <ul className="space-y-4 mb-10 text-sm font-medium text-slate-600">
                <li className="flex items-center gap-2">✓ Automatic SMS Billing</li>
                <li className="flex items-center gap-2">✓ Basic Expense Tracking</li>
                <li className="flex items-center gap-2">✓ Tenant Cloud Profile</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">Start Free Trial</button>
            </div>
            <div className="bg-slate-900 p-12 rounded-[2.5rem] shadow-2xl shadow-emerald-200 text-left text-white relative overflow-hidden">
               <div className="absolute top-6 right-6 bg-emerald-500 text-[10px] font-black px-3 py-1 rounded-full uppercase">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-slate-500 text-sm mb-6">Unlimited Units</p>
              <p className="text-4xl font-black mb-8">৳4,999<span className="text-lg text-slate-600">/mo</span></p>
              <ul className="space-y-4 mb-10 text-sm font-medium text-slate-300">
                <li className="flex items-center gap-2 text-emerald-400">✓ Full Utility Management</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Multi-User Staff Access</li>
                <li className="flex items-center gap-2 text-emerald-400">✓ Advanced Profit Analytics</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-emerald-600 font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/50">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <Building2 size={24} />
            <span className="text-xl font-black italic">EstatePro</span>
          </div>
          <p className="text-slate-400 text-sm font-medium italic">
            © 2026 EstatePro Bangladesh Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <button className="p-3 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-all"><Globe size={18}/></button>
            <button className="p-3 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-all"><ShieldCheck size={18}/></button>
          </div>
        </div>
      </footer>
    </div>
  );
}