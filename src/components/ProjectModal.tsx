/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MapPin, User, ShieldCheck, Cpu } from "lucide-react";
import { Project } from "../types.ts";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop screen split */}
          <motion.div 
            className="fixed inset-0 bg-[#020617]/95 z-[999] overflow-y-auto flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Body Container */}
            <motion.div 
              className="relative bg-surface-container rounded-3xl w-full max-w-5xl border border-white/5 shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh] flex flex-col md:flex-row"
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
            >
              {/* Close Button top-right absolute */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-[#ababad] hover:text-white cursor-pointer p-2 bg-slate-950/80 hover:bg-slate-900 rounded-full transition-colors z-50 border border-white/5"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Showcase */}
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover absolute inset-0 select-none"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Visual Label at the bottom left */}
                <div className="absolute bottom-8 left-8 p-4 z-10 glass-panel border border-white/5 rounded-2xl max-w-sm">
                  <span className="text-primary font-label text-[10px] tracking-widest uppercase block mb-1">
                    ESTUDIO DE CASO EN VIVO
                  </span>
                  <p className="text-white text-xs leading-relaxed font-light font-body">
                    Hito tecnológico operado por el personal de ingeniería de Elements Emitting Light.
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed parameters */}
              <div className="md:w-1/2 p-8 sm:p-12 overflow-y-auto bg-[#0d0e10]/95 flex flex-col justify-between">
                <div>
                  <span className="text-secondary font-label text-xs tracking-widest uppercase mb-2 block">
                    {project.tag}
                  </span>
                  
                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#fdfbfe] mb-6 tracking-tighter leading-tight uppercase">
                    {project.title}
                  </h3>

                  {/* Metadata Slots */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-white/5 mb-8 font-body">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary shrink-0" />
                      <div className="min-w-0">
                        <span className="text-[9px] text-on-surface-variant block uppercase tracking-wide">Cliente</span>
                        <span className="text-xs text-[#faf9fb] font-medium block truncate">{project.client}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <span className="text-[9px] text-on-surface-variant block uppercase tracking-wide">Fecha</span>
                        <span className="text-xs text-[#faf9fb] font-medium block">{project.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <div className="min-w-0">
                        <span className="text-[9px] text-on-surface-variant block uppercase tracking-wide">Ubicación</span>
                        <span className="text-xs text-[#faf9fb] font-medium block truncate">{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Conceptual narrative */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-sm font-bold tracking-widest text-primary mb-2 uppercase">
                        CONCEPTO CREATIVO
                      </h4>
                      <p className="text-on-surface-variant font-body text-sm leading-relaxed font-light">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technical Equipment List */}
                    <div>
                      <h4 className="font-display text-sm font-bold tracking-widest text-primary mb-3 uppercase flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-primary" />
                        EQUIPAMIENTO ESPECÍFICO
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 font-body">
                        {project.equipment.map((eq, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-on-surface-variant">
                            <span className="text-secondary select-none font-bold">▪</span>
                            <span className="font-light">{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Engineering Services List */}
                    <div>
                      <h4 className="font-display text-sm font-bold tracking-widest text-primary mb-3 uppercase flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        SERVICIOS DE INGENIERÍA
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 font-body">
                        {project.services.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-[#ababad]">
                            <span className="text-primary select-none">✓</span>
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Footer modal CTA */}
                <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] uppercase font-label tracking-widest text-slate-500">
                    DIRECCIÓN TÉCNICA E.E.L.
                  </div>
                  <button 
                    onClick={onClose}
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background font-bold px-6 py-2 rounded-lg text-xs font-headline uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Salir
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
