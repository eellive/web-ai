/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, FileText, Cookie, Scale, Globe, Mail } from "lucide-react";

export type LegalPageType = "aviso-legal" | "privacidad" | "cookies";

interface LegalPagesProps {
  type: LegalPageType;
  onBack: () => void;
}

export default function LegalPages({ type, onBack }: LegalPagesProps) {
  // Ensure the body scroll position goes to top when mounting
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageTitle = {
    "aviso-legal": "AVISO LEGAL Y CONDICIONES DE USO",
    privacidad: "POLÍTICA DE PRIVACIDAD (RGPD)",
    cookies: "POLÍTICA DE COOKIES",
  }[type];

  // Helper component for styled sections
  const Section = ({ title, num, children }: { title: string; num: string; children: React.ReactNode }) => (
    <div className="border-b border-white/5 pb-8 mb-8 last:border-0 last:pb-0 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">
          {num}
        </span>
        <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface tracking-wide uppercase">
          {title}
        </h3>
      </div>
      <div className="font-body text-on-surface-variant text-sm leading-relaxed space-y-4 font-light pl-0 sm:pl-10">
        {children}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-background relative overflow-hidden pt-28 pb-20 px-4 sm:px-6"
    >
      {/* Background neon glow effects */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back navigation */}
        <button
          onClick={() => {
            onBack();
            scrollToTop();
          }}
          className="group inline-flex items-center gap-2 text-on-surface-variant hover:text-primary mb-12 transition-all duration-300 font-headline text-xs tracking-widest uppercase cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Inicio
        </button>

        {/* Header container */}
        <div className="mb-14 border-b border-primary/20 pb-8">
          <div className="flex items-center gap-3 text-primary mb-3">
            {type === "aviso-legal" && <Scale className="w-6 h-6" />}
            {type === "privacidad" && <Shield className="w-6 h-6" />}
            {type === "cookies" && <Cookie className="w-6 h-6" />}
            <span className="font-headline text-xs tracking-widest font-semibold uppercase">
              ELEMENTS EMITTING LIGHT
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tighter leading-none uppercase">
            {pageTitle}
          </h1>
          <p className="font-body text-xs text-primary/60 mt-4 tracking-normal">
            Última actualización: 28 de Mayo de 2026
          </p>
        </div>

        {/* Content Box with glass effect */}
        <div className="bg-surface-container/40 border border-white/5 p-6 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl relative overflow-hidden">
          {type === "aviso-legal" && (
            <div>
              <Section num="01" title="INFORMACIÓN IDENTIFICATIVA">
                <p>
                  En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos informativos del titular de este sitio web:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Denominación Social:</strong> ELEMENTS EMITTING LIGHT, SL (en adelante, "EEL Live")</li>
                  <li><strong>Domicilio Social:</strong> Madrid, España</li>
                  <li><strong>Actividad principal:</strong> Ingeniería audiovisual, alquiler de equipamiento técnico de iluminación, sonido y vídeo para eventos profesionales y espectáculos.</li>
                  <li><strong>Email de contacto:</strong> <a href="mailto:eellive@eellive.com" className="text-primary hover:underline">eellive@eellive.com</a></li>
                </ul>
              </Section>

              <Section num="02" title="USUARIOS Y CONDICIONES DE USO">
                <p>
                  El acceso y/o uso de este portal de EEL Live atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                </p>
                <p>
                  El portal proporciona acceso a informaciones, servicios, herramientas de estimación de presupuestos (como el configurador técnico de proyectos) o datos pertenecientes a EEL Live. El USUARIO asume la responsabilidad del uso del portal de manera legal, conforme a la buena fe y a las normativas de orden público.
                </p>
              </Section>

              <Section num="03" title="PROPIEDAD INTELECTUAL E INDUSTRIAL">
                <p>
                  EEL Live por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes de montajes y cabezas móviles, vídeo, estructuras, marca, combinaciones de colores, logotipos, archivos de ingeniería y software como la calculadora técnica, marcas o logotipos, etc.), titularidad de EEL Live o bien de sus licenciantes.
                </p>
                <p>
                  Todos los derechos reservados. Cualquier uso no autorizado previamente por EEL Live, será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta web con fines comerciales.
                </p>
              </Section>

              <Section num="04" title="EXCLUSIÓN DE RESPONSABILIDAD">
                <p>
                  EEL Live no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar a título enunciativo: errores u omisiones en los contenidos técnicos, falta de disponibilidad del portal por mantenimientos, o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas de seguridad tecnológicas necesarias para evitarlo.
                </p>
                <p>
                  Las estimaciones realizadas en la calculadora o configurador técnico son de carácter puramente informativo, orientativo y no contractual. Todo proyecto requiere un análisis de viabilidad técnica y presupuesto oficial final emitido directamente por nuestros ingenieros audiovisuales.
                </p>
              </Section>

              <Section num="05" title="MODIFICACIONES">
                <p>
                  EEL Live se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
                </p>
              </Section>
            </div>
          )}

          {type === "privacidad" && (
            <div>
              <Section num="01" title="RESPONSABLE DEL TRATAMIENTO">
                <p>
                  A efectos de lo dispuesto en el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, los datos de contacto del responsable son:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Identidad:</strong> ELEMENTS EMITTING LIGHT, SL (EEL Live)</li>
                  <li><strong>Contacto:</strong> <a href="mailto:eellive@eellive.com" className="text-primary hover:underline">eellive@eellive.com</a></li>
                  <li><strong>Sede técnica de operaciones:</strong> Madrid, España</li>
                </ul>
              </Section>

              <Section num="02" title="DATOS QUE RECOPILAMOS Y FINALIDAD">
                <p>
                  Únicamente solicitamos los datos estrictamente necesarios para cumplir con las solicitudes de contacto y configuración de proyectos que el usuario realiza voluntariamente:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Datos de contacto (Nombre, Email):</strong> Recopilados a través del formulario de contacto y estimador con el fin de poder responder a consultas profesionales de alquiler de equipamiento, asesoría de ingeniería y presupuestos de eventos.</li>
                  <li><strong>Información técnica de proyectos:</strong> Especificaciones técnicas aportadas por el configurador/estimador o por el formulario para poder realizar el modelado y la cotización personalizada del evento.</li>
                </ul>
                <p>
                  Bajo ninguna circunstancia sus datos serán utilizados para decisiones automatizadas u de elaboración de perfiles comerciales intrusivos, ni serán vendidos a terceros.
                </p>
              </Section>

              <Section num="03" title="LEGITIMACIÓN Y CONSERVACIÓN">
                <p>
                  La base legal para el tratamiento de sus datos es el <strong>consentimiento expreso</strong> otorgado por el USUARIO al rellenar nuestros formularios interactivos y enviar su solicitud de información.
                </p>
                <p>
                  Los datos personales proporcionados se conservarán durante el tiempo que sea estrictamente necesario para atender su consulta de ingeniería audiovisual o bien mientras dure la relación comercial y no se solicite su supresión por parte del interesado, respetando siempre los plazos legales aplicables.
                </p>
              </Section>

              <Section num="04" title="DERECHOS DEL USUARIO">
                <p>
                  Como titular de los datos, tiene derecho a obtener confirmación sobre si en EEL Live estamos tratando sus datos personales de manera correcta. Dispone de los siguientes derechos:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Derecho a solicitar el <strong>acceso</strong> a sus datos personales.</li>
                  <li>Derecho a solicitar su <strong>rectificación</strong> si son inexactos, o su <strong>supresión</strong>.</li>
                  <li>Derecho a solicitar la <strong>limitación</strong> de su tratamiento.</li>
                  <li>Derecho a la <strong>portabilidad</strong> de los datos.</li>
                  <li>Derecho a <strong>oponerse</strong> al tratamiento.</li>
                </ul>
                <p>
                  Puede ejercer sus derechos enviando una comunicación escrita dirigida al correo electrónico: <a href="mailto:eellive@eellive.com" className="text-primary hover:underline">eellive@eellive.com</a>, acompañando una copia de su DNI o documento equivalente para verificar su identidad.
                </p>
              </Section>
            </div>
          )}

          {type === "cookies" && (
            <div>
              <Section num="01" title="¿QUÉ ES UNA COOKIE?">
                <p>
                  Una cookie es un pequeño fichero de texto que se descarga y almacena en el navegador de su ordenador, tablet o dispositivo móvil al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, recordar información técnica del usuario, asegurar la navegación adecuada y agilizar sus cargas.
                </p>
              </Section>

              <Section num="02" title="COOKIES QUE UTILIZA ESTA WEB">
                <p>
                  Este portal web de EEL Live cumple un criterio estricto de minimalismo y privacidad. Solamente hacemos uso de:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookies técnicas / funcionales de sesión:</strong> Imprescindibles para almacenar localmente el formulario, la calculadora del estimador y el estado de la navegación de manera rápida sin almacenar sus datos en el servidor de forma intrusiva.</li>
                </ul>
                <p>
                  <strong>No utilizamos cookies de seguimiento publicitario (tracking de terceros) ni sistemas de recogida de datos agregados para fines de monetización publicitaria.</strong>
                </p>
              </Section>

              <Section num="03" title="ADMINISTRACIÓN Y DESACTIVACIÓN EN SU NAVEGADOR">
                <p>
                  Como usuario, puede restringir, bloquear o borrar las cookies de cualquier sitio web en cualquier momento. El procedimiento varía según el navegador que utilice. Puede encontrar información útil en los siguientes accesos:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Google Chrome:</strong> <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" href="https://support.google.com/chrome/answer/95647">Soporte de Chrome</a></li>
                  <li><strong>Mozilla Firefox:</strong> <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias">Soporte de Firefox</a></li>
                  <li><strong>Apple Safari:</strong> <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Soporte de Safari</a></li>
                  <li><strong>Microsoft Edge:</strong> <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-143d-7c16-ede5947fc64d">Soporte de Edge</a></li>
                </ul>
              </Section>
            </div>
          )}
        </div>

        {/* Action footer */}
        <div className="mt-12 text-center text-xs text-on-surface-variant/80">
          <p className="mb-4">
            Para cualquier consulta sobre estos términos, por favor contáctanos directamente.
          </p>
          <a
            href="mailto:eellive@eellive.com"
            className="inline-flex items-center gap-2 text-primary hover:text-white bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-300 font-headline font-semibold tracking-wider text-[11px] uppercase cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Escríbenos a eellive@eellive.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
