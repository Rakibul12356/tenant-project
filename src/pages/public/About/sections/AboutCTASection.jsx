import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutCTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-center" style={{ backgroundColor: "var(--home-section-bg, #f8fafc)" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ color: "var(--home-heading, #0f172a)" }}>Ready to digitize your properties?</h2>
        <p className="text-xl mb-10" style={{ color: "var(--home-text, #475569)" }}>Join thousands of smart landlords across Bangladesh who have completely automated their property management.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            Create Free Account
            <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all border-2 border-gray-300 text-slate-700 bg-white hover:bg-gray-50 w-full sm:w-auto">
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
