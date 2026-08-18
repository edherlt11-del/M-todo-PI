/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, Card } from './ui/design-system';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const top3Questions = [
    {
      question: "¿Para qué edades está recomendado?",
      answer: "Está diseñado para niños y adolescentes de entre 3 y 16+ años, dividido en 3 niveles de edad (3 a 5+, 5 a 12+ y 12 a 16+ años). Todos los conceptos están adaptados mediante analogías simples y dinámicas familiares visuales."
    },
    {
      question: "¿Necesito conocimientos financieros previos como padre?",
      answer: "No. El programa incluye la guía completa para padres con el paso a paso detallado. Aprenderán juntos de forma divertida sin explicaciones complejas."
    },
    {
      question: "¿Cómo recibo el material y cuánto tiempo tendré acceso?",
      answer: "Recibes acceso digital inmediato por correo electrónico tras tu compra. Tendrás acceso de por vida para descargar e imprimir el material las veces que necesites."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-slate-50/60 py-16 lg:py-20 border-y border-slate-100" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="RESPUESTAS RÁPIDAS"
          tagVariant="emerald"
          title="Preguntas Frecuentes"
          subtitle="Resolvemos las dudas principales para ayudarte a dar el paso hoy mismo."
        />

        <div className="mt-10 space-y-3">
          {top3Questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card 
                key={idx}
                variant="flat"
                className="overflow-hidden border border-slate-200/80 bg-white rounded-2xl transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-black text-slate-900 cursor-pointer text-sm sm:text-base gap-3 hover:bg-slate-50/50"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 p-5 bg-slate-50/30">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
