/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Gamepad2, Printer, Users, CheckCircle2 } from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function Bonuses() {
  const bonuses = [
    {
      num: "BONO #1",
      icon: Landmark,
      title: "Banco Familiar",
      desc: "Transforma tu hogar en un banco interactivo para enseñar ahorro, préstamos responsables e interés con dinámicas familiares.",
      imgSrc: "https://i.postimg.cc/0yM7RcJH/Chat-GPT-Image-3-jun-2026-12-26-22-removebg-preview.png",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      num: "BONO #2",
      icon: Gamepad2,
      title: "Simulador de Inversiones Infantil",
      desc: "Herramienta interactiva para que tu hijo tome decisiones con dinero ficticio y descubra el crecimiento financiero sin riesgo.",
      imgSrc: "https://i.postimg.cc/KcQZxbPk/Chat-GPT-Image-3-jun-2026-11-59-47-removebg-preview.png",
      color: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      num: "BONO #3",
      icon: Printer,
      title: "Materiales Imprimibles y Recortables",
      desc: "Hojas de retos, tablas de ahorro y fichas visuales para pegar en el refrigerador y motivar metas semanales.",
      imgSrc: "https://i.postimg.cc/GpDtzfsC/Chat-GPT-Image-3-jun-2026-11-35-00-removebg-preview.png",
      color: "bg-amber-100 text-amber-800 border-amber-200"
    },
    {
      num: "BONO #4",
      icon: Users,
      title: "Comunidad Privada de Padres",
      desc: "Un espacio exclusivo donde podrás compartir avances, resolver dudas, comentar experiencias y aprender junto a otros padres dentro de la plataforma.",
      imgSrc: null, // Clean icon illustration without dashboard screenshots
      color: "bg-purple-100 text-purple-700 border-purple-200"
    }
  ];

  return (
    <section className="bg-slate-50/70 py-16 lg:py-24 border-y border-slate-100" id="bonos-exclusivos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="REGALOS EXCLUSIVOS"
          tagVariant="amber"
          title="Bonos Incluidos Gratis"
          subtitle="Cuatro herramientas complementarias para potenciar la experiencia y acompañar a tu familia en el proceso."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Card 
                key={idx}
                variant="interactive"
                className="p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${b.color}`}>
                      {b.num}
                    </span>
                    <span className="bg-emerald-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-2xs">
                      GRATIS
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-xl ${b.color} flex items-center justify-center shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">
                      {b.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {b.desc}
                  </p>

                  {/* Clean visual representation */}
                  {b.imgSrc ? (
                    <div className="my-4 h-36 w-full flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-2">
                      <img 
                        src={b.imgSrc} 
                        alt={b.title} 
                        className="h-full w-full object-contain drop-shadow-2xs"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="my-4 h-36 w-full flex flex-col items-center justify-center bg-purple-50/50 rounded-2xl border border-purple-100/60 p-4 text-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                        <Users className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-black text-purple-900">
                        Red de Apoyo Familiar
                      </span>
                      <span className="text-[11px] text-purple-600 font-bold mt-0.5">
                        Intercambia ideas & experiencias
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Incluido $0 hoy</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
