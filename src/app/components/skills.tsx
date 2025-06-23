"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    title: "Front-end",
    skills: [
      { name: "Next.js", icon: "/skills-svg/nextjs-icon.svg" },
      { name: "React", icon: "/skills-svg/react.svg" },
      { name: "Vue.js", icon: "/skills-svg/vue.svg" },
      { name: "Tailwind CSS", icon: "/skills-svg/tailwindcss-icon.svg" },
    ],
    borderClass: "border-t-4 border-l-4",
  },
  {
    title: "Back-end",
    skills: [
      { name: "Laravel", icon: "/skills-svg/laravel.svg" },
      { name: "Symfony", icon: "/skills-svg/symfony.svg" },
      { name: "Django", icon: "/skills-svg/django-icon.svg" },
      { name: "Node.js", icon: "/skills-svg/nodejs-icon.svg" },
    ],
    borderClass: "border-b-4 border-r-4",
  },
  {
    title: "Langages",
    skills: [
      { name: "JavaScript", icon: "/skills-svg/javascript.svg" },
      { name: "TypeScript", icon: "/skills-svg/typescript-icon.svg" },
      { name: "Python", icon: "/skills-svg/python.svg" },
      { name: "PHP", icon: "/skills-svg/php.svg" },
    ],
    borderClass: "border-t-4 border-l-4",
  },
  {
    title: "Base de données",
    skills: [
      { name: "MySQL", icon: "/skills-svg/mysql-icon.svg" },
      { name: "MongoDB", icon: "/skills-svg/mongodb-icon.svg" },
      { name: "PostgreSQL", icon: "/skills-svg/postgresql.svg" },
    ],
    borderClass: "border-b-4 border-r-4",
  },
  {
    title: "CI/CD & Outils",
    skills: [
      { name: "Docker", icon: "/skills-svg/docker-icon.svg" },
      { name: "GitLab", icon: "/skills-svg/gitlab.svg" },
    ],
    borderClass: "border-t-4 border-l-4",
  },
];

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="py-20 px-4 w-full relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#083036]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a4a52]/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#083036] to-[#0a4a52] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et des technologies que je maîtrise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              ref={el => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`skill-card rounded-2xl p-6 hover-lift transition-all duration-500 ${
                visibleCards.includes(index) ? 'fade-in-scale' : 'opacity-0 translate-y-8'
              } ${category.borderClass} border-[#0a4a52]`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                gridColumn: index === 4 ? 'span 1' : 'span 1'
              }}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#083036] to-[#0a4a52] mx-auto rounded-full"></div>
              </div>

              {/* Skills Icons */}
              <div className="grid grid-cols-2 gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="relative">
                      <Image
                        className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                        src={skill.icon}
                        height={50}
                        width={50}
                        alt={skill.name}
                      />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-[#0a4a52]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center fade-in-delayed">
          <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Mon expertise</h3>
            <p className="text-gray-300 leading-relaxed">
              Fort de plusieurs années d'expérience, je maîtrise un large éventail de technologies 
              modernes pour créer des applications web complètes et performantes. Ma passion pour 
              l'apprentissage continu me permet de rester à jour avec les dernières innovations 
              du développement web.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-gray-300">Technologies Frontend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">8+</div>
                <div className="text-gray-300">Frameworks & Outils</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3+</div>
                <div className="text-gray-300">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
