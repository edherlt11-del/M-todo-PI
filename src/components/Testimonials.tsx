/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader, Button } from './ui/design-system';
import { Star, CheckCircle2, MessageSquareHeart, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  src: string;
  alt: string;
}

function AnimatedTestimonialCard({ img, idx }: { img: TestimonialItem; idx: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection Observer to trigger elegant fade-in and slide-up animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = cardRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${idx * 180}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-[0.96]'
      } bg-slate-50/80 border border-slate-200/90 rounded-3xl p-3 sm:p-5 shadow-xs hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 flex items-center justify-center overflow-hidden`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-auto object-contain rounded-2xl drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
}

export default function Testimonials() {
  const testimonialImages: TestimonialItem[] = [
    {
      src: "https://i.postimg.cc/htMcB9sL/tes2.png",
      alt: "Testimonio de Padre Pequeño Inversionista"
    },
    {
      src: "https://i.postimg.cc/KzBWZbF4/tsti.png",
      alt: "Testimonio de Experiencia Familiar Pequeño Inversionista"
    }
  ];

  const handleGoToCheckout = () => {
    const el = document.getElementById('oferta-checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'https://pay.hotmart.com/O106740525J';
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden" id="testimonios">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="OPINIONES DE FAMILIAS"
          tagVariant="emerald"
          title="Lo que dicen otros padres"
          subtitle="Experiencias reales de padres que ya están transformando la relación de sus hijos con el dinero."
        />

        {/* Stars rating badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-700">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400" />
            ))}
          </div>
          <span className="font-extrabold text-slate-900">4.9 / 5</span>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
            +500 Familias Satisfechas
          </span>
        </div>

        {/* Grid of testimonial cards animated with Intersection Observer */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonialImages.map((img, idx) => (
            <AnimatedTestimonialCard key={idx} img={img} idx={idx} />
          ))}
        </div>

        {/* Bottom CTA for social proof */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="md"
            onClick={handleGoToCheckout}
            icon={ArrowRight}
            className="font-extrabold text-xs sm:text-sm px-6 py-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 shadow-xs"
          >
            Quiero los mismos resultados para mi hijo
          </Button>
        </div>

      </div>
    </section>
  );
}
