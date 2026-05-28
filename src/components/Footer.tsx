/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Linkedin } from "lucide-react";

interface FooterProps {
  onSelectPage?: (type: "aviso-legal" | "privacidad" | "cookies") => void;
}

export default function Footer({ onSelectPage }: FooterProps) {
  return (
    <footer className="bg-slate-950 w-full pt-12 pb-32 md:pb-12 px-6 flex flex-col gap-8 text-center border-t border-white/5 font-body">
      <div className="flex flex-col items-center gap-6">
        <div className="text-primary font-bold tracking-tighter text-2xl font-display uppercase">
          ELEMENTS EMITTING LIGHT
        </div>
        
        {/* Social channels using strict lucide-react icons */}
        <div className="flex gap-8">
          <a 
            aria-label="Instagram de Elements Emitting Light" 
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2 bg-white/5 hover:bg-white/10 rounded-full" 
            href="https://www.instagram.com/eelliveoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
          </a>
          
          <a 
            aria-label="TikTok de Elements Emitting Light" 
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2 bg-white/5 hover:bg-white/10 rounded-full" 
            href="https://www.tiktok.com/@elementsemitinglightlive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          
          <a 
            aria-label="Facebook de Elements Emitting Light" 
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2 bg-white/5 hover:bg-white/10 rounded-full" 
            href="https://www.facebook.com/profile.php?id=61556286000470&locale=es_ES"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5" />
          </a>
          
          <a 
            aria-label="LinkedIn de Elements Emitting Light" 
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-2 bg-white/5 hover:bg-white/10 rounded-full" 
            href="#"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-xs tracking-tight text-on-surface-variant font-light">
        <button 
          onClick={() => onSelectPage?.("aviso-legal")} 
          className="hover:text-primary uppercase transition-colors cursor-pointer text-xs font-light tracking-tight bg-transparent border-0 p-0"
        >
          AVISO LEGAL
        </button>
        <button 
          onClick={() => onSelectPage?.("privacidad")} 
          className="hover:text-primary uppercase transition-colors cursor-pointer text-xs font-light tracking-tight bg-transparent border-0 p-0"
        >
          PRIVACIDAD
        </button>
        <button 
          onClick={() => onSelectPage?.("cookies")} 
          className="hover:text-primary uppercase transition-colors cursor-pointer text-xs font-light tracking-tight bg-transparent border-0 p-0"
        >
          COOKIES
        </button>
      </div>

      <p className="text-[10px] text-slate-600 tracking-widest uppercase font-light">
        © 2024 ELEMENTS EMITTING LIGHT - INGENIERÍA AUDIOVISUAL MADRID
      </p>
    </footer>
  );
}
