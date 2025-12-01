import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Cloud,
  Brain,
  Smartphone,
  Palette,
  LineChart,
  Users,
  GitBranch,
} from "lucide-react";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business needs and drive operational excellence.",
      color: "emerald",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Seamless cloud migration, management, and optimization to scale your infrastructure efficiently.",
      color: "blue",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "AI and Machine Learning solutions to automate your business processes and improve your decision-making.",
      color: "red",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "purple",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces designed to improve user experience and boost engagement.",
      color: "purple",
    },
    {
      icon: GitBranch,
      title: "DevOps & SecOps",
      description:
        "Streamlined development operations and robust security practices to accelerate delivery and protect your assets.",
      color: "orange",
    },
    {
      icon: LineChart,
      title: "Digital Transformation",
      description:
        "Strategic consulting to modernize your business processes and embrace digital innovation.",
      color: "teal",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "Skilled professionals dedicated to your project, working as an extension of your in-house team.",
      color: "teal",
    },
  ];

  // Tailwind safelist: bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 bg-cyan-100 text-cyan-700 group-hover:bg-cyan-700 bg-pink-100 text-pink-700 group-hover:bg-pink-700
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string }> = {
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        hover: "group-hover:bg-emerald-700",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        hover: "group-hover:bg-blue-700",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-700",
        hover: "group-hover:bg-red-700",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        hover: "group-hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-700",
        hover: "group-hover:bg-orange-700",
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-700",
        hover: "group-hover:bg-teal-700",
      },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-700",
        hover: "group-hover:bg-indigo-700",
      },
      cyan: {
        bg: "bg-cyan-100",
        text: "text-cyan-700",
        hover: "group-hover:bg-cyan-700",
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-700",
        hover: "group-hover:bg-pink-700",
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4 font-bold">
            IT Services & <span className="text-emerald-700">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From cloud migration to AI/ML and DevOps - comprehensive technology solutions for digital transformation and business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-colors ${colors.hover}`}
                >
                  <Icon className={`${colors.text} group-hover:text-white transition-colors`} size={32} />
                </div>
                <h3 className="text-xl text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-1 bg-emerald-700 rounded-full mt-6"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
