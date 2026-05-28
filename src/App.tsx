/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Capacidades from "./components/Capacidades.tsx";
import Ecosistemas from "./components/Ecosistemas.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Contacto from "./components/Contacto.tsx";
import Footer from "./components/Footer.tsx";
import Drawer from "./components/Drawer.tsx";
import ProjectModal from "./components/ProjectModal.tsx";
import EstimatorModal from "./components/EstimatorModal.tsx";
import LegalPages, { LegalPageType } from "./components/LegalPages.tsx";
import { Project } from "./types.ts";

export default function App() {
  const [activePage, setActivePage] = useState<"home" | LegalPageType>("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleToggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSelectAnchor = (anchor: string) => {
    if (activePage !== "home") {
      setActivePage("home");
      setTimeout(() => {
        const section = document.querySelector(anchor);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    } else {
      const section = document.querySelector(anchor);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSelectCategory = (categoryTitle: string) => {
    // If user clicks a specific category in drawer, open estimator pre-checked with that gear or set contact form
    setPrefilledMessage(`Hola, me pongo en contacto para consultar presupuesto y disponibilidad técnica para una solución integral de ${categoryTitle}.`);
    handleSelectAnchor("#contacto");
  };

  const handleSelectCapabilityInGrid = (title: string) => {
    setPrefilledMessage(`Me interesa vuestra solución de ${title}. ¿Podríais enviarme la ficha técnica y las capacidades del equipamiento disponible en Madrid?`);
    handleSelectAnchor("#contacto");
  };

  const handleSelectEcosystemInGrid = (title: string) => {
    setPrefilledMessage(`Hola, somos una entidad del sector de ${title} y nos gustaría asesoramiento técnico para el montaje de nuestro próximo proyecto audiovisual en Madrid.`);
    handleSelectAnchor("#contacto");
  };

  const handleOpenEstimator = () => {
    setIsEstimatorOpen(true);
  };

  const handleCloseEstimator = () => {
    setIsEstimatorOpen(false);
  };

  const handleApplyEstimatorText = (summaryText: string) => {
    setPrefilledMessage(summaryText);
  };

  const handleGoToPage = (pageName: LegalPageType) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary selection:text-black">
      
      {/* Dynamic Navigation Header */}
      <Header 
        onToggleDrawer={handleToggleDrawer} 
        onOpenEstimator={handleOpenEstimator} 
        onSelectAnchor={handleSelectAnchor}
      />

      {/* Main Structural Layout Sections or Legal Pages */}
      {activePage === "home" ? (
        <main className="pt-20 pb-16 md:pb-0">
          
          {/* Hero Section */}
          <Hero onOpenEstimator={handleOpenEstimator} />

          {/* Capacidades Grid */}
          <Capacidades onSelectCapability={handleSelectCapabilityInGrid} />

          {/* Ecosistemas Sectors */}
          <Ecosistemas onSelectEcosystem={handleSelectEcosystemInGrid} />

          {/* Proyectos Case Studies */}
          <Proyectos onSelectProject={setSelectedProject} />

          {/* Contact Form */}
          <Contacto prefilledMessage={prefilledMessage} />

        </main>
      ) : (
        <LegalPages type={activePage} onBack={() => setActivePage("home")} />
      )}

      {/* Footer Branding and legal notice */}
      <Footer onSelectPage={handleGoToPage} />

      {/* Left-side Responsive Drawer menu */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSelectAnchor={handleSelectAnchor}
        onSelectCategory={handleSelectCategory}
      />

      {/* Case Study Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Project configuration and Quote Wizard Modal */}
      <EstimatorModal 
        isOpen={isEstimatorOpen} 
        onClose={handleCloseEstimator} 
        onApplyEstimator={handleApplyEstimatorText} 
      />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pb-6 pt-3 bg-slate-950/90 backdrop-blur-2xl shadow-[0_-20px_50px_rgba(0,240,255,0.06)] rounded-t-[32px] border-t border-primary/10">
        <button 
          onClick={() => handleSelectAnchor("#home")}
          className="flex flex-col items-center justify-center text-[#ababad] active:text-primary transition-all p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">home_max</span>
          <span className="font-headline text-[10px] uppercase tracking-widest mt-1">HOME</span>
        </button>
        
        <button 
          onClick={() => handleSelectAnchor("#capacidades")}
          className="flex flex-col items-center justify-center text-[#ababad] active:text-primary transition-all p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">auto_awesome_motion</span>
          <span className="font-headline text-[10px] uppercase tracking-widest mt-1">WORK</span>
        </button>

        <button 
          onClick={() => handleSelectAnchor("#ecosistemas")}
          className="flex flex-col items-center justify-center text-[#ababad] active:text-primary transition-all p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">settings_input_component</span>
          <span className="font-headline text-[10px] uppercase tracking-widest mt-1">GEAR</span>
        </button>

        <button 
          onClick={() => handleSelectAnchor("#contacto")}
          className="flex flex-col items-center justify-center text-[#ababad] active:text-primary transition-all p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">alternate_email</span>
          <span className="font-headline text-[10px] uppercase tracking-widest mt-1">CONTACT</span>
        </button>
      </nav>

    </div>
  );
}
