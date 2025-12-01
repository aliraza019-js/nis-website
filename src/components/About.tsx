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
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            About <span className="text-emerald-700">Us</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leading the way in digital innovation and technology excellence
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
        >
          <h3 className="text-3xl text-slate-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors">
                    <Icon className="text-emerald-700 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h4 className="text-lg text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
