import { Link } from 'react-router-dom';
import { Building2, Users, DollarSign, FileText, ArrowRight, Check, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                  <Zap size={18} className="text-white" />
                </div>
                <span className="text-accent font-semibold">বারিওয়ালা ম্যানেজমেন্ট সিস্টেম</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                আপনার ভাড়া ব্যবসা পরিচালনা করুন সহজে
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                সম্পত্তি, ভাড়াটে এবং রেন্ট পরিচালনা একটি প্ল্যাটফর্মে। আধুনিক প্রযুক্তি দিয়ে আপনার ব্যবসা বৃদ্ধি করুন।
              </p>
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  এখনই শুরু করুন
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  নতুন অ্যাকাউন্ট তৈরি করুন
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div 
                  className="w-full aspect-square rounded-2xl flex items-center justify-center text-6xl"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Building2 size={120} className="text-white opacity-60" />
                </div>
                <div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <Users size={40} style={{ color: "var(--accent)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">শক্তিশালী ফিচার</h2>
            <p className="text-secondary text-lg">আপনার ভাড়া ব্যবসা পরিচালনার জন্য সব কিছু</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "সম্পত্তি ম্যানেজমেন্ট",
                desc: "একাধিক সম্পত্তি সহজে পরিচালনা করুন"
              },
              {
                icon: Users,
                title: "ভাড়াটে ট্র্যাকিং",
                desc: "সমস্ত ভাড়াটে এক জায়গায় পরিচালনা করুন"
              },
              {
                icon: DollarSign,
                title: "রেন্ট ম্যানেজমেন্ট",
                desc: "রেন্ট এবং বিল ট্র্যাক করুন স্বয়ংক্রিয়ভাবে"
              },
              {
                icon: FileText,
                title: "নোটিশ & ডকুমেন্ট",
                desc: "নোটিশ এবং চুক্তি সংরক্ষণ করুন ডিজিটালি"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border transition-all hover:shadow-lg"
                style={{ 
                  borderColor: "var(--border-color)",
                  backgroundColor: "var(--bg-card)"
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">কেন আমাদের বেছে নিবেন?</h2>
              <div className="space-y-4">
                {[
                  "সম্পূর্ণ ডিজিটাল সমাধান",
                  "ব্যবহার করা অত্যন্ত সহজ",
                  "নিরাপদ এবং নির্ভরযোগ্য",
                  "২৪/৭ গ্রাহক সেবা",
                  "কোন লুকানো খরচ নেই",
                  "নিয়মিত আপডেট এবং নতুন ফিচার"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      <Check size={16} className="text-white" />
                    </div>
                    <p className="text-primary font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="rounded-2xl p-8"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div className="space-y-6">
                <div className="text-center pb-6 border-b" style={{ borderColor: "var(--border-color)" }}>
                  <p className="text-5xl font-bold text-accent mb-2">৫০০+</p>
                  <p className="text-primary font-semibold">সক্রিয় ব্যবহারকারী</p>
                </div>
                <div className="text-center pb-6 border-b" style={{ borderColor: "var(--border-color)" }}>
                  <p className="text-5xl font-bold text-accent mb-2">১০,০০০+</p>
                  <p className="text-primary font-semibold">পরিচালিত সম্পত্তি</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-accent mb-2">৯৯.৯%</p>
                  <p className="text-primary font-semibold">আপটাইম</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">আজই শুরু করুন আপনার যাত্রা</h2>
          <p className="text-lg text-secondary mb-10">
            হাজার হাজার ব্যবসায়ী ইতিমধ্যে তাদের সম্পত্তি ব্যবসা আমাদের প্ল্যাটফর্মে পরিচালনা করছেন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: "var(--accent)" }}
            >
              বিনামূল্যে সাইন আপ করুন
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 text-lg transition-all"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              লগইন করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
