import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Owner, Skyline Apartments",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Since using this platform, my rent collection process has become completely automated. I save at least 15 hours every month."
    },
    {
      name: "Tania Akter",
      role: "Property Manager",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "The best part is keeping track of all tenant details and NID documents securely. Highly recommended for Bangladeshi landlords!"
    },
    {
      name: "Jamal Hasan",
      role: "Real Estate Investor",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      text: "Financial reporting feature is a game-changer. I can clearly see my ROI, expenses, and pending dues in one single dashboard."
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--home-section-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading)" }}>What Landlords Are Saying</h2>
          <p className="text-lg" style={{ color: "var(--home-text)" }}>Join the community of successful property managers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="p-8 rounded-2xl shadow-sm relative" style={{ backgroundColor: "var(--home-card-bg)", border: "1px solid var(--home-card-border)" }}>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="italic mb-6" style={{ color: "var(--home-text)" }}>"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-sm" style={{ color: "var(--home-heading)" }}>{review.name}</h5>
                  <p className="text-xs" style={{ color: "var(--home-muted)" }}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
