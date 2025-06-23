"use client";

import { LinkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectsData = [
  {
    title: "Orgatagova",
    description: "Site internet de covoiturage de soirée",
    category: "Projet personnel",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    details: "Plateforme de mise en relation entre covoitureurs et conducteurs sobres pour des soirées en toute sécurité",
    link: null,
    featured: false,
  },
  {
    title: "Safe area",
    description: "Application permettant de répertorier des cas de harcèlement au travail",
    category: "Projet étudiant",
    technologies: ["Laravel", "Vue.js"],
    details: "Application web complète avec interface administrateur",
    link: null,
    featured: false,
  },
  {
    title: "Dogger",
    description: "Application de gestion d'erreur en production",
    category: "Projet étudiant",
    technologies: ["Laravel", "Vue.js"],
    details: "Système de monitoring et de gestion d'erreurs",
    link: "https://dogger.cloud",
    featured: true,
  },
  {
    title: "G'le Point",
    description: "Application de carte interactive pour partager des points d'intérêts entre amis",
    category: "Projet validation Master",
    technologies: ["Next.js", "Firebase"],
    details: "Application mobile-first avec géolocalisation",
    link: "https://glepoint.fr",
    featured: true,
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projet" className="py-20 px-4 w-full relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#083036]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#0a4a52]/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Quelques projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#083036] to-[#0a4a52] mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Découvrez mes réalisations et projets qui démontrent mes compétences en développement
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              ref={el => {
                projectRefs.current[index] = el;
              }}
              data-index={index}
              className={`group relative project-card rounded-2xl p-6 transition-all duration-500 ${
                visibleProjects.includes(index) ? 'fade-in-scale' : 'opacity-0 translate-y-8'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a4a52] text-white text-xs font-bold rounded-full z-10">
                  FEATURED
                </div>
              )}

              {/* Project Content */}
              <div className="space-y-4 h-full flex flex-col">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-[#0a4a52] transition-colors"
                        >
                          {project.title}
                          <ArrowTopRightOnSquareIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-[#0a4a52]/20 text-[#0a4a52] text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="gradient-text text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Details */}
                <p className="gradient-text text-xs">
                  {project.details}
                </p>

                {/* Technologies */}
                <div className="space-y-3 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-[#083036]/20 to-[#0a4a52]/20 text-[#0a4a52] text-xs rounded-lg border border-[#0a4a52]/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#083036]/5 to-[#0a4a52]/5 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center fade-in-delayed">
          <div className="inline-flex items-center justify-center">
            <a
              href="https://github.com/DreamsEvz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/95 hover:bg-white text-[#040c18] px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-lg font-semibold">En découvrir plus sur mon</span>
              <div className="relative">
                <Image
                  src="/github.svg"
                  alt="GitHub logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-[#0a4a52]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
