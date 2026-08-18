/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Gamepad2, 
  Star, 
  Zap, 
  Infinity, 
  Video, 
  Headphones, 
  FileText, 
  CheckCircle2,
  Lock,
  Unlock,
  AlertTriangle,
  Flame,
  ChevronDown
} from 'lucide-react';
import { Badge, Button } from './ui/design-system';

type AgeGroup = '3-5' | '5-12' | '12-16';

interface AgeLevelData {
  id: AgeGroup;
  label: string;
  levelBadge: string;
  levelName: string;
  focusText: string;
  icon: string;
  highlights: string[];
}

const AGE_LEVELS: Record<AgeGroup, AgeLevelData> = {
  '3-5': {
    id: '3-5',
    label: '3 a 5 años',
    levelBadge: 'Nivel 1 (3 a 5 años)',
    levelName: 'Primeros Pasos y Valor del Dinero',
    focusText: 'Comprenderá de dónde viene el dinero, para qué sirve y el valor del ahorro mediante cuentos ilustrados y juegos prácticos.',
    icon: '👶',
    highlights: ['Cuentos visuales', 'Ahorro en alcancía', 'Juegos familiares']
  },
  '5-12': {
    id: '5-12',
    label: '5 a 12 años',
    levelBadge: 'Nivel 2 (5 a 12 años)',
    levelName: 'Ahorro Inteligente y Metas',
    focusText: 'Aprenderá a fijar metas de ahorro (como su bicicleta o juguetes), administrar su asignación y diferenciar entre necesidades e impulsos.',
    icon: '🧒',
    highlights: ['Regla de las 3 alcancías', 'Simulador de ahorro', 'Control de impulsos']
  },
  '12-16': {
    id: '12-16',
    label: '12 a 16+ años',
    levelBadge: 'Nivel 3 (12 a 16+ años)',
    levelName: 'Decisiones Financieras y Futuro',
    focusText: 'Descubrirá cómo funciona el presupuesto, la planificación a largo plazo, la inversión segura y cómo evitar trampas de deudas.',
    icon: '🧑',
    highlights: ['Presupuesto personal', 'Simulador de inversiones', 'Mentalidad financiera']
  }
};

