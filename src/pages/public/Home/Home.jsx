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
  MapPin 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Hero Section - Bangladesh Focus & #6366f1 bg */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#6366f1]">
        
        {/* Subtle Background Pattern/Glow */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-white opacity-5 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-900 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white mb-6 font-medium text-sm backdrop-blur-sm border border-white/20">
                <MapPin size={16} className="text-yellow-300" />
                <span>Proudly Made for Bangladesh 🇧🇩</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Modern Solutions for <br className="hidden lg:block" />
                <span className="text-yellow-300">Smart Landlords</span>
              </h1>
              
              <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Manage your properties, track tenant details, and automate rent collection seamlessly. Build your real estate business with our secure, localized platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-[#6366f1] bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Now
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
            
            {/* Hero Image Block */}
            <div className="relative flex items-center justify-center w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 mt-8 lg:mt-0">
              
              {/* Image background accent */}
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-3 scale-105 -z-10 opacity-80 blur-sm"></div>
              
              {/* Primary Real Estate Image */}
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Apartment Building" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[350px] sm:h-[450px] lg:h-[500px] border-4 border-white/20"
              />
              
              {/* Floating detail card (visible on md+) with Taka Symbol & English numbers */}
              <div className="absolute -bottom-6 lg:-bottom-8 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-bounce-slow border-b-4 border-green-500">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-extrabold text-2xl">৳</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Rent Collected</p>
                  <p className="text-2xl font-bold text-gray-900">৳ 145,000</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600">Everything you need to run your rental business efficiently and stress-free.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits / Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image block */}
            <div className="lg:order-1 relative w-full max-w-lg mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Property Management Dashboard Interface" 
                className="rounded-3xl shadow-xl object-cover w-full h-[350px] sm:h-[450px] lg:h-[500px]"
              />
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck size={32} className="text-[#6366f1]" />
                  <div>
                    <h4 className="font-bold text-gray-900">Bank-grade Security</h4>
                    <p className="text-sm text-gray-500">Your data is fully protected</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text and list section */}
            <div className="lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">Why Choose Our Platform?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                We've built a system that understands the daily struggles of landlords and property managers. Focus on scaling your portfolio while we handle the admin work.
              </p>
              
              <div className="space-y-5 text-left max-w-md mx-auto lg:mx-0">
                {[
                  { icon: Smartphone, text: "100% Digital & Mobile Friendly" },
                  { icon: Check, text: "Intuitive and easy-to-use interface" },
                  { icon: ShieldCheck, text: "Secure data encryption" },
                  { icon: Headset, text: "24/7 Dedicated Customer Support" },
                  { icon: DollarSign, text: "Transparent pricing, no hidden costs" },
                  { icon: Zap, text: "Regular updates with new features" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={20} className="text-[#6366f1]" />
                    </div>
                    <p className="text-gray-800 font-semibold text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#6366f1] relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-indigo-400">
            <div className="py-6 sm:py-0">
              <p className="text-5xl lg:text-6xl font-extrabold text-white mb-2">500+</p>
              <p className="text-indigo-100 font-medium text-lg lg:text-xl tracking-wide uppercase">Active Users</p>
            </div>
            <div className="py-6 sm:py-0">
              <p className="text-5xl lg:text-6xl font-extrabold text-white mb-2">10K+</p>
              <p className="text-indigo-100 font-medium text-lg lg:text-xl tracking-wide uppercase">Properties Managed</p>
            </div>
            <div className="py-6 sm:py-0">
              <p className="text-5xl lg:text-6xl font-extrabold text-white mb-2">99.9%</p>
              <p className="text-indigo-100 font-medium text-lg lg:text-xl tracking-wide uppercase">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 opacity-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-50 opacity-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="p-10 md:p-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-lg mx-auto leading-snug">Ready to Transform Your Rental Business?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of landlords who have already automated their property management. Set up your first property in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-md mx-auto sm:max-w-none">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#6366f1] hover:bg-indigo-600 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Sign Up For Free
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-700 bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all text-lg"
              >
                Login to Dashboard
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-500 font-medium">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;