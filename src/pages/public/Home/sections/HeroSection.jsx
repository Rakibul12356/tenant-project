import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Key } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg)" }}>
      
      {/* Modern Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-emerald-500 opacity-10 blur-3xl"></div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Smart Landlords</span>
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
          
          {/* Hero Image Block */}
          <div className="relative flex items-center justify-center w-full mx-auto order-1 lg:order-2">
            <div className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 -z-10 opacity-30 blur-sm bg-gradient-to-br from-blue-500 to-emerald-500"></div>
            
            {/* Better Real Estate Image */}
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Premium Modern Real Estate Property" 
              className="rounded-3xl shadow-2xl object-cover w-full h-72 sm:h-96 lg:h-[34rem]"
              style={{ border: "1px solid var(--home-hero-border)" }}
            />
            
            {/* Floating detail card */}
            <div className="absolute -bottom-4 sm:-bottom-8 -left-2 sm:-left-6 p-4 sm:p-6 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 animate-bounce border-b-4 border-emerald-500 scale-90 sm:scale-100" style={{ backgroundColor: "var(--home-card-bg)", animationDuration: '3s' }}>
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
  );
};

export default HeroSection;
