/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

interface ContactoProps {
  prefilledMessage?: string;
}

export default function Contacto({ prefilledMessage = "" }: ContactoProps) {
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormValues(prev => ({ ...prev, mensaje: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formValues.nombre.trim()) {
      setErrorMsg("Por favor, introduce tu nombre completo.");
      return;
    }
    
    if (!formValues.email.trim() || !formValues.email.includes("@")) {
      setErrorMsg("Por favor, introduce un correo de trabajo válido.");
      return;
    }

    if (!formValues.mensaje.trim()) {
      setErrorMsg("Por favor, detalla brevemente tu proyecto/mensaje.");
      return;
    }

    setLoading(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormValues({ nombre: "", email: "", mensaje: "" });
    setSubmitted(false);
  };

  return (
    <section 
      id="contacto"
      className="py-24 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Visual background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Information column */}
          <div>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-8 tracking-tighter leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              VAMOS A ILUMINAR <br /> TU PRÓXIMA IDEA.
            </motion.h2>
            
            <div className="space-y-8 mt-12 font-body">
              <motion.div 
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mb-1">
                    Email Directo
                  </p>
                  <a 
                    className="text-lg md:text-xl font-display text-on-surface hover:text-primary transition-all font-medium" 
                    href="mailto:eellive@eellive.com"
                  >
                    eellive@eellive.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mb-1">
                    Oficina / Nave Central
                  </p>
                  <p className="text-lg md:text-xl font-display text-on-surface font-medium leading-tight">
                    Calle de la Avena 24 nave 5, Leganés, Madrid
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-label text-[10px] text-on-surface-variant tracking-[0.2em] uppercase mb-1">
                    Atención Directa
                  </p>
                  <a 
                    className="text-lg md:text-xl font-display text-on-surface hover:text-primary transition-all font-medium"
                    href="tel:+34615363762"
                  >
                    +34 615 36 37 62
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form column */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="contact-form"
                >
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase block">
                      Nombre Completo
                    </label>
                    <input 
                      name="nombre"
                      value={formValues.nombre}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-highest border border-white/5 rounded-lg py-4 px-4 text-on-surface placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm" 
                      placeholder="Introduce tu nombre o de tu entidad..." 
                      type="text"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase block">
                      Email de Trabajo
                    </label>
                    <input 
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-highest border border-white/5 rounded-lg py-4 px-4 text-on-surface placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm" 
                      placeholder="nombre@empresa.com" 
                      type="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase block">
                      Mensaje / Proyecto
                    </label>
                    <textarea 
                      name="mensaje"
                      value={formValues.mensaje}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-highest border border-white/5  rounded-lg py-4 px-4 text-on-surface placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm" 
                      placeholder="Cuéntanos brevemente qué necesitas..." 
                      rows={4}
                    />
                  </div>

                  {errorMsg && (
                    <motion.p 
                      className="text-xs text-red-400 font-body font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errorMsg}
                    </motion.p>
                  )}

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-black font-label font-black text-sm tracking-wider py-4.5 rounded-lg hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
                    ) : (
                      "ENVIAR CONSULTA"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  key="success-container"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-black text-primary mb-3 uppercase tracking-tight">
                    ¡CONSULTA RECIBIDA!
                  </h3>
                  
                  <p className="text-on-surface-variant font-body text-sm max-w-sm mx-auto mb-8 leading-relaxed font-light">
                    Gracias por ponerte en contacto, <strong className="text-white font-medium">{formValues.nombre}</strong>. Nuestro equipo de ingeniería analizará los requerimientos técnicos y te responderá en menos de 24 horas.
                  </p>

                  <div className="bg-white/5 rounded-xl p-4 text-left max-w-sm mx-auto mb-8 space-y-2 border border-white/5">
                    <div className="text-[10px] text-primary tracking-widest uppercase font-label">Resumen enviado:</div>
                    <div className="text-xs text-on-surface-variant"><strong className="text-white">Tu Email:</strong> {formValues.email}</div>
                    <div className="text-xs text-on-surface-variant"><strong className="text-white">Destinatario:</strong> eellive@eellive.com</div>
                    <div className="text-xs text-on-surface-variant truncate"><strong className="text-white">Proyecto:</strong> {formValues.mensaje}</div>
                  </div>

                  <button 
                    onClick={resetForm}
                    className="text-xs font-label tracking-widest text-[#ababad] hover:text-white underline uppercase transition-all"
                  >
                    Atrás / Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
