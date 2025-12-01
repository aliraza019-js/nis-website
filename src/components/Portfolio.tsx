import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "Global Manufacturing Corp",
      category: "Cloud Solutions",
      description:
        "Successfully migrated a Fortune 500 company's infrastructure to AWS, reducing operational costs by 40% while improving scalability.",
      image:
        "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjQ1MDc4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AWS", "DevOps", "Migration"],
    },
    {
      title: "AI-Powered Analytics Platform",
      client: "FinTech Solutions Inc",
      category: "Data Analytics",
      description:
        "Built a sophisticated analytics platform using machine learning to provide real-time insights and predictive analytics.",
      image:
        "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0OTQ5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AI/ML", "Python", "React"],
    },
    {
      title: "Cybersecurity Framework",
      client: "Healthcare Network",
      category: "Security",
      description:
        "Implemented a comprehensive security framework protecting sensitive patient data across 50+ healthcare facilities.",
      image:
        "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Security", "Compliance", "HIPAA"],
    },
    {
      title: "Mobile Banking Application",
      client: "Regional Bank",
      category: "Mobile Development",
      description:
        "Developed a secure, user-friendly mobile banking app serving over 500,000 active users with 4.8-star rating.",
      image:
        "https://images.unsplash.com/photo-1690627931320-16ac56eb2588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmt8ZW58MXx8fHwxNzY0NTcxNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Node.js", "Security"],
    },
    {
      title: "E-Commerce Platform Redesign",
      client: "Retail Chain",
      category: "Web Development",
      description:
        "Redesigned and rebuilt e-commerce platform, increasing conversion rates by 65% and improving page load times by 80%.",
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQ1MTYxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Next.js", "Performance"],
    },
    {
      title: "IoT Smart Factory Solution",
      client: "Manufacturing Leader",
      category: "IoT & Automation",
      description:
        "Deployed IoT sensors and analytics across production facilities, improving efficiency by 35% and reducing downtime.",
      image:
        "https://images.unsplash.com/photo-1603219950587-b4f3f7ee87e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDUwODYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["IoT", "Azure", "Analytics"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Our <span className="text-emerald-700">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Delivering exceptional results for clients across industries. Here are
            some of our recent success stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                  <ExternalLink className="text-emerald-700" size={20} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-700 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-emerald-700 mb-3">{project.client}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-emerald-700 group-hover:gap-2 transition-all">
                  <span className="text-sm">View Case Study</span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
