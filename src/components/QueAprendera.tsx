/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PiggyBank, TrendingUp, CreditCard, Brain } from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function QueAprendera() {
  const benefits = [
    {
      icon: PiggyBank,
      color: "sky" as const,
      bgIcon: "bg-sky-100 text-sky-700 border-sky-200",
      title: "Valor del Dinero y Ahorro",
      desc: "Comprenderá de dónde viene el dinero, para qué sirve y cómo planificar sus metas de ahorro con propósito."
    },
    {
      icon: TrendingUp,
      color: "emerald" as const,
      bgIcon: "bg-emerald-100 text-emerald-700 border-emerald-200",
      title: "Aprende a Invertir Jugando",
      desc: "Descubrirá cómo hacer crecer su dinero usando el simulador infantil, entendiendo la inversión sin ningún riesgo."
    },
    {
      icon: CreditCard,
      color: "amber" as const,
      bgIcon: "bg-amber-100 text-amber-800 border-amber-200",
      title: "Entender y Evitar Deudas",
      desc: "Aprenderá la diferencia entre necesidades e impulsos, protegiéndose de las trampas financieras desde joven."
    },
    {
      icon: Brain,
      color: "purple" as const,
      bgIcon: "bg-purple-100 text-purple-700 border-purple-200",
      title: "Decisiones e Independencia",
      desc: "Desarrollará responsabilidad, criterio y autocontrol para administrar sus recursos con seguridad hacia el futuro."
    }
  ];

  return (
    <section className="bg-slate-50/60 py-16 lg:py-24 border-y border-slate-100" id="que-aprendera">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="BENEFICIOS CLAVE"
          tagVariant="emerald"
          title="¿Qué aprenderá tu hijo?"
          subtitle="Cuatro pilares prácticos para construir hábitos financieros sólidos y una mentalidad responsable desde hoy."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Card 
                key={idx} 
                variant="interactive"
                className="p-6 bg-white border border-slate-200/80 shadow-xs rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className={`h-12 w-12 rounded-xl ${b.bgIcon} flex items-center justify-center mb-5 border shadow-2xs`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-500">
                  <span className="text-emerald-600 font-black mr-1.5">✓</span> Habilidad para la vida
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
