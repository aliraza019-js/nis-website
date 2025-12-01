import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Award, Users, Target, Zap } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to achieve shared success",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on measurable outcomes and business impact",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve complex challenges",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4 font-bold">
            Leading <span className="text-emerald-700">Tech Partner</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert software consultants driving digital innovation and technology excellence with proven industry expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl text-slate-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Next Innovation Systems is a premier IT solutions provider dedicated to
              helping businesses navigate the complexities of digital transformation.
              Since our inception, we've been at the forefront of technological
              innovation, delivering solutions that drive real business value.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Our team of expert consultants, developers, and strategists work
              collaboratively with clients across industries to design, build, and
              implement custom technology solutions that address unique challenges and
              unlock new opportunities.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe in building long-term partnerships based on trust,
              transparency, and measurable results. Our commitment to excellence and
              innovation has made us a trusted partner for organizations worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-emerald-700 mb-2">5+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-emerald-700 mb-2">150+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-emerald-700 mb-2">50+</div>
                <div className="text-sm text-slate-600">Enterprise Clients</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl text-emerald-700 mb-2">75+</div>
                <div className="text-sm text-slate-600">Expert Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl -z-10"></div>
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="py-12 px-8">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4 text-sm font-medium"
              >
                What Drives Us
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Our Core Values
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
