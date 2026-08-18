/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Sparkles, Video, Headphones, BookOpen, Target, Printer, Globe, Check
} from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function Aprende() {
  const levels = [
    {
      levelBadge: "NIVEL 1 (3 A 5+ AÑOS)",
      title: "Primeros Pasos y Valor del Dinero",
      desc: "Comprenderá de dónde viene el dinero, para qué sirve y el valor del ahorro mediante juegos e historias simples.",
      bgIcon: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      levelBadge: "NIVEL 2 (5 A 12+ AÑOS)",
      title: "Ahorro Inteligente y Metas",
      desc: "Aprenderá a fijar metas de ahorro, administrar su asignación y diferenciar entre necesidades e impulsos.",
      bgIcon: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      levelBadge: "NIVEL 3 (12 A 16+ AÑOS)",
      title: "Decisiones Financieras y Futuro",
      desc: "Descubrirá cómo funciona el presupuesto, la planificación a largo plazo y la importancia de evitar deudas.",
      bgIcon: "bg-amber-100 text-amber-800 border-amber-200"
    }
  ];

  const levelFormatFeatures = [
    { icon: Video, label: "Videos Explicativos", sub: "Cortos y visuales para niños" },
    { icon: Headphones, label: "Versión Audio / Podcast", sub: "Para escuchar en el auto o antes de dormir" },
    { icon: BookOpen, label: "Guía Práctica en Ebook", sub: "Formato digital descargable" },
    { icon: Target, label: "Actividades en Casa", sub: "Dinámicas familiares listas para usar" },
    { icon: Printer, label: "Materiales Imprimibles", sub: "Plantillas e instructivos de retos" }
  ];

  return (
    <section className="bg-white py-16 lg:py-24" id="que-incluye">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="ESTRUCTURA DEL PROGRAMA"
          tagVariant="emerald"
          title="¿Qué incluye el programa?"
          subtitle="Organizado estratégicamente en tres niveles adaptados a la edad de tu hijo para un aprendizaje progresivo y natural."
        />

        {/* 3 Age Levels Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {levels.map((lvl, idx) => (
            <Card 
              key={idx}
              variant="interactive"
              className="p-8 bg-slate-50/60 border border-slate-200/80 rounded-3xl flex flex-col justify-between hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className={`inline-block text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-full border mb-4 ${lvl.bgIcon}`}>
                  {lvl.levelBadge}
                </span>

                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug">
                  {lvl.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                  {lvl.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Adaptado a su etapa de desarrollo</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Inside Each Level Content Formats (Clean Minimalist Grid) */}
        <div className="mt-12 bg-gradient-to-r from-sky-50/60 via-emerald-50/60 to-amber-50/60 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-lg sm:text-xl font-black text-slate-900">
              ¿Qué encontrarás dentro de cada nivel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Diferentes formatos diseñados para que el aprendizaje sea ágil y entretenido.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {levelFormatFeatures.map((f, fidx) => {
              const Icon = f.icon;
              return (
                <div key={fidx} className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-2.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h5 className="text-xs font-black text-slate-900 leading-tight">
                    {f.label}
                  </h5>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                    {f.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Natural mention of the platform */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 text-center">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-700 bg-white/90 px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
              <Globe className="h-4 w-4 text-sky-600 shrink-0" />
              <span>Todo el contenido está organizado en una <strong>plataforma privada</strong> de acceso inmediato y disponible las 24 horas desde cualquier dispositivo.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
