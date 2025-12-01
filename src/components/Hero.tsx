import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm">Transforming Businesses Since 2020</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl mb-6 text-slate-900 font-bold"
            >
              Next-Gen
              <span className="block text-emerald-700">IT Solutions</span>
              For Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
            >
              We deliver cutting-edge technology solutions that drive innovation,
              enhance efficiency, and accelerate your digital transformation journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToContact}
                className="group bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-lg border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-200"
            >
              <div>
                <div className="text-3xl text-emerald-700 mb-1">150+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-700 mb-1">50+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-700 mb-1">98%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <ImageWithFallback
                src="/public/hero-section-one.jpeg"
                alt="Professional team collaborating on innovative technology solutions"
                className="w-full h-full object-cover blur-[2px]"
              />
              {/* Gradient Overlay for better visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-transparent to-emerald-700/10"></div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-200 rounded-2xl -z-10 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-2xl -z-10 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
