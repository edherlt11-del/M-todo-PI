/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import { Badge, Button } from './ui/design-system';

export default function Header() {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo block */}
        <div className="flex items-center gap-3" id="header-logo-container">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-amber-400 p-0.5 shadow-sm flex items-center justify-center">
            <div className="h-full w-full bg-white rounded-[10px] flex items-center justify-center p-0.5">
              <img 
                src="https://i.postimg.cc/wBsgFy3w/Chat-GPT-Image-Jun-2-2026-11-29-56-AM-removebg-preview.png" 
                alt="Logo Pequeño Inversionista" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <span className="block text-base font-extrabold tracking-tight text-slate-900 leading-none">
              Pequeño
            </span>
            <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase leading-none">
              Inversionista
            </span>
          </div>
        </div>

        {/* Social proof tag & CTA button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-emerald-50 border border-emerald-100/80 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800">
            <Users className="h-3.5 w-3.5 text-emerald-600" />
            <span>+500 Familias Satisfechas</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={handleGoToCheckout}
            className="font-extrabold text-xs px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm"
          >
            Obtener Acceso Ahora
          </Button>
        </div>

      </div>
    </header>
  );
}

