/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Gamepad2, Printer, Users, CheckCircle2, Gift, Sparkles } from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function Bonuses() {
  const bonuses = [
    {
      num: "BONO #1",
      icon: Landmark,
      title: "Banco Familiar",
      desc: "Transforma tu hogar en un banco interactivo para enseñar ahorro, préstamos responsables e interés con dinámicas familiares.",
      imgSrc: "https://i.postimg.cc/0yM7RcJH/Chat-GPT-Image-3-jun-2026-12-26-22-removebg-preview.png",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
      giftColor: "from-emerald-500/10 to-teal-500/10"
    },
    {
      num: "BONO #2",
      icon: Gamepad2,
      title: "Simulador de Inversiones Infantil",
      desc: "Herramienta interactiva para que tu hijo tome decisiones con dinero ficticio y descubra el crecimiento financiero sin riesgo.",
      imgSrc: "https://i.postimg.cc/KcQZxbPk/Chat-GPT-Image-3-jun-2026-11-59-47-removebg-preview.png",
      color: "bg-sky-100 text-sky-700 border-sky-200",
      giftColor: "from-sky-500/10 to-emerald-500/10"
    },
    {
      num: "BONO #3",
      icon: Printer,
      title: "Materiales Imprimibles y Recortables",
      desc: "Hojas de retos, tablas de ahorro y fichas visuales para pegar en el refrigerador y motivar metas semanales.",
      imgSrc: "https://i.postimg.cc/GpDtzfsC/Chat-GPT-Image-3-jun-2026-11-35-00-removebg-preview.png",
      color: "bg-amber-100 text-amber-800 border-amber-200",
      giftColor: "from-amber-500/10 to-emerald-500/10"
    },
    {
      num: "BONO #4",
      icon: Users,
      title: "Comunidad Privada de Padres",
      desc: "Un espacio exclusivo donde podrás compartir avances, resolver dudas, comentar experiencias y aprender junto a otros padres dentro de la plataforma.",
      imgSrc: null,
      color: "bg-purple-100 text-purple-700 border-purple-200",
      giftColor: "from-purple-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section className="bg-slate-50/70 py-16 lg:py-24 border-y border-slate-100 relative overflow-hidden" id="bonos-exclusivos">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none"></div>

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
              <div 
                key={idx}
                className="group relative p-6 bg-white border border-slate-200/90 rounded-3xl flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] hover:bg-gradient-to-b hover:from-white hover:via-emerald-50/20 hover:to-emerald-50/50 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer overflow-hidden"
              >
                {/* Unlocking Gift Highlight on hover */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${b.color}`}>
                      {b.num}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-2xs group-hover:bg-emerald-600 transition-colors">
                      <Gift className="h-3 w-3" />
                      REGALO
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-xl ${b.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-950 transition-colors">
                      {b.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {b.desc}
                  </p>

                  {/* Visual representation */}
                  {b.imgSrc ? (
                    <div className="my-4 h-36 w-full flex items-center justify-center bg-slate-50 group-hover:bg-white rounded-2xl border border-slate-100 group-hover:border-emerald-100 p-2 transition-colors">
                      <img 
                        src={b.imgSrc} 
                        alt={b.title} 
                        className="h-full w-full object-contain drop-shadow-2xs group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="my-4 h-36 w-full flex flex-col items-center justify-center bg-purple-50/50 group-hover:bg-purple-50 rounded-2xl border border-purple-100/60 p-4 text-center transition-colors">
                      <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
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

                {/* Animated Glowing Tag: "Incluido $0 hoy" */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/90 text-emerald-800 border border-emerald-200/90 font-extrabold text-xs animate-green-glow shadow-2xs">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="tracking-wide">Incluido $0 hoy</span>
                  </div>

                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-emerald-700 transition-colors">
                    100% Gratis
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
