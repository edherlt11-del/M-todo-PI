/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Laptop, Layers, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function AsiFunciona() {
  const steps = [
    {
      num: "01",
      icon: Laptop,
      title: "Plataforma Privada 24/7",
      desc: "Acceso inmediato e ilimitado desde cualquier dispositivo, a tu propio ritmo.",
      bgIcon: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      num: "02",
      icon: Layers,
      title: "Organizado por Edad y Bonos",
      desc: "Niveles (3-5+, 5-12+, 12-16+) y herramientas listas para usar en orden.",
      bgIcon: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      num: "03",
      icon: MessageSquare,
      title: "Comunidad de Padres",
      desc: "Publica avances, resuelve dudas y aprende junto a otras familias.",
      bgIcon: "bg-purple-100 text-purple-700 border-purple-200"
    }
  ];

  return (
    <section className="bg-slate-50/70 py-16 lg:py-20 border-y border-slate-100" id="asi-funciona">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="PLATAFORMA Y ACCESO"
          tagVariant="emerald"
          title="¿Cómo funciona?"
          subtitle="Todo tu contenido organizado en un solo lugar, accesible las 24 horas."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card 
                key={idx}
                variant="interactive"
                className="p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`h-12 w-12 rounded-2xl ${s.bgIcon} flex items-center justify-center border shadow-2xs`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Disponible al instante</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}

