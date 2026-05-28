/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROJECTS } from "../data.ts";
import { Project } from "../types.ts";

interface ProyectosProps {
  onSelectProject: (project: Project) => void;
}

export default function Proyectos({ onSelectProject }: ProyectosProps) {
  // Distinguish between main big projects and auxiliary small projects
  const mainProjects = PROJECTS.slice(0, 2);
  const secondaryProjects = PROJECTS.slice(2);

  return (
    <section 
      id="portfolio"
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
        <motion.h2 
          className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROYECTOS
        </motion.h2>
        <motion.span 
          className="text-secondary font-display font-bold tracking-[0.2em] text-xs uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          LIVE_CASE_STUDIES
        </motion.span>
      </div>

      <div className="flex flex-col gap-24">
        {/* Main large projects */}
        {mainProjects.map((proj, idx) => {
          const isReverse = idx % 2 === 1;
          
          return (
            <motion.div 
              key={proj.id}
              className={`flex flex-col md:flex-row gap-12 items-center group cursor-pointer ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => onSelectProject(proj)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image side */}
              <div className="w-full md:w-3/5 overflow-hidden rounded-2xl bg-surface-container border border-white/5 relative">
                <img 
                  alt={`${proj.title} - Caso de Estudio`} 
                  className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out select-none"
                  src={proj.image}
                  loading="lazy"
                />
                
                {/* Visual glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text side */}
              <div className="w-full md:w-2/5">
                <span className={`font-bold tracking-[0.15em] text-xs uppercase mb-4 block ${
                  isReverse ? "text-secondary" : "text-primary"
                }`}>
                  {proj.tag}
                </span>
                
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tighter text-on-surface leading-none group-hover:text-primary transition-colors duration-300">
                  {proj.title}
                </h3>
                
                <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8 font-light">
                  {proj.description}
                </p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(proj);
                  }}
                  className={`border-b-2 pb-2 hover:text-white transition-all font-display text-sm font-bold tracking-widest uppercase cursor-pointer ${
                    isReverse 
                      ? "text-secondary border-secondary/30 hover:border-secondary" 
                      : "text-primary border-primary/30 hover:border-primary"
                  }`}
                >
                  VER CASO DE ESTUDIO
                </button>
              </div>
            </motion.div>
          );
        })}

        {/* Secondary small projects row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {secondaryProjects.map((proj, idx) => {
            return (
              <motion.div 
                key={proj.id}
                className="group cursor-pointer"
                onClick={() => onSelectProject(proj)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-2xl mb-6 bg-surface-container border border-white/5">
                  <img 
                    alt={proj.title} 
                    className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    src={proj.image}
                    loading="lazy"
                  />
                </div>
                
                <h4 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                  {proj.title}
                </h4>
                
                <p className="text-on-surface-variant font-body text-sm mt-2 leading-relaxed font-light">
                  {proj.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-primary/70 group-hover:text-primary transition-colors duration-300 text-xs font-bold tracking-widest uppercase font-display">
                  <span>Análisis Técnico</span>
                  <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
