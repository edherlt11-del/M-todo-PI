/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QueAprendera from './components/QueAprendera';
import SimuladorAhorro from './components/SimuladorAhorro';
import Aprende from './components/Aprende';
import AsiFunciona from './components/AsiFunciona';
import QuizPadres from './components/QuizPadres';
import Bonuses from './components/Bonuses';
import Garantia from './components/Garantia';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import SalesPopups from './components/SalesPopups';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      {/* Sticky Header */}
      <Header />

      <main>
        {/* 1. Hero con propuesta de valor, mockup grande y botón principal */}
        <Hero />

        {/* 2. Sección "¿Qué aprenderá tu hijo?" (4 beneficios en tarjetas) */}
        <QueAprendera />

        {/* 3. Simulador interactivo de ahorro para niños */}
        <SimuladorAhorro />

        {/* 4. Sección "¿Qué incluye el programa?" (Tarjetas visuales con módulos y badges) */}
        <Aprende />

        {/* 5. Sección "Así funciona" (3 pasos ilustrados) */}
        <AsiFunciona />

        {/* 6. Mini Quiz interactivo para padres */}
        <QuizPadres />

        {/* 7. Sección de bonos (Tarjetas individuales) */}
        <Bonuses />

        {/* 6. Sección de garantía simplificada (Mensaje corto con icono de escudo) */}
        <Garantia />

        {/* 7. Sección de testimonios (Preparada para fotos reales) */}
        <Testimonials />

        {/* 8. Sección de preguntas frecuentes (Reducida a las 3 principales) */}
        <FAQ />

        {/* 9. Sección final muy emocional con mensaje inspirador y botón de compra */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sales popups notification toast */}
      <SalesPopups />
    </div>
  );
}
