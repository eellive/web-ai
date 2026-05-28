/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sliders, CheckCircle, Award, Sparkles, Zap } from "lucide-react";

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimator: (summaryText: string) => void;
}

export default function EstimatorModal({ isOpen, onClose, onApplyEstimator }: EstimatorModalProps) {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState("Concierto");
  const [scale, setScale] = useState("Mediano");
  const [selectedGear, setSelectedGear] = useState<string[]>(["Iluminación", "Sonido"]);
  
  const handleToggleGear = (item: string) => {
    if (selectedGear.includes(item)) {
      setSelectedGear(prev => prev.filter(g => g !== item));
    } else {
      setSelectedGear(prev => [...prev, item]);
    }
  };

  const getEstimatedGearList = () => {
    const list: string[] = [];
    if (selectedGear.includes("Iluminación")) {
      if (scale === "Pequeño") list.push("8 Proyectores LED PAR", "Mesa control básica de luces");
      else if (scale === "Mediano") list.push("12 Moving Heads Martin", "Efectos Humo Hazer", "Consola Chamsys MQ80");
      else list.push("36 Moving Heads Robe Forte", "Estrobos GLP JDC1", "Consola grandMA3 full-size");
    }
    if (selectedGear.includes("Sonido")) {
      if (scale === "Pequeño") list.push("Sistema autoamplificado 2000W", "Mesa digital 16 canales");
      else if (scale === "Mediano") list.push("Sistemas Line-Array JBL VTX F12", "Mesa de directo DiGiCo S21");
      else list.push("Line-Array L-Acoustics K2 con subs SB28", "Consola DiGiCo SD12 con Dante");
    }
    if (selectedGear.includes("Proyecciones")) {
      if (scale === "Pequeño") list.push("Proyector corporativo 6000 lúmenes");
      else list.push("Proyector Láser Barco 22K lúmenes", "Servidor de vídeo Disguise");
    }
    if (selectedGear.includes("Pantallas LED")) {
      if (scale === "Pequeño") list.push("Pantalla LED P2.9 de 4x2.5 metros");
      else if (scale === "Mediano") list.push("Pantallas LED P2.5 de 8x4 metros", "Procesador Novastar 4K");
      else list.push("Pantalla LED P2.5 Gigante de 12x6 metros", "Sistemas de andamiaje y voladores");
    }
    return list;
  };

  const handleFinish = () => {
    const gearList = getEstimatedGearList();
    const formattedText = `Quisiera presupuestar un proyecto de tipo ${eventType} a escala ${scale}. Equipamiento solicitado: ${selectedGear.join(", ")}. Requisitos sugeridos: ${gearList.join(", ")}.`;
    onApplyEstimator(formattedText);
    onClose();
    // Scroll to contact form smoothly
    setTimeout(() => {
      const contactSec = document.getElementById("contacto");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
              className="relative bg-surface-container rounded-3xl w-full max-w-2xl border border-white/5 shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between font-body text-on-surface"
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-[#ababad] hover:text-white cursor-pointer p-2 bg-slate-950/80 hover:bg-slate-900 rounded-full transition-colors z-50 border border-white/5"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-primary font-label text-[10px] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-primary" />
                  Configurador de Ingeniería Audiovisual
                </span>
                <span className="text-xs text-on-surface-variant block mt-1 font-light">
                  Alinea los parámetros de tu espectáculo para recibir un cálculo automatizado de equipamiento.
                </span>
              </div>

              {/* Steps Progress Indicator */}
              <div className="flex items-center gap-2 my-6">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1 rounded transition-all duration-300 ${
                      s <= step ? "w-1/4 bg-primary" : "w-1/4 bg-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* Wizard Content */}
              <div className="min-h-[220px] flex flex-col justify-center">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg font-bold text-[#faf9fb] tracking-tight flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      1. SELECCIONA EL TIPO DE EVENTO
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Concierto", "Corporativo", "Lanzamiento de Producto", "Teatro / Escénico", "Feria / Congreso"].map((evt) => (
                        <button
                          key={evt}
                          onClick={() => setEventType(evt)}
                          className={`p-4 rounded-xl text-xs font-semibold font-display tracking-wider text-left transition-all cursor-pointer ${
                            eventType === evt 
                              ? "bg-primary text-black border-2 border-primary" 
                              : "bg-surface-container-highest text-on-surface-variant border-2 border-transparent hover:border-white/10"
                          }`}
                        >
                          {evt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg font-bold text-[#faf9fb] tracking-tight">
                      2. SELECCIONA LA ESCALA / AUDIENCIA
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { name: "Pequeño", desc: "<150 asistentes" },
                        { name: "Mediano", desc: "<800 asistentes" },
                        { name: "Grande", desc: "Masivo >1500" }
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => setScale(item.name)}
                          className={`p-4 rounded-xl text-left transition-all flex flex-col justify-between h-24 border-2 cursor-pointer ${
                            scale === item.name 
                              ? "bg-primary text-black border-primary" 
                              : "bg-surface-container-highest text-on-surface-variant border-transparent hover:border-white/10"
                          }`}
                        >
                          <span className="text-xs font-bold font-display uppercase tracking-wider">{item.name}</span>
                          <span className="text-[10px] font-light leading-none">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg font-bold text-[#faf9fb] tracking-tight">
                      3. SELECCIONA EL EQUIPAMIENTO EXIGIDO
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Iluminación", "Sonido", "Proyecciones", "Pantallas LED"].map((item) => {
                        const isChosen = selectedGear.includes(item);
                        return (
                          <button
                            key={item}
                            onClick={() => handleToggleGear(item)}
                            className={`p-4 rounded-xl text-left transition-all flex items-center justify-between border-2 cursor-pointer ${
                              isChosen 
                                ? "bg-primary/20 text-white border-primary" 
                                : "bg-surface-container-highest text-on-surface-variant border-transparent hover:border-white/10"
                            }`}
                          >
                            <span className="text-xs font-bold font-display uppercase tracking-widest">{item}</span>
                            <span className="material-symbols-outlined text-lg">
                              {isChosen ? "check_box" : "check_box_outline_blank"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display text-lg font-bold text-primary tracking-tight flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      ESQUEMA TÉCNICO COMPILADO
                    </h3>
                    
                    <div className="bg-slate-950 rounded-xl p-4 border border-white/5 space-y-3">
                      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
                        <span className="text-[10px] bg-primary/10 text-primary uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                          {eventType}
                        </span>
                        <span className="text-[10px] bg-secondary/10 text-secondary uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                          Escala: {scale}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-[9px] text-on-surface-variant font-label tracking-widest uppercase">
                          Equipos Sugeridos por Ingeniería:
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 font-body">
                          {getEstimatedGearList().map((gear, i) => (
                            <div key={i} className="text-xs font-light text-[#ababad] flex items-center gap-1.5">
                              <span className="text-primary font-black select-none">•</span>
                              <span className="truncate">{gear}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex bg-secondary/5 rounded-lg border border-secondary/10 p-3 items-start gap-2">
                      <Award className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <p className="text-[10px] text-[#faf9fb]/80 font-light leading-relaxed">
                        Nivel de fidelidad acústica y lumínica Premium garantizado por el sistema tecnológico de Elements Madrid.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <button
                  onClick={() => step > 1 && setStep(prev => prev - 1)}
                  className={`text-xs font-bold font-headline uppercase tracking-wider text-on-surface-variant hover:text-white transition-colors cursor-pointer ${
                    step === 1 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  ATRÁS
                </button>

                <div className="text-[10px] text-slate-500 font-label tracking-widest uppercase">
                  Paso {step} de 4
                </div>

                {step < 4 ? (
                  <button
                    onClick={() => setStep(prev => prev + 1)}
                    className="bg-primary text-black font-bold px-6 py-2.5 rounded-lg text-xs font-headline uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    CONTINUAR
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="bg-secondary text-black font-black px-6 py-2.5 rounded-lg text-xs font-headline uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-4 h-4" />
                    APLICAR EN CONTACTO
                  </button>
                )}
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
