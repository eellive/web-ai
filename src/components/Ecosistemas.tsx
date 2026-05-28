/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ECOSYSTEMS } from "../data.ts";

interface EcosistemasProps {
  onSelectEcosystem: (title: string) => void;
}

export default function Ecosistemas({ onSelectEcosystem }: EcosistemasProps) {
  return (
    <section 
      id="ecosistemas"
      className="bg-surface-container-low py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">
                ECOSISTEMAS
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed font-light">
                Especializados en cada sector, adaptamos nuestra ingeniería técnica y la narrativa digital a las demandas de cada tipología de evento.
              </p>
            </motion.div>
          </div>
          
          <div className="text-primary font-display font-black text-6xl opacity-10 select-none">
            02 / 05
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ECOSYSTEMS.map((eco, idx) => {
            return (
              <motion.div
                key={eco.id}
                onClick={() => onSelectEcosystem(eco.title)}
                className="group relative overflow-hidden h-40 rounded-xl bg-surface-container-highest border border-white/5 hover:border-primary/20 cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    alt={`${eco.title} - Ingeniería de eventos`} 
                    className="w-full h-full object-cover opacity-65 group-hover:opacity-85 brightness-110 transition-all duration-500 ease-out select-none"
                    src={eco.image}
                    loading="lazy"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-slate-950/45 mix-blend-multiply group-hover:bg-slate-950/25 transition-colors"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 text-center">
                  <span className="font-display font-black text-lg md:text-xl tracking-widest text-[#ffffff] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-primary transition-colors duration-300 uppercase leading-none">
                    {eco.title}
                  </span>
                  <p className="font-body text-[10px] tracking-wide text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 uppercase">
                    Solicitar Info
                  </p>
                </div>
                
                {/* Border effect */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