export default function Hero() {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('5-12');
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const currentLevel = AGE_LEVELS[selectedAge];
  const revealedContentRef = useRef<HTMLDivElement | null>(null);

  const handleActivate = () => {
    setIsActivated(true);
    setTimeout(() => {
      if (revealedContentRef.current) {
        revealedContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-900" id="hero-inicio">
      
      {/* Ambient background glows & mesh lights */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Pattern Interrupt Tagline Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-950/80 border border-rose-800/80 px-4 py-1.5 shadow-lg mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xs font-black tracking-widest text-rose-300 uppercase flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-rose-400" />
              LA DECISIÓN MÁS CRUCIAL PARA SU FUTURO
            </span>
          </div>

          {/* Stark High-Contrast Pattern Interrupt Headline */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.12]">
            ¿Tu hijo será un{' '}
            <span className="text-rose-400 underline decoration-rose-500/70 decoration-wavy underline-offset-8">
              esclavo de las deudas
            </span>{' '}
            o un{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              adulto libre
            </span>
            ?
          </h1>

          {/* Provocative Subtitle Hook */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            El <strong className="text-white font-bold">89% de los adultos</strong> vive endeudado porque nadie les enseñó finanzas a tiempo. Descubre el método práctico para transformar su mentalidad jugando en solo 7 días.
          </p>

          {/* INTERACTIVE GLOWING ACTIVATION BUTTON */}
          <div className="mt-8 relative w-full sm:w-auto flex flex-col items-center">
            
            {/* Glowing background ring pulse */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500 opacity-75 blur-md animate-pulse"></div>

            <button
              type="button"
              onClick={handleActivate}
              className={`relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-base sm:text-lg transition-all duration-300 cursor-pointer shadow-2xl ${
                isActivated
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 ring-4 ring-emerald-400/40 scale-100'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 hover:scale-105 active:scale-95'
              }`}
            >
              {isActivated ? (
                <Unlock className="h-6 w-6 text-slate-950 animate-bounce" />
              ) : (
                <Lock className="h-6 w-6 text-slate-950 animate-pulse" />
              )}
              <span>
                {isActivated 
                  ? '✨ ¡Experiencia Desbloqueada! Ver Programa Abajo' 
                  : 'Haz clic para medir su futuro en 10 segundos'}
              </span>
              <ArrowRight className={`h-5 w-5 transition-transform ${isActivated ? 'rotate-90' : ''}`} />
            </button>

            {/* Micro-copy below trigger */}
            <div className="mt-3.5 flex items-center gap-2 text-xs font-bold text-slate-400">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              <span>Activación interactiva inmediata • Sin costo</span>
            </div>
          </div>

          {/* DYNAMIC REVEALED CONTENT (Visual Transition / Unlock Effect) */}
          <div 
            ref={revealedContentRef}
            className={`w-full transition-all duration-700 ease-out mt-12 ${
              isActivated 
                ? 'opacity-100 translate-y-0 scale-100 max-h-[4000px] animate-unlock-reveal' 
                : 'opacity-0 max-h-0 overflow-hidden pointer-events-none'
            }`}
          >
            
            {/* Unlocked banner confirmation */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-black shadow-lg">
              <Sparkles className="h-4 w-4 text-emerald-400 animate-spin" />
              <span>SISTEMA COMPLETO DESBLOQUEADO: Mira cómo funciona para cada edad</span>
            </div>

            {/* Interactive Age Tab Selector */}
            <div className="w-full max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-sm">
                {(Object.keys(AGE_LEVELS) as AgeGroup[]).map((ageKey) => {
                  const item = AGE_LEVELS[ageKey];
                  const isActive = selectedAge === ageKey;
                  return (
                    <button
                      key={ageKey}
                      type="button"
                      onClick={() => setSelectedAge(ageKey)}
                      className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20 scale-[1.02]'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Focus Box for Selected Age Group */}
              <div className="mt-4 px-5 py-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950/90 border border-emerald-700/60 px-2.5 py-0.5 rounded-md w-fit">
                    <Sparkles className="h-3 w-3 text-emerald-400" />
                    {currentLevel.levelBadge}: {currentLevel.levelName}
                  </span>
                  <span className="text-[11px] font-bold text-sky-400">
                    Enfoque personalizado
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {currentLevel.focusText}
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex flex-wrap gap-2 text-[11px] font-bold text-slate-400">
                  {currentLevel.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 text-slate-200">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Player Box */}
            <div className="mt-8 w-full max-w-2xl mx-auto">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border-2 border-slate-800">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/eZus6KK1HRk?rel=0"
                  title="Presentación Pequeño Inversionista"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>

            {/* Hero Main Action CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="xl"
                icon={ArrowRight}
                iconPosition="right"
                glow
                onClick={handleGoToCheckout}
                className="w-full sm:w-auto font-black px-8 py-4.5 text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl shadow-xl transition-all"
              >
                Garantizar Acceso Ahora
              </Button>
            </div>

            {/* Guarantees micro-copy: 3 badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900 text-sky-400 px-3.5 py-1.5 rounded-full border border-slate-800">
                <Zap className="h-3.5 w-3.5 text-sky-400" /> Acceso inmediato
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 text-emerald-400 px-3.5 py-1.5 rounded-full border border-slate-800">
                <Infinity className="h-3.5 w-3.5 text-emerald-400" /> Acceso de por vida
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 text-amber-400 px-3.5 py-1.5 rounded-full border border-slate-800">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" /> Garantía de 7 días
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

                {/* Floating pill badge on top right */}
                <div className="absolute -top-3 right-4 sm:right-12 z-20 bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full shadow-md border border-slate-900 flex items-center gap-1 uppercase tracking-wider">
                  <Sparkles className="h-3 w-3 text-slate-900" />
                  <span>Kit Digital</span>
                </div>
              </div>

              {/* Quick feature summary pills */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 hover:border-sky-500/40 hover:bg-slate-900 transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-950 text-sky-400 border border-sky-800/60">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase">Videos Explicativos</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Lecciones cortas y visuales</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 hover:border-emerald-500/40 hover:bg-slate-900 transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase">Guía para Padres</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Instructivos paso a paso</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 hover:border-purple-500/40 hover:bg-slate-900 transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-950 text-purple-400 border border-purple-800/60">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase">Podcast / Audios</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Para escuchar en el auto</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2.5 rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 hover:border-amber-500/40 hover:bg-slate-900 transition-all">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-950 text-amber-400 border border-amber-800/60">
                    <Gamepad2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase">Simulador & Retos</h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">Fichas prácticas</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
