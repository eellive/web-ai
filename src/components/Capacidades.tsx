/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CAPABILITIES } from "../data.ts";

interface CapacidadesProps {
  onSelectCapability: (title: string) => void;
}

export default function Capacidades({ onSelectCapability }: CapacidadesProps) {
  return (
    <section 
      id="capacidades"
      className="py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">
            CAPACIDADES
          </h2>
          <div className="h-1 w-24 bg-primary rounded"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap, idx) => {
          const isWide = cap.span && cap.span.includes("col-span");
          
          return (
            <motion.div
              key={cap.id}
              onClick={() => onSelectCapability(cap.title)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-surface-container-high border border-white/5 hover:border-primary/20 transition-all duration-300 ${
                isWide ? cap.span : "h-[450px]"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  alt={`${cap.title} - Elements Emitting Light`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                  src={cap.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity"></div>
              </div>

              {cap.id === "pantallas-led" ? (
                <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end md:justify-center z-10 max-w-xl">
                  <span className="text-secondary font-label text-xs tracking-[0.2em] mb-2 uppercase block">
                    Vanguardia Visual
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter">
                    {cap.title}
                  </h3>
                  <p className="text-on-surface-variant font-body text-base md:text-lg leading-relaxed font-light">
                    {cap.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary hover:text-white transition-colors">
                    <span className="font-label text-xs font-bold tracking-widest uppercase">Consultar Solución</span>
                    <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <span className="text-primary/70 font-label text-[10px] tracking-[0.2em] mb-1 uppercase block">
                    Equipamiento de Élite
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed font-light">
                    {cap.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
                    <span className="font-label text-[11px] font-bold tracking-widest uppercase">Ver Requisitos</span>
                    <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                  </div>
                </div>
              )}
              
              {/* Corner accent glow representing physical equipment lighting */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
