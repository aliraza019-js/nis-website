import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Custom Software Development",
      "Cloud Solutions",
      "AI & Machine Learning",
      "Mobile App Development",
      "UI/UX Design",
      "DevOps & SecOps",
      "Digital Transformation",
      "Dedicated Team",
    ],
    Company: ["About Us", "Careers", "Blog", "Case Studies", "Partners", "News"],
  };

  const contactLinks = [
    { label: "Sales", email: "sales@nexinsystems.com" },
    { label: "General Inquiries", email: "contact@nexinsystems.com" },
    { label: "Job Opportunities", email: "careers@nexinsystems.com" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NIS</span>
              </div>
              <div>
                <h3 className="leading-tight">Next Innovation</h3>
                <p className="text-xs text-slate-400 tracking-wider">SYSTEMS</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses through innovative technology solutions and digital
              transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-emerald-400 font-semibold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Section */}
          <div>
            <h4 className="mb-4 text-emerald-400 font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <div className="mb-2">
                    <p className="text-slate-300 text-sm font-medium mb-1">{contact.label}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Next Innovation Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
