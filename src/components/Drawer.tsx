/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Lightbulb, Video, Volume2, Maximize, NotebookTabs } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAnchor: (anchor: string) => void;
  onSelectCategory: (cat: string) => void;
}

export default function Drawer({ isOpen, onClose, onSelectAnchor, onSelectCategory }: DrawerProps) {
  const categories = [
    { title: "ILUMINACIÓN", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
    { title: "VÍDEO", icon: <Video className="w-5 h-5 text-primary" /> },
    { title: "SONIDO", icon: <Volume2 className="w-5 h-5 text-primary" /> },
    { title: "PANTALLAS LED", icon: <Maximize className="w-5 h-5 text-primary" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Lateral Slide-out Drawer */}
          <motion.aside
            className="fixed top-0 left-0 h-full w-80 bg-slate-950 z-[100] shadow-[50px_0_100px_rgba(0,0,0,0.5)] rounded-r-3xl flex flex-col p-8 border-r border-white/5"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-primary font-black font-headline text-xl tracking-tight">
                CAPACIDADES
              </h2>
              <button 
                onClick={onClose}
                className="text-on-surface-variant hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-white/5"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 font-headline">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => {
                    onSelectCategory(cat.title);
                    onClose();
                  }}
                  className="text-primary bg-white/5 hover:bg-primary/10 hover:text-white border-l-4 border-primary p-4 rounded-r-lg font-medium text-base flex items-center gap-4 transition-all text-left cursor-pointer"
                >
                  {cat.icon}
                  {cat.title}
                </button>
              ))}

              <div className="h-px bg-white/10 my-6"></div>

              {/* Context anchors */}
              <button
                onClick={() => {
                  onSelectAnchor("#home");
                  onClose();
                }}
                className="text-[#ababad] hover:text-white p-4 text-sm tracking-widest font-bold flex items-center gap-3 transition-colors text-left uppercase"
              >
                <NotebookTabs className="w-4 h-4 text-[#ababad]" />
                Inicio
              </button>
              
              <button
                onClick={() => {
                  onSelectAnchor("#capacidades");
                  onClose();
                }}
                className="text-[#ababad] hover:text-white p-4 text-sm tracking-widest font-bold flex items-center gap-3 transition-colors text-left uppercase"
              >
                <NotebookTabs className="w-4 h-4 text-[#ababad]" />
                Trabajos
              </button>

              <button
                onClick={() => {
                  onSelectAnchor("#ecosistemas");
                  onClose();
                }}
                className="text-[#ababad] hover:text-white p-4 text-sm tracking-widest font-bold flex items-center gap-3 transition-colors text-left uppercase"
              >
                <NotebookTabs className="w-4 h-4 text-[#ababad]" />
                Ecosistemas
              </button>

              <button
                onClick={() => {
                  onSelectAnchor("#contacto");
                  onClose();
                }}
                className="text-[#ababad] hover:text-white p-4 text-sm tracking-widest font-bold flex items-center gap-3 transition-colors text-left uppercase"
              >
                <NotebookTabs className="w-4 h-4 text-[#ababad]" />
                Contacto
              </button>
            </nav>
            
            <div className="mt-auto pt-6 text-center text-[10px] text-slate-600 tracking-wider">
              ELEMENTS EMITTING LIGHT
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
