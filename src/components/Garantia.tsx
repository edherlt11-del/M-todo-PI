/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './ui/design-system';

export default function Garantia() {
  const handleGoToCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <section className="bg-slate-900 py-16 text-white relative overflow-hidden" id="garantia">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Shield Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 shadow-inner">
          <ShieldCheck className="h-9 w-9" />
        </div>

        {/* Short, direct headline */}
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          Garantía Incondicional de 7 Días
        </h2>

        {/* Short 2-line message */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Prueba el programa en casa durante una semana entera. Si sientes que tu hijo no comprende los conceptos o no estás 100% satisfecho, te devolvemos la totalidad de tu dinero sin preguntas.
        </p>

        {/* Strategic CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={handleGoToCheckout}
            className="font-extrabold bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3.5 rounded-xl text-xs sm:text-sm"
          >
            Probar Sin Riesgo Ahora
          </Button>
        </div>

      </div>
    </section>
  );
}
