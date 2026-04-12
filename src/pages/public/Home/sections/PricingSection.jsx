import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        { text: "Up to 5 Units", included: true },
        { text: "Basic Rent Tracking", included: true },
        { text: "Tenant Database", included: true }
      ],
      cta: "Get Started",
      route: "/register",
      isFeatured: false
    },
    {
      name: "Professional",
      price: "৳999",
      priceUnit: "/mo",
      features: [
        { text: "Up to 50 Units", included: true },
        { text: "Automated Invoicing", included: true },
        { text: "Financial Reports", included: true },
        { text: "Document Storage", included: true }
      ],
      cta: "Start Free Trial",
      route: "/register",
      isFeatured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        { text: "Unlimited Units", included: true },
        { text: "Multiple Staff Accounts", included: true },
        { text: "Priority 24/7 Support", included: true }
      ],
      cta: "Contact Us",
      route: "/contact",
      isFeatured: false
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-page-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading)" }}>Simple, Transparent Pricing</h2>
          <p className="text-lg" style={{ color: "var(--home-text)" }}>Start for free, upgrade when you need to grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl ${plan.isFeatured ? 'shadow-2xl relative transform md:-translate-y-4 border-2 border-blue-500 bg-blue-600 text-white' : 'border'}`}
              style={!plan.isFeatured ? { backgroundColor: "var(--home-card-bg)", borderColor: "var(--home-card-border)" } : {}}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Most Popular</div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.isFeatured ? 'text-white' : ''}`} style={!plan.isFeatured ? { color: "var(--home-heading)" } : {}}>{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${plan.isFeatured ? 'text-white' : ''}`} style={!plan.isFeatured ? { color: "var(--home-heading)" } : {}}>
                  {plan.price}
                </span>
                {plan.priceUnit && <span className={plan.isFeatured ? 'text-blue-200' : ''} style={!plan.isFeatured ? { color: "var(--home-muted)" } : {}}>{plan.priceUnit}</span>}
              </div>
              
              <ul className={`space-y-4 mb-8 ${plan.isFeatured ? 'text-blue-50' : ''}`} style={!plan.isFeatured ? { color: "var(--home-text)" } : {}}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <Check size={18} className={plan.isFeatured ? 'text-blue-200' : 'text-emerald-500'} /> 
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <Link 
                to={plan.route}
                className={`block w-full py-3 text-center rounded-xl font-bold transition-all ${
                  plan.isFeatured 
                    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg' 
                    : ''
                }`}
                style={!plan.isFeatured ? { backgroundColor: "var(--home-page-bg)", color: "var(--home-heading)", border: "2px solid var(--home-card-border)" } : {}}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
