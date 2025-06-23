"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Compétences", href: "#competences", current: false },
  { name: "Parcours", href: "#parcours", current: false },
  { name: "Projets", href: "#projet", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#083036] via-[#0a4a52] to-[#083036] transform origin-left scale-x-0 z-50 transition-transform duration-300" 
           style={{
             transform: `scaleX(${typeof window !== 'undefined' ? Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) : 0})`
           }}></div>

      <Disclosure as="nav" className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'navbar-glass shadow-2xl' : 'bg-transparent'}`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center">
                  <button
                    onClick={scrollToTop}
                    className="text-white font-bold text-xl md:text-2xl hover:text-[#0a4a52] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a4a52] focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-2 py-1"
                  >
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      EVAN MARCEL
                    </span>
                  </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="flex space-x-1">
                    {navigation.map((item) => {
                      const isActive = activeSection === item.href.slice(1);
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive
                              ? "bg-white/20 text-white border-[#0a4a52] border-b-2"
                              : "text-gray-300 hover:bg-white/10 hover:text-white border-transparent hover:border-white/30 border-b-2",
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group"
                          )}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#083036]/20 to-[#0a4a52]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-xl p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <div className="relative">
                      {open ? (
                        <XMarkIcon className="block h-6 w-6 transform rotate-180 transition-transform duration-300" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6 transform rotate-0 transition-transform duration-300" aria-hidden="true" />
                      )}
                    </div>
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Panel */}
            <Disclosure.Panel className="md:hidden absolute top-full left-0 w-full navbar-glass border-t border-white/10">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        isActive
                          ? "bg-white/20 text-white border-l-4 border-[#0a4a52]"
                          : "text-gray-300 hover:bg-white/10 hover:text-white border-l-4 border-transparent hover:border-white/30",
                        "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-r-lg"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
