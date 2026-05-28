/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface HeroProps {
  onOpenEstimator: () => void;
}

export default function Hero({ onOpenEstimator }: HeroProps) {
  return (
    <section 
      id="home"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay gradient and immersive image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-background/70 to-background"></div>
        <img 
          alt="Iluminación eventos Madrid - Concierto en Alpedrete con equipos de Elements Emitting Light" 
          className="w-full h-full object-cover object-[center_30%] select-none"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr72cVWJ3asxubR2SP49Ymb8uPfn5tcf6B-BaEMIN_Tyd-V9w3b0DMmKU6n9Hysr3o6ckbW1qbMvoBE35XN-zpvgyW_P-CO5AKT4ixH8BpYR9XphIqqNG_VtczrJmjySRcD68Lh7aAwTr8ChKiGrQA5cEW1q1B4DV6tIfrOup0R61MapKYFypE3XP5_8Zzt8TYZ_3-qek45qLc5P369kFLUaauRwlhVjwwN--l37dnILZFEk-nmeCiSqAHPvC1FXBjWYOf-kUqt8cd"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-on-surface leading-none mb-6 kinetic-text">
            SOLUCIONES <br />
            <span className="text-primary italic font-light drop-shadow-[0_0_30px_rgba(143,245,255,0.4)]">
              AUDIOVISUALES
            </span>
          </h1>
        </motion.div>

        <motion.p 
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Creamos experiencias visuales que destacan. Especialistas en imagen, integramos sonido, iluminación y video para elevar cada evento.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button 
            onClick={onOpenEstimator}
            className="glow-btn relative bg-primary text-black font-label font-bold text-sm tracking-widest px-8 py-4.5 rounded-lg hover:brightness-110 active:scale-95 transition-all outline-none"
          >
            INICIAR PROYECTO
          </button>
          
          <a
            href="#capacidades"
            className="border border-primary/20 text-primary hover:text-white hover:bg-primary/5 px-8 py-4.5 rounded-lg font-label font-bold text-sm tracking-widest active:scale-95 transition-all text-center flex items-center justify-center"
          >
            DESCUBRIR CAPACIDADES
          </a>
        </motion.div>
      </div>
      
      {/* Decorative side line overlays representing kinetic elements */}
      <div className="absolute right-0 bottom-12 w-16 h-2 bg-primary/20 rounded-l"></div>
      <div className="absolute left-0 bottom-12 w-24 h-2 bg-secondary/20 rounded-r"></div>
    </section>
  );
}
