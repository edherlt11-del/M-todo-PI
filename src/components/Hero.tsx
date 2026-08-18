/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, BookOpen, Gamepad2, Star, Zap, Infinity, Video, Headphones, FileText } from 'lucide-react';
import { Badge, Button } from './ui/design-system';

export default function Hero() {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24" id="hero-inicio">
      {/* Subtle ambient gradient blurs */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl"></div>
      <div className="absolute inset-0 bg-pattern opacity-60 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 via-emerald-50 to-amber-50 px-4 py-1.5 border border-slate-200/80 shadow-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-black tracking-widest text-slate-800 uppercase">
              PARA NIÑOS DE 3 A 16+ AÑOS
            </span>
          </div>

          {/* Headline Title */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.15]">
            La educación financiera que la escuela <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">nunca le enseñará a tu hijo</span>
          </h1>

          {/* Subtitle - Short, punchy, persuasive */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            El sistema práctico para que tu hijo aprenda a <strong className="text-slate-900 font-bold">ahorrar, planificar e invertir jugando</strong>. Sin clases aburridas ni teorías complejas.
          </p>

          {/* Video Player Box */}
          <div className="mt-8 w-full max-w-2xl mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 shadow-2xl border-2 border-slate-200/80">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eZus6KK1HRk?rel=0"
                title="Presentación Pequeño Inversionista"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          {/* Hero CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="xl"
              icon={ArrowRight}
              iconPosition="right"
              glow
              onClick={handleGoToCheckout}
              className="w-full sm:w-auto font-black px-8 py-4.5 text-base bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-xl transition-all"
            >
              Garantizar Acceso Ahora
            </Button>
          </div>

          {/* Guarantees micro-copy: 3 badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-600">
            <span className="flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-100">
              <Zap className="h-3.5 w-3.5 text-sky-600" /> Acceso inmediato
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
              <Infinity className="h-3.5 w-3.5 text-emerald-600" /> Acceso de por vida
            </span>
            <span className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-100">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600" /> Garantía de 7 días
            </span>
          </div>

          {/* Large Hero Mockup Display */}
          <div className="mt-12 relative w-full max-w-4xl mx-auto" id="hero-media-container">
            <div className="relative flex justify-center">
              <img
                src="https://i.postimg.cc/3wK20Rry/Chat-GPT-Image-27-jul-2026-15-37-14.jpg"
                alt="Pequeño Inversionista Product Kit Mockup"
                className="w-full max-w-[680px] mx-auto h-auto object-contain rounded-2xl drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />

              {/* Floating pill badge on top right - compact and non-obtrusive */}
              <div className="absolute -top-3 right-4 sm:right-12 z-20 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full shadow-md border border-white flex items-center gap-1 uppercase tracking-wider">
                <Sparkles className="h-3 w-3 text-slate-900" />
                <span>Kit Digital</span>
              </div>
            </div>

            {/* Quick feature summary pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 hover:bg-white hover:border-sky-200 hover:shadow-sm transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">Videos Explicativos</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Lecciones cortas y visuales</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 hover:bg-white hover:border-emerald-200 hover:shadow-sm transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">Guía para Padres</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Instructivos paso a paso</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 hover:bg-white hover:border-purple-200 hover:shadow-sm transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">Podcast / Audios</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Para escuchar en el auto o casa</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 hover:bg-white hover:border-amber-200 hover:shadow-sm transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Gamepad2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase">Simulador e Imprimibles</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Retos y fichas prácticas</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

