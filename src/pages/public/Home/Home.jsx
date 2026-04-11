import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  DollarSign, 
  FileText, 
  ArrowRight, 
  Check, 
  Zap, 
  ShieldCheck, 
  Headset, 
  Smartphone,
  MapPin,
  Home as HomeIcon,
  Key
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "var(--home-page-bg)" }}>
      
      {/* 1. Hero Section - Premium Dark Redesign with Better Property Image */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg)" }}>
        
        {/* Modern Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-160 h-160 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-120 h-120 rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-medium text-sm border shadow-sm" style={{ backgroundColor: "var(--home-hero-chip-bg)", color: "var(--home-hero-chip-text)", borderColor: "var(--home-hero-chip-border)" }}>
                <HomeIcon size={16} className="text-blue-400" />
                <span>Next-Generation Property Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Modern Solutions for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Smart Landlords</span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: "var(--home-hero-muted)" }}>
                Manage your properties, track tenant details, and automate rent collection seamlessly. Build your real estate business with our secure, localized platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <Key size={18} />
                  Get Started Now
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all w-full sm:w-auto"
                  style={{ backgroundColor: "var(--home-hero-chip-bg)", color: "var(--home-hero-chip-text)", border: "1px solid var(--home-hero-chip-border)" }}
                >
                  Create Free Account
                </Link>
              </div>
            </div>
            
            {/* Hero Image Block - Highly Mobile Responsive */}
            <div className="relative flex items-center justify-center w-full mx-auto order-1 lg:order-2">
              
              {/* Image background accent */}
              <div className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 -z-10 opacity-30 blur-sm" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.75), rgba(16,185,129,0.75))" }}></div>
              
              {/* Premium Real Estate Image */}
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Modern Real Estate Property" 
                className="rounded-3xl shadow-2xl object-cover w-full h-75 sm:h-112.5 lg:h-137.5"
                style={{ border: "1px solid var(--home-hero-border)" }}
              />
              
              {/* Floating detail card - Made visible and responsive on smaller screens too */}
              <div className="absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-6 p-4 sm:p-6 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 animate-bounce-slow border-b-4 border-emerald-500 scale-90 sm:scale-100" style={{ backgroundColor: "var(--home-card-bg)" }}>
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-extrabold text-xl sm:text-2xl">৳</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider" style={{ color: "var(--home-muted)" }}>Rent Collected</p>
                  <p className="text-xl sm:text-2xl font-bold" style={{ color: "var(--home-heading)" }}>৳ 145,000</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: "var(--home-section-bg)", borderColor: "var(--home-card-border)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading)" }}>Powerful Features</h2>
            <p className="text-base sm:text-lg" style={{ color: "var(--home-text)" }}>Everything you need to run your rental business efficiently and stress-free.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
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
                icon: FileText,
                title: "Digital Documents",
                desc: "Store notices, contracts, and important documents securely in the cloud.",
                color: "bg-purple-100 text-purple-600"
              }
            ].map((feature, idx) => (
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

      {/* 3. Benefits / Why Choose Us Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-section-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            
            {/* Image block */}
            <div className="lg:order-1 relative w-full mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Property Management Dashboard Interface" 
                className="rounded-3xl shadow-xl object-cover w-full h-75 sm:h-112.5 lg:h-125"
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
                {[
                  { icon: Smartphone, text: "100% Digital & Mobile Friendly" },
                  { icon: Check, text: "Intuitive and easy-to-use interface" },
                  { icon: ShieldCheck, text: "Secure data encryption" },
                  { icon: Headset, text: "24/7 Dedicated Customer Support" },
                  { icon: DollarSign, text: "Transparent pricing, no hidden costs" },
                  { icon: Zap, text: "Regular updates with new features" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors">
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

      {/* 4. Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg)" }}>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
            <div className="py-4 sm:py-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">500+</p>
              <p className="text-slate-400 font-medium text-sm sm:text-lg lg:text-xl tracking-wide uppercase">Active Users</p>
            </div>
            <div className="py-4 sm:py-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">10K+</p>
              <p className="text-slate-400 font-medium text-sm sm:text-lg lg:text-xl tracking-wide uppercase">Properties Managed</p>
            </div>
            <div className="py-4 sm:py-0">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">99.9%</p>
              <p className="text-slate-400 font-medium text-sm sm:text-lg lg:text-xl tracking-wide uppercase">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl shadow-xl overflow-hidden relative max-w-5xl mx-auto" style={{ backgroundColor: "var(--home-card-bg)", border: "1px solid var(--home-card-border)" }}>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-50 opacity-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="p-8 sm:p-12 md:p-16 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 max-w-xl mx-auto leading-snug" style={{ color: "var(--home-heading)" }}>Ready to Transform Your Rental Business?</h2>
                <p className="text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto" style={{ color: "var(--home-text)" }}>
                Join thousands of landlords who have already automated their property management. Set up your first property in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center max-w-sm mx-auto sm:max-w-none">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Sign Up For Free
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-base sm:text-lg w-full sm:w-auto"
                  style={{ backgroundColor: "var(--home-page-bg)", color: "var(--home-heading)", border: "2px solid var(--home-card-border)" }}
                >
                  Login to Dashboard
                </Link>
              </div>
              <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-medium" style={{ color: "var(--home-muted)" }}>No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;