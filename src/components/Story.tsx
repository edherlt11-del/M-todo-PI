/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  XOctagon, GraduationCap, ArrowDownRight, ShieldCheck, 
  HelpCircle, AlertTriangle, Lightbulb
} from 'lucide-react';
import { Badge, Card, Button } from './ui/design-system';

export default function Story() {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('oferta-checkout');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-950 py-16 text-slate-100 lg:py-24" id="story-pain-points">
      <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Banner - Simplified/Removed for cleaner layout */}
        <div className="text-center mb-6">
          <Badge 
            variant="indigo" 
            icon={GraduationCap} 
            className="py-1.5 px-3.5"
          >
            LA CRUDA REALIDAD
          </Badge>
        </div>

        {/* Story Text layout */}
        <div className="mt-6 space-y-6 sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          
          {/* List of contrasts using token Card */}
          <Card variant="dark" className="p-6 md:p-10 space-y-8 ring-1 ring-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" id="story-grid-contrasts">
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                Mientras tu hijo aprende <span className="text-indigo-400 font-extrabold underline decoration-indigo-500/80 decoration-2 underline-offset-6">matemáticas</span>, <span className="text-blue-400 font-extrabold underline decoration-blue-500/80 decoration-2 underline-offset-6">historia</span> y <span className="text-amber-400 font-extrabold underline decoration-amber-500/80 decoration-2 underline-offset-6">geografía</span>...
              </p>
              <h3 className="mt-6 text-2xl sm:text-3xl font-black text-rose-500 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2">
                <span className="text-rose-500 animate-pulse">⚠️</span> Nadie le enseña:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-900/85">
              <div className="flex items-center gap-3 text-base font-black text-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 font-bold select-none text-base">
                  ❌
                </span>
                <span>Cómo ahorrar</span>
              </div>
              <div className="flex items-center gap-3 text-base font-black text-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 font-bold select-none text-base">
                  ❌
                </span>
                <span>Cómo evitar deudas</span>
              </div>
              <div className="flex items-center gap-3 text-base font-black text-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 font-bold select-none text-base">
                  ❌
                </span>
                <span>Cómo invertir</span>
              </div>
              <div className="flex items-center gap-3 text-base font-black text-slate-200">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 font-bold select-none text-base">
                  ❌
                </span>
                <span>Cómo generar ingresos</span>
              </div>
              <div className="flex items-center gap-3 text-base font-black text-slate-200 sm:col-span-2 sm:justify-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 font-bold select-none text-base">
                  ❌
                </span>
                <span>Cómo administrar dinero</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/60 text-center">
              <p className="text-base sm:text-xl font-extrabold text-white leading-normal">
                Y luego muchos adultos llegan a la <span className="text-amber-400 font-black text-lg sm:text-2xl underline decoration-amber-400 decoration-wavy underline-offset-4">vida laboral</span> sin saber administrar correctamente su dinero.
              </p>
            </div>
          </Card>

          <p className="border-l-4 border-rose-500 pl-4 py-1.5 text-base sm:text-lg text-slate-200">
            <span className="text-rose-400 font-black text-lg sm:text-xl block mb-1">Si no le enseñas tú, lo aprenderá con deudas.</span>
            Los niños no heredan tu dinero, heredan tus hábitos de gasto y repiten de adultos tu mismo estrés financiero.
          </p>

          <p className="text-slate-300 text-sm sm:text-base">
            La cruda realidad: <strong className="text-rose-400 font-extrabold">El 90% de las quiebras y crisis de dinero</strong> a los 40 años vienen de hábitos inconscientes formados antes de los 14.
          </p>

          {/* Solution pitch using token Card */}
          <Card variant="dark" className="mt-8 border border-emerald-800/30 bg-gradient-to-tr from-slate-950 to-emerald-950/20 p-6 md:p-8" id="story-solution">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow">
                <Lightbulb className="h-5 w-5 font-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                  La Solución: Pequeño Inversionista
                </h4>
                <p className="text-xs font-bold text-emerald-400">
                  Habilidades prácticas listas para la vida moderna
                </p>
              </div>
            </div>
            
            <p className="mt-4 text-emerald-400/90 text-sm sm:text-base font-black leading-snug">
              Lo que no aprende en años de escuela puede empezar a aprenderlo en casa esta misma semana.
            </p>
            
            <p className="mt-2.5 text-slate-300 text-sm leading-relaxed font-medium">
              El único sistema interactivo paso a paso que entrena a tus hijos en el ahorro inteligente e inversión real mientras juegan en familia 15 minutos al día.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-black text-slate-200 border-t border-slate-900 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">⚡</span> Sin matemáticas complejas
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">📈</span> Simuladores interactivos
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">🛠️</span> Dinámicas imprimibles
              </div>
            </div>
            
            <p className="mt-5 font-bold text-slate-400 text-xs text-center border-t border-slate-900/60 pt-4">
              "El mejor momento para entender las reglas del dinero es hoy, cuando todo su futuro está por construirse."
            </p>
          </Card>

          {/* Quick interactive trigger using token Button */}
          <div className="pt-8 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToPricing}
              className="px-6 py-4 rounded-xl shadow-lg hover:shadow-emerald-950 text-xs sm:text-sm"
            >
              Comenzar a Educar a mi Hijo Hoy
            </Button>
            <span className="block text-xs text-slate-500 mt-2 font-medium">
              Únete a las familias rompiendo el ciclo de la mala educación tradicional.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
