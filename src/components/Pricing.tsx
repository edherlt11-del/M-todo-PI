/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Download, Trophy, Sparkles, Star
} from 'lucide-react';
import { Card, Button } from './ui/design-system';

export default function Pricing() {
  const [formData, setFormData] = useState({
    childName: 'Pequeño Inversionista',
    parentEmail: 'tu-correo@ejemplo.com'
  });

  const [checkoutStep, setCheckoutStep] = useState<'form' | 'loading' | 'success'>('form');

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <section className="bg-slate-950 py-16 text-slate-100 lg:py-24 relative overflow-hidden" id="oferta-checkout">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Emotional High-Impact Headline */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ÚLTIMO PASO PARA TU FAMILIA</span>
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
          El mejor regalo que puedes darle a tu hijo no es dinero, <span className="text-emerald-400">es enseñarle cómo funciona.</span>
        </h2>

        <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          En pocos años tu hijo tomará sus primeras decisiones financieras. Darle esta ventaja hoy es asegurarte de que las tome con conocimiento, responsabilidad y criterio.
        </p>

        {/* Pricing Offer & Simulated Form */}
        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-xl mx-auto text-left relative overflow-hidden">
          
          {checkoutStep === 'form' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-6">
              <div className="text-center pb-4 border-b border-slate-800">
                <span className="text-[11px] font-black tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full inline-block mb-2">
                  ⚡ ACCESO INMEDIATO DE POR VIDA
                </span>
                <h3 className="text-xl font-black text-white">Programa Pequeño Inversionista</h3>
                <div className="mt-3 flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-emerald-400">$12</span>
                  <span className="text-sm text-slate-400 font-bold uppercase">USD</span>
                  <span className="text-xs text-slate-500 line-through ml-2">$37 USD</span>
                </div>
              </div>

              {/* Package contents summary */}
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Programa completo de 7 días para niños</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Guía completa e instructivos para padres</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300">🎁 4 Bonos Exclusivos incluidos GRATIS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Acceso digital de por vida e imprimibles</span>
                </li>
              </ul>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  icon={ArrowRight}
                  iconPosition="right"
                  glow
                  onClick={() => { window.location.href = 'https://pay.hotmart.com/O106740525J'; }}
                  className="w-full font-black text-sm sm:text-base py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg"
                >
                  Garantizar Acceso Ahora
                </Button>
              </div>

              {/* Security badges */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-bold text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Garantía de 7 días
                </span>
                <span>•</span>
                <span>Pago 100% Seguro</span>
              </div>
            </form>
          )}

          {checkoutStep === 'loading' && (
            <div className="py-16 text-center space-y-4">
              <div className="mx-auto h-10 w-10 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
              <p className="text-sm font-black text-white">Procesando acceso inmediato...</p>
            </div>
          )}

          {checkoutStep === 'success' && (
            <div className="space-y-5 text-center py-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">¡Bienvenido al Programa!</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hemos preparado el paquete digital listo para descargar e imprimir. ¡Tu aventura familiar comienza hoy!
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCheckoutStep('form')}
                className="text-xs font-bold text-slate-900 bg-white hover:bg-slate-100"
              >
                Volver a la oferta
              </Button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
