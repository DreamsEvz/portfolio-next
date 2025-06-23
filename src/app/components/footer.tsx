"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "marcel.evan2001@gmail.com",
    href: "mailto:marcel.evan2001@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: PhoneIcon,
    label: "Téléphone",
    value: "+33 6 12 22 20 88",
    href: "tel:+33612222088",
    color: "text-green-400"
  },
  {
    icon: MapPinIcon,
    label: "Localisation",
    value: "Lyon, France",
    href: "https://maps.google.com/?q=Lyon,France",
    color: "text-red-400"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    href: "https://linkedin.com/in/evan-marcel",
    color: "hover:bg-blue-600"
  },
  {
    name: "GitHub",
    icon: "/github.svg",
    href: "https://github.com/DreamsEvz",
    color: "hover:bg-gray-800"
  },
];

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const date = new Date();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-gradient-to-br from-[#083036]/90 to-[#040c18]/90 backdrop-blur-lg border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Restons en contact
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vous avez un projet en tête ? Une opportunité à discuter ? 
                N&rsquo;hésitez pas à me contacter, je serais ravi d&rsquo;échanger avec vous.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center gap-4 p-4 rounded-xl glass-dark hover:bg-white/10 transition-all duration-300"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className={`p-3 rounded-lg bg-white/10 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm">{contact.label}</div>
                    <div className="text-white font-medium transition-colors duration-300">
                      {contact.value}
                    </div>
                  </div>
                  {contact.href.startsWith('http') && (
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center justify-center">
            <div className="glass-dark rounded-2xl p-8 w-full max-w-md text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#083036] to-[#0a4a52] rounded-2xl flex items-center justify-center">
                <HeartIcon className="w-10 h-10 text-white animate-pulse" />
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  Développeur Fullstack
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:marcel.evan2001@gmail.com"
                  className="btn-modern px-6 py-3 rounded-xl text-white font-medium hover:scale-105 transform transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <EnvelopeIcon className="w-4 h-4" />
                  Me contacter
                </a>
                
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  Retour en haut ↑
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Footer Info */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Suivez-moi :</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="transition-transform duration-300 group-hover:scale-110 filter brightness-0 invert"
                    />
                    
                    {/* Tooltip */}
                    {hoveredSocial === social.name && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {social.name}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {date.getFullYear()} <span className="text-white font-medium">Evan MARCEL</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Développé avec ❤️ en Next.js
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#083036]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#0a4a52]/20 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
