import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Building, 
  LifeBuoy, 
  Clock 
} from "lucide-react";
import { toast } from "react-toastify";

const CONTACT_INFO = [
  { icon: Mail, label: "Email Support", value: "support@bariwala.com.bd", href: "mailto:support@bariwala.com.bd" },
  { icon: Phone, label: "Helpline (Toll-Free)", value: "+880 1700-000000", href: "tel:+8801700000000" },
  { icon: MapPin, label: "Corporate Office", value: "Sector 11, Uttara, Dhaka 1230", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! Our support team will contact you soon. 🎉");
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "var(--home-page-bg, #ffffff)" }}>
      
      {/* Header Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "var(--home-hero-bg, #f8fafc)" }}>
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[20rem] h-[20rem] rounded-full bg-emerald-500 opacity-5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-medium text-sm border bg-white shadow-sm" >
            <LifeBuoy size={16} className="text-blue-600" />
            <span>24/7 Dedicated Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white" >
            How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Help You?</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-white" >
            Whether you need help setting up your first property, onboarding tenants, or understanding billing—our expert team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info & Chat */}
            <div className="flex flex-col gap-8 lg:col-span-1">
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--home-heading, #0f172a)" }}>Contact Information</h2>
                <p className="leading-relaxed" style={{ color: "var(--home-text, #475569)" }}>
                  Fill out the form or reach out directly using the information below. We aim to respond to all inquiries within 2 hours.
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group p-4 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-slate-50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</p>
                      <p className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Support Hours Card */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <MessageSquare size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">Live Support</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 flex items-center gap-2"><Clock size={14}/> Sun - Thu</span>
                    <span className="font-semibold text-slate-800">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 flex items-center gap-2"><Clock size={14}/> Fri - Sat</span>
                    <span className="font-semibold text-slate-800">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <button
                  className="w-full px-4 py-3 rounded-xl font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 transition-all hover:bg-emerald-100 hover:shadow-sm"
                  onClick={() => toast.info("Live chat is connecting...")}
                >
                  Start Live Chat
                </button>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 sm:p-10 rounded-3xl border border-gray-200 bg-white shadow-xl shadow-slate-200/40 relative overflow-hidden">
                {/* Decorative icon background */}
                <Building className="absolute -bottom-10 -right-10 text-slate-50 opacity-50 w-64 h-64 pointer-events-none" />
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 relative z-10" style={{ color: "var(--home-heading, #0f172a)" }}>
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahim Uddin"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rahim@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="E.g. Issue with rent collection"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your question or issue in detail..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 bg-blue-600 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed w-full sm:w-auto self-start mt-2"
                  >
                    {loading ? (
                      <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}