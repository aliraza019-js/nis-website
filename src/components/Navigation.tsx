import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NISLogo } from "./NISLogo";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "Portfolio", "About", "Contact"];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-lg rounded-full px-6 md:px-8 py-2 border border-white/20"
              : "bg-white/95 backdrop-blur-2xl shadow-md rounded-full px-6 md:px-8 py-2"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 scale-90">
            <NISLogo animated={true} size="medium" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className="text-slate-700 hover:text-emerald-700 font-medium transition-colors relative group px-2 py-1 text-[15px] cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection("Contact")}
              className="bg-emerald-700 text-white px-8 py-2 rounded-full hover:bg-emerald-800 transition-all hover:shadow-lg hover:scale-105 font-medium text-[15px] cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 mx-4"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors py-3 px-4 rounded-xl font-medium cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("Contact")}
                className="w-full bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition-all font-medium mt-2 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
