"use client";

import { useEffect, useRef, useState } from "react";
import { BriefcaseIcon, AcademicCapIcon, CalendarIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    company: "Bimedoc",
    role: "Développeur Fullstack",
    description: "Développement d'une application pharmaceutique destinée aux hôpitaux et pharmacies d'officine",
    technologies: ["Angular", "Django", "AWS", "PostgreSQL"],
    period: "Novembre 2024 - Actuellement",
    type: "experience",
    duration: "En cours",
    current: true,
  },
  {
    company: "Virtualbuilding",
    role: "Développeur Fullstack",
    description: "Développement d'un back-office sur mesure pour la création d'iframe intégrable sur les sites des clients",
    technologies: ["React", "Django"],
    period: "2021-2024",
    type: "experience",
    duration: "3 ans",
    current: false,
  },
  {
    company: "Com & company",
    role: "Développeur Web",
    description: "Développement d'une plateforme de signature électronique interne à l'entreprise",
    technologies: ["Symfony", "Vue.js"],
    period: "2021",
    type: "experience",
    duration: "Stage",
    current: false,
  },
];

const education = [
  {
    title: "RNCP de niveau 7 Expert en système d'information",
    school: "Ynov campus Lyon",
    period: "2022-2024",
    type: "education",
    level: "Master",
  },
  {
    title: "Bachelor développeur web",
    school: "Ynov campus Lyon",
    period: "2021-2022",
    type: "education",
    level: "Bachelor",
  },
  {
    title: "BTS SIO",
    school: "Lycée Ella Fitzgerald",
    period: "2019-2021",
    type: "education",
    level: "BTS",
  },
];

const Pathing = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="parcours" className="py-20 px-4 w-full relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#083036]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#0a4a52]/10 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Parcours
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#083036] to-[#0a4a52] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Mon parcours professionnel et académique qui m'a mené jusqu'ici
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Expériences professionnelles</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={el => {
                    itemRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 ${
                    visibleItems.includes(index) ? 'fade-in-scale' : 'opacity-0 translate-x-8'
                  } ${exp.current ? 'ring-2 ring-emerald-400/50 bg-emerald-500/10' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Current job badge */}
                  {exp.current && (
                    <div className="absolute -top-3 -right-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.company}</h4>
                        <p className="text-blue-300 font-semibold text-lg">{exp.role}</p>
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                        exp.current 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 text-white text-sm rounded-lg border border-white/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm mt-3">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Diplômes & parcours scolaire</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  ref={el => {
                    itemRefs.current[experiences.length + index] = el;
                  }}
                  data-index={experiences.length + index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 ${
                    visibleItems.includes(experiences.length + index) ? 'fade-in-scale' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: `${(experiences.length + index) * 0.2}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white leading-tight mb-1">{edu.title}</h4>
                        <p className="text-purple-300 font-semibold">{edu.school}</p>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full font-medium">
                        {edu.level}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 fade-in-delayed">
          <div className="glass-dark rounded-2xl p-8 text-center border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-8">En résumé</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3+</div>
                <div className="text-gray-300">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-300">Entreprises</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400 mb-2">Titre RNCP de niveau 7</div>
                <div className="text-gray-300">Dernière formation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathing;
