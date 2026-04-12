import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
