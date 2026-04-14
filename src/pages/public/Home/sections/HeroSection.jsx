import React from "react";
import { Link } from "react-router-dom";
import { Key } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// টেক্সট কালার চেঞ্জিং অ্যানিমেশন
const colorCycle = {
  animate: {
    color: [
      "rgba(17, 24, 39, 0.9)", // Dark Gray
      "rgba(37, 99, 235, 0.8)", // Blue
      "rgba(79, 70, 229, 0.8)", // Indigo
      "rgba(17, 24, 39, 0.9)", // Back to Dark Gray
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full text-center">
        
        {/* Small Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-5 inline-flex items-center rounded-full border border-blue-200/40 bg-white/60 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600/70 shadow-sm backdrop-blur-sm"
        >
          PROPERTY MANAGEMENT PLATFORM
        </motion.p>

        {/* Main Heading with Color Changing Effect */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          <motion.span 
            variants={colorCycle} 
            animate="animate"
          >
            Manage your properties
          </motion.span>
          <br className="hidden sm:block" />
          <span className="text-gray-900/90"> without the complexity</span>
        </motion.h1>

        {/* Sub text - Subtle RGBA Color */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-8 text-base sm:text-xl text-gray-600/70 max-w-2xl mx-auto px-2 leading-relaxed"
        >
          Everything you need to manage tenants, track payments, and run your
          real estate business — all in one simple platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center w-full"
        >
          <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/login"
              className="flex h-14 w-full sm:min-w-[200px] items-center justify-center gap-2 rounded-xl bg-gray-900/95 px-8 text-white shadow-lg transition hover:bg-black"
            >
              <Key size={18} />
              Get Started
            </Link>
          </motion.div>

          <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }}>
            <Link
              to="/register"
              className="flex h-14 w-full sm:min-w-[200px] items-center justify-center rounded-xl border border-gray-300/50 bg-white/40 px-8 font-medium text-gray-700/80 backdrop-blur-sm transition hover:bg-white/80"
            >
              Create Account
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;