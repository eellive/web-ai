/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu } from "lucide-react";

interface HeaderProps {
  onToggleDrawer: () => void;
  onOpenEstimator: () => void;
  onSelectAnchor: (anchor: string) => void;
}

export default function Header({ onToggleDrawer, onOpenEstimator, onSelectAnchor }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,240,255,0.06)] transition-all duration-300">
      <div className="flex justify-between items-center px-6 h-20 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleDrawer}
            className="text-primary hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-white/5 md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <button
            onClick={onToggleDrawer}
            className="text-primary hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-white/5 hidden md:flex items-center gap-2"
            aria-label="Abrir capacidades"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button 
            onClick={() => onSelectAnchor("#home")}
            className="text-2xl font-black tracking-widest text-primary uppercase font-headline hover:brightness-110 transition-all cursor-pointer bg-transparent border-0 p-0"
          >
            ELEMENTS
          </button>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => onSelectAnchor("#home")}
            className="text-primary font-bold font-headline tracking-tighter hover:text-white transition-colors text-[15px] cursor-pointer bg-transparent border-0 p-0"
          >
            HOME
          </button>
          <button
            onClick={() => onSelectAnchor("#capacidades")}
            className="text-on-surface-variant font-headline tracking-tighter hover:text-primary transition-colors text-[15px] cursor-pointer bg-transparent border-0 p-0"
          >
            WORK
          </button>
          <button
            onClick={() => onSelectAnchor("#ecosistemas")}
            className="text-on-surface-variant font-headline tracking-tighter hover:text-primary transition-colors text-[15px] cursor-pointer bg-transparent border-0 p-0"
          >
            GEAR
          </button>
          <button
            onClick={() => onSelectAnchor("#contacto")}
            className="text-on-surface-variant font-headline tracking-tighter hover:text-primary transition-colors text-[15px] cursor-pointer bg-transparent border-0 p-0"
          >
            CONTACT
          </button>
          <button 
            onClick={onOpenEstimator}
            className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background font-bold px-4 py-1.5 rounded-lg text-xs font-headline tracking-wider transition-all"
          >
            COTIZAR
          </button>
        </nav>

        <div className="flex items-center">
          <img
            alt="Elements Emitting Light Executive Producer Profile"
            className="w-10 h-10 rounded-full border-2 border-primary/30 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRukaXjVWr-a2_iZo6P9wl9xsuvp4GvS8t6w567YRpIzz67GDRpW4okD4uogCNH8oRv7cEZ4Ghfvwo19rmSX27-kq5EUZ1bjPY67DBd1k3xa2tQXkkInfiW4EHwrkHnCT2t5huqVd54OjQiDnO8es-CF6WZNsT8Ew57PAzi2UF-5DoeXuaDbkHuHLoGOGmfYpTzwRJCrGJ79-FyTq-9CkARyVfYMtaZbrfi6lrvi63gRv7hgILo-vEtEwE5UK3mQSv9LonbINbzG1c"
          />
        </div>
      </div>
    </header>
  );
}
