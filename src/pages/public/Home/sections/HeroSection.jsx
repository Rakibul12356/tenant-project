import React from "react";
import { Link } from "react-router-dom";
import { Key } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-50 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(219,234,254,0.9) 0%, rgba(241,245,249,0.85) 45%, rgba(209,250,229,0.9) 100%)",
          backgroundSize: "180% 180%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl -z-10"
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl -z-10"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto w-full text-center">
        
        {/* Small Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.4 }}
          className="mb-5 inline-flex items-center rounded-full border border-blue-200/70 bg-white/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700 shadow-sm backdrop-blur"
        >
          PROPERTY MANAGEMENT PLATFORM
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
        >
          Manage your properties
          <br />
          without the complexity
        </motion.h1>

        {/* Sub text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Everything you need to manage tenants, track payments, and run your
          real estate business — all in one simple platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/login"
              className="inline-flex h-14 min-w-47.5 items-center justify-center gap-2 rounded-lg bg-gray-900 px-8 text-white transition hover:bg-gray-800"
            >
              <Key size={18} />
              Get Started
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }}>
            <Link
              to="/register"
              className="inline-flex h-14 min-w-47.5 items-center justify-center rounded-lg border border-gray-300 px-8 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Create Account
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-0.5 bg-gray-200 mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default HeroSection;