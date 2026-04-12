import React from "react";

const TEAM_MEMBERS = [
  { 
    name: "Tariqul Islam", 
    role: "Founder & Real Estate Expert", 
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
  },
  { 
    name: "Nadia Rahman", 
    role: "Head of Product", 
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
  },
  { 
    name: "Kamrul Hasan", 
    role: "Lead Security Engineer", 
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
  },
  { 
    name: "Farhana Akter", 
    role: "Customer Success Manager", 
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100" style={{ backgroundColor: "var(--home-page-bg, #ffffff)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--home-heading, #0f172a)" }}>Meet The Experts</h2>
          <p className="text-lg" style={{ color: "var(--home-text, #475569)" }}>A team of tech innovators and real estate veterans.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-6 inline-block">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold" style={{ color: "var(--home-heading, #0f172a)" }}>{member.name}</h3>
              <p className="text-sm font-medium text-blue-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
