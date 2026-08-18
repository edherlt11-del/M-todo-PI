/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12" id="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 p-0.5 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/wBsgFy3w/Chat-GPT-Image-Jun-2-2026-11-29-56-AM-removebg-preview.png" 
                alt="Logo Pequeño Inversionista" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block text-sm font-extrabold text-white leading-none">
                Pequeño Inversionista
              </span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                Educación Financiera Infantil
              </span>
            </div>
          </div>

          {/* Guarantee pill */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Garantía Incondicional de 7 Días</span>
          </div>

          {/* Scroll to top */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Volver arriba"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pequeño Inversionista. Todos los derechos reservados.</p>
          <p className="text-[11px]">Material digital con fines exclusivamente educativos familiares.</p>
        </div>

      </div>
    </footer>
  );
}
