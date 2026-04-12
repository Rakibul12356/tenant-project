import React from "react";
import { Clock } from "lucide-react";

const OurStorySection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100" style={{ backgroundColor: "var(--home-page-bg, #ffffff)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Landlord reviewing documents" 
              className="rounded-3xl shadow-xl w-full object-cover h-80 sm:h-[28rem]"
            />
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl hidden sm:block bg-white border border-gray-100">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg"><Clock className="text-emerald-600" size={24} /></div>
                <p className="text-3xl font-extrabold text-slate-800">40+</p>
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Hours saved monthly per user</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--home-heading, #0f172a)" }}>The Landlord's Struggle</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--home-text, #475569)" }}>
              <p>It started with a simple frustration. Managing multiple rental properties meant drowning in Excel sheets, chasing tenants for monthly rent, and stressing over utility bill calculations.</p>
              <p>Collecting paper NID copies, drafting rental agreements, and tracking who paid what and when was a full-time job. <strong>There had to be a better way.</strong></p>
              <p>That's why we built this platform. We designed a centralized dashboard that acts as your personal property manager—automating the administrative headaches so you can focus on expanding your real estate portfolio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
