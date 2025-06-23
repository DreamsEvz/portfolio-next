"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowTopRightOnSquareIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import DynamicText from "./mini-component/dynamicText";

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#083036]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0a4a52]/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`relative z-10 w-full max-w-4xl text-white text-center transition-all duration-1000 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="profile-image mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              src="/photo.jpg"
              width={320}
              height={320}
              alt="Evan Marcel - Développeur Fullstack"
              priority
            />
          </div>
          
          {/* Floating elements around profile */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-[#0a4a52] rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-8 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 border-2 border-[#0a4a52] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Name and Title */}
        <div className={`space-y-6 ${isVisible ? 'fade-in-delayed' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
            EVAN MARCEL
          </h1>
          
          <div className="text-lg md:text-2xl xl:text-3xl font-light">
            <span className="text-gray-200">DÉVELOPPEUR FULLSTACK </span>
            <br className="md:hidden" />
            <DynamicText />
            <span className="cursor">|</span>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-lg md:text-xl">
            <div className="h-4 aspect-square bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-200">Actuellement en poste au sein de l&rsquo;entreprise Bimedoc</span>
            <a href="https://www.bimedoc.com/" target="_blank" rel="noopener noreferrer">
              <ArrowTopRightOnSquareIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible ? 'fade-in-scale' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <a
            href="#projet"
            className="btn-modern px-8 py-4 rounded-xl text-white font-medium hover:scale-105 transform transition-all duration-300 inline-flex items-center group"
          >
            <span>Voir mes projets</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl text-[#0a4a52] bg-white/90 hover:bg-white font-medium hover:scale-105 transform transition-all duration-300 inline-flex items-center group shadow-xl"
          >
            <span>Me contacter</span>
            <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce focus:outline-none focus:ring-2 focus:ring-[#0a4a52] focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
        aria-label="Scroll to skills section"
      >
        <ChevronDownIcon className="w-8 h-8" />
      </button>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Presentation;
