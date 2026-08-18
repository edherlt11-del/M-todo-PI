/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeader } from './ui/design-system';

export default function Testimonials() {
  const testimonialImages = [
    {
      src: "https://i.postimg.cc/htMcB9sL/tes2.png",
      alt: "Testimonio de Padre Pequeño Inversionista"
    },
    {
      src: "https://i.postimg.cc/KzBWZbF4/tsti.png",
      alt: "Testimonio de Experiencia Familiar Pequeño Inversionista"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24" id="testimonios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="OPINIONES DE FAMILIAS"
          tagVariant="emerald"
          title="Lo que dicen otros padres"
          subtitle="Experiencias reales de padres que ya están transformando la relación de sus hijos con el dinero."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonialImages.map((img, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain rounded-2xl drop-shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
