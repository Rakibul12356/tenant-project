import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Shield, BarChart3, Users, CheckCircle, Clock, Lock, TrendingUp, Phone, Calendar } from "lucide-react";

const SERVICES = [
  { icon: Home, title: "Residential Lettings", desc: "Expert tenant sourcing, rigorous vetting, and seamless onboarding so your property is always earning." },
  { icon: Building2, title: "Property Management", desc: "Full-service day-to-day management — inspections, rent collection, tenant communication and more." },
  { icon: Shield, title: "Compliance & Legal", desc: "Stay compliant with regulations. We handle notices, dispute resolution and documentation." },
  { icon: Clock, title: "Maintenance Coordination", desc: "Fast, reliable repair coordination with vetted contractors. Issues resolved with minimum disruption." },
];

const WHY_CHOOSE = [
  { icon: Users, title: "Dedicated Support", desc: "A named contact for every landlord — always reachable, always responsive." },
  { icon: BarChart3, title: "Transparent Reporting", desc: "Monthly statements with full breakdowns, available in your portal 24/7." },
  { icon: Lock, title: "Full Compliance", desc: "In-house compliance team handling all RTB registrations, notices and queries." },
  { icon: Home, title: "Secure Portal", desc: "Real-time access to documents, financials, and communications in one place." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Property Assessment", desc: "We visit your property, assess its condition and current market position, and present a clear rental valuation report." },
  { num: "02", title: "Agreement & Listing", desc: "Sign a transparent management agreement, then we professionally photograph and list your property across all major platforms." },
  { num: "03", title: "Tenant Placement", desc: "Rigorous credit, employment and reference checks ensure only the best tenants are placed in your property." },
  { num: "04", title: "Ongoing Management", desc: "From rent collection to inspections and RTB compliance — we handle everything so you don't have to think about it." },
];

const FEATURES_TECH = [
  { icon: Home, title: "Mobile-first portal", desc: "Full access on any device — phone, tablet or desktop." },
  { icon: TrendingUp, title: "Real-time updates", desc: "Rent receipts, maintenance status and documents update live." },
  { icon: Lock, title: "Bank-level security", desc: "256-bit encryption and 2FA protect all your data." },
  { icon: BarChart3, title: "Financial analytics", desc: "Visual reports showing yield, costs and trends at a glance." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
              >
                <Shield size={14} /> RTB Compliant & Fully Regulated
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Professional<br />
                <span style={{ color: "var(--accent)" }}>Property Management.</span>
                <br />
                Total Transparency.
              </h1>

              <p className="text-lg text-secondary max-w-xl mb-10 leading-relaxed">
                Secure landlord & tenant portal with real-time access to RTB information, financial statements and documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Client Login <ArrowRight size={16} />
                </Link>
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border text-primary hover:bg-secondary transition-all"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  Request Consultation
                </button>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white"
                      style={{ backgroundColor: "var(--accent)", opacity: 0.8 - i * 0.2 }}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-primary">Trusted by <span style={{ color: "var(--accent)" }}>500+ Clients</span></p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex gap-1 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 text-white">
                  <div className="text-sm font-mono">portal.management.ie</div>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-xs">MONTHLY RENT</span>
                      <span className="font-bold">€1,850</span>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-xs">NEXT INSPECTION</span>
                      <span className="font-bold">Mar 12</span>
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}>
                      <div className="text-xs flex items-center gap-1" style={{ color: "var(--accent)" }}>
                        <CheckCircle size={12} /> Rent received for 14 Oak Lane — Feb 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              <Home size={14} /> What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Everything your property needs, <span style={{ color: "var(--accent)" }}>handled for you.</span></h2>
            <p className="text-secondary max-w-2xl mx-auto">From finding the right tenant to staying RTB-compliant — we cover every aspect of property management so you don't have to.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-theme hover:shadow-theme-lg transition-all duration-200 group"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <Icon size={24} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-semibold text-primary mb-2 text-lg">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
              >
                <Users size={14} /> Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">The smarter way to manage <span style={{ color: "var(--accent)" }}>your property.</span></h2>
              <p className="text-secondary mb-8 leading-relaxed">Our platform combines local expertise with modern technology to deliver property management that genuinely works for landlords.</p>
              
              <div className="space-y-4">
                {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "var(--accent-light)" }}
                      >
                        <Icon size={20} style={{ color: "var(--accent)" }} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{title}</h4>
                      <p className="text-secondary text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-gradient-to-b from-slate-300 to-slate-400 rounded-2xl h-80 flex items-center justify-center text-white font-bold text-xl">
                Property Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              <CheckCircle size={14} /> How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">From listing to managed — in <span style={{ color: "var(--accent)" }}>four steps.</span></h2>
            <p className="text-secondary max-w-2xl mx-auto">A straightforward process designed to get your property earning quickly and keep it running smoothly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ num, title, desc }) => (
              <div
                key={num}
                className="p-6 rounded-2xl border border-theme hover:shadow-theme-lg transition-all"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 font-bold text-lg text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  {num}
                </div>
                <h3 className="font-semibold text-primary mb-2 text-lg">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Start the process <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
              >
                <TrendingUp size={14} /> Digital-First Management
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Technology that puts <span style={{ color: "var(--accent)" }}>you in control.</span></h2>
              <p className="text-secondary mb-10 leading-relaxed">Our secure online portal gives landlords and tenants 24/7 access to everything they need — no chasing, no paperwork, no delays.</p>

              <div className="grid grid-cols-2 gap-6">
                {FEATURES_TECH.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="space-y-2">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <Icon size={20} style={{ color: "var(--accent)" }} />
                    </div>
                    <h4 className="font-semibold text-primary text-sm">{title}</h4>
                    <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-gradient-to-b from-slate-300 to-slate-400 rounded-2xl h-80 flex items-center justify-center text-white font-bold text-xl">
                Dashboard Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
          >
            <Phone size={14} /> Currently accepting new landlords
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Ready to simplify your <span style={{ color: "var(--accent)" }}>property management?</span></h2>
          <p className="text-secondary mb-10 leading-relaxed">Join 500+ clients who trust us for stress-free, fully transparent property management across Ireland.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <Calendar size={16} /> Book a Free Consultation
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border text-primary hover:bg-secondary transition-all"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              <Phone size={16} /> Call Us Today
            </button>
          </div>

          <p className="text-xs text-secondary mt-6">No obligation · Free valuation · Response within 24 hours</p>
        </div>
      </section>
    </div>
  );
}
