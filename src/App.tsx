/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  Lock, 
  Star, 
  RefreshCw, 
  Zap, 
  BrainCircuit, 
  Trophy, 
  AlertOctagon,
  ChevronDown,
  HelpCircle,
  Award,
  BookOpen,
  DollarSign
} from 'lucide-react';
import TermometroRiesgo from './components/TermometroRiesgo';
import SalesPopups from './components/SalesPopups';

// Options for Step 1
const STEP1_OPTIONS = [
  {
    id: 'opcion_a',
    letter: 'Opción A',
    title: 'Que repita mis errores, viva al límite y termine atrapado en deudas',
    badge: 'Patrón de Imprudencia & Deuda',
    impactText: '⚠️ ALERTA DE TRANSMISIÓN SUBCONSCIENTE: El 78% de los adultos latinoamericanos endeudados aprendieron su relación con el dinero por simple imitación involuntaria antes de los 11 años. Si no intervienes con dinámicas lúdicas hoy, tu hijo absorberá tus mismos temores y tensiones financieras en piloto automático.',
    statistic: '78% de probabilidad de replicar estrés crediticio'
  },
  {
    id: 'opcion_b',
    letter: 'Opción B',
    title: 'Que dependa de un empleo promedio o del Estado y repita un ciclo de escasez sin jubilarse con dignidad',
    badge: 'Patrón de Techo Salarial & Dependencia',
    impactText: '⚠️ ALERTA DE TRAMPA LABORAL: El sistema escolar tradicional prepara a los niños únicamente para ser empleados que intercambian horas por sueldos fijos. Sin inteligencia financiera práctica a temprana edad, el 91% de los jóvenes replica la dependencia y el ciclo de escasez sin importar cuántos títulos académicos acumulen.',
    statistic: '91% atrapados en supervivencia salarial'
  },
  {
    id: 'opcion_c',
    letter: 'Opción C',
    title: 'Que no sepa gestionar el patrimonio o negocio que con tanto esfuerzo he construido y lo destruya',
    badge: 'Patrón de Dilución Patrimonial',
    impactText: '⚠️ ALERTA DE DILUCIÓN DE RIQUEZA: El 70% del patrimonio y negocios familiares en la región se extingue por completo en la primera generación sucesora porque los hijos crecen consumiendo el fruto del esfuerzo sin haber entrenado los músculos de la retención, el ahorro y la inversión.',
    statistic: '70% de negocios familiares quebrados en 1ª sucesión'
  }
];

// Micro-trigger options for Step 2
const STEP2_OPTIONS = [
  {
    id: 'gasto_impulso',
    label: 'Lo gasta por impulso en pocas horas',
    detail: 'Búsqueda de gratificación inmediata y nula noción de costo de oportunidad.'
  },
  {
    id: 'desinteres_total',
    label: 'Muestra total desinterés por aprender a gestionarlo',
    detail: 'Desconexión con el valor del esfuerzo y falta de estímulo lúdico financiero.'
  }
];

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/O106740525J';

export default function App() {
  // Funnel State:
  // Step 1: 0% risk (no choice yet)
  // Step 2: 50% risk (Step 1 chosen, Step 2 visible)
  // Step 3: 95% risk (Step 2 chosen -> Critical Diagnosis & Solution revealed)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);
  const [isVibrating, setIsVibrating] = useState(false);
  const [isEscudoActive, setIsEscudoActive] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const diagnosisRef = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  // Handle Step 1 Option Click
  const handleSelectStep1 = (optionId: string) => {
    setSelectedOption1(optionId);
    setCurrentStep(2);
    // Smooth scroll to step 2 after brief delay
    setTimeout(() => {
      step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 250);
  };

  // Handle Step 2 Option Click
  const handleSelectStep2 = (optionId: string) => {
    setSelectedOption2(optionId);
    setIsVibrating(true);

    // Vibrate / shake gauge for 600ms then lock to Step 3
    setTimeout(() => {
      setIsVibrating(false);
      setCurrentStep(3);
      // Smooth scroll to diagnosis block
      setTimeout(() => {
        diagnosisRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }, 600);
  };

  // Reset audit to beginning if user wants to test another path
  const handleResetAudit = () => {
    setCurrentStep(1);
    setSelectedOption1(null);
    setSelectedOption2(null);
    setIsEscudoActive(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct checkout action
  const handleGoToCheckout = () => {
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  // Calculate thermometer percentage
  let thermometerPercentage = 0;
  if (isEscudoActive) {
    thermometerPercentage = 0;
  } else if (currentStep === 3) {
    thermometerPercentage = 95;
  } else if (currentStep === 2) {
    thermometerPercentage = 50;
  } else {
    thermometerPercentage = 0;
  }

  const activeOptionData = STEP1_OPTIONS.find(o => o.id === selectedOption1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-rose-500 selection:text-white relative overflow-x-hidden">
      
      {/* Dynamic ambient gradient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] transition-all duration-1000 ${
            currentStep === 3 
              ? (isEscudoActive ? 'bg-emerald-500/20' : 'bg-rose-600/20') 
              : currentStep === 2 
                ? 'bg-amber-500/15' 
                : 'bg-emerald-500/15'
          }`} 
        />
        <div className="absolute inset-0 bg-pattern opacity-[0.04]" />
      </div>

      {/* Top Minimalist Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-amber-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <span className="block text-sm font-black tracking-tight text-white leading-none">
                PEQUEÑO INVERSIONISTA
              </span>
              <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase leading-none">
                AUDITORÍA DE RIESGO HEREDADO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Diagnóstico en Vivo</span>
            </div>
            
            {currentStep === 3 && (
              <button
                onClick={handleGoToCheckout}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-xl shadow-lg transition-all transform active:scale-95"
              >
                Activar Escudo $12 USD
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-4xl px-4 py-6 sm:py-10 sm:px-6 lg:px-8">

        {/* 1. VISUAL GAUGE / THERMOMETER COMPONENT */}
        <section className="mb-8 sm:mb-12">
          <TermometroRiesgo 
            percentage={thermometerPercentage}
            isVibrating={isVibrating}
            isEscudoActive={isEscudoActive}
            stageName={
              currentStep === 1 
                ? "Paso 1: Identificación de Patrón" 
                : currentStep === 2 
                  ? "Paso 2: Medición de Absorción" 
                  : isEscudoActive 
                    ? "Escudo de Escape Activado" 
                    : "Diagnóstico Crítico Emitido"
            }
          />
        </section>


        {/* ========================================================================= */}
        {/* PASO 1: EL LAZO ABIERTO DE IDENTIDAD */}
        {/* ========================================================================= */}
        <section className="mb-10 sm:mb-14">
          
          {/* Main Provocative Headline */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-3.5 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>AUDITORÍA GENERACIONAL</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-snug sm:leading-tight">
              Hay 3 tipos de legados financieros en Latinoamérica. Dos de ellos atrapan a los hijos en la supervivencia económica antes de los 25 años.
            </h1>

            <p className="mt-4 text-base sm:text-lg font-bold text-amber-400">
              ¿Cuál estás construyendo tú hoy para tu hijo?
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Selecciona tu mayor preocupación o el patrón que más temes que herede:
            </p>
          </div>

          {/* 3 Pain Cards (Tactile selection) */}
          <div className="grid gap-3.5 sm:gap-4 max-w-2xl mx-auto">
            {STEP1_OPTIONS.map((opt) => {
              const isSelected = selectedOption1 === opt.id;
              const isHidden = selectedOption1 !== null && !isSelected;

              if (isHidden && currentStep >= 2) {
                // Smooth collapse of non-selected options
                return null;
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => currentStep === 1 && handleSelectStep1(opt.id)}
                  disabled={currentStep > 1}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    isSelected 
                      ? 'bg-amber-500/10 border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50' 
                      : 'bg-slate-900/80 hover:bg-slate-850 border-slate-800 hover:border-slate-700 hover:shadow-md cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Option Letter / Radio circle */}
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-amber-500 text-slate-950 shadow-sm' 
                        : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                    }`}>
                      {opt.id === 'opcion_a' ? 'A' : opt.id === 'opcion_b' ? 'B' : 'C'}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isSelected 
                            ? 'bg-amber-500/20 text-amber-300' 
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {opt.badge}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                            <Lock className="h-3 w-3" /> Patrón Seleccionado
                          </span>
                        )}
                      </div>

                      <p className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {opt.title}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Revealed Emotional Impact Text for Step 1 */}
          {selectedOption1 && activeOptionData && (
            <div className="mt-5 max-w-2xl mx-auto animate-type-reveal">
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed font-medium">
                <p>{activeOptionData.impactText}</p>
                <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-300/80 font-bold">
                  <span>Dato regional auditado:</span>
                  <span>{activeOptionData.statistic}</span>
                </div>
              </div>
            </div>
          )}

        </section>


        {/* ========================================================================= */}
        {/* PASO 2: EL DETONANTE COTIDIANO */}
        {/* ========================================================================= */}
        {currentStep >= 2 && currentStep < 3 && (
          <section ref={step2Ref} className="mb-12 max-w-2xl mx-auto animate-fade-slide-up">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="h-6 w-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">
                  2
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  SEGUNDA MEDICIÓN DE ABSORCIÓN
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2">
                Para medir el nivel de absorción del patrón en tu hogar hoy:
              </h3>
              <p className="text-sm sm:text-base font-semibold text-slate-300 mb-6">
                Cuando tu hijo tiene dinero en sus manos (regalo, domingo o monedas), ¿cuál es su reacción inmediata?
              </p>

              {/* 2 Tactile Buttons */}
              <div className="grid sm:grid-cols-2 gap-3">
                {STEP2_OPTIONS.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => handleSelectStep2(btn.id)}
                    className="p-4 rounded-2xl bg-slate-800/90 hover:bg-rose-500/10 border border-slate-700 hover:border-rose-500/50 text-left transition-all group active:scale-98 cursor-pointer hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-rose-400 group-hover:text-rose-300">
                        ⚡ REACCIÓN FRECUENTE
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm font-bold text-white group-hover:text-rose-100 leading-snug mb-1">
                      {btn.label}
                    </p>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-normal">
                      {btn.detail}
                    </p>
                  </button>
                ))}
              </div>

              <p className="text-center text-[11px] text-slate-500 mt-4">
                * Tu respuesta calculará el índice de urgencia de intervención neuronal.
              </p>
            </div>
          </section>
        )}


        {/* ========================================================================= */}
        {/* PASO 3 & DIAGNÓSTICO DEFINITIVO + SOLUCIÓN COMPRA OBLIGADA */}
        {/* ========================================================================= */}
        {currentStep === 3 && (
          <div ref={diagnosisRef} className="space-y-12 animate-fade-slide-up">

            {/* Critical Alert Diagnosis Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-rose-950/40 via-slate-900 to-slate-900 border-2 border-rose-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <AlertOctagon className="h-40 w-40 text-rose-500" />
              </div>

              {/* Warning badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-black uppercase tracking-wider mb-4 animate-pulse">
                <AlertOctagon className="h-4 w-4" />
                <span>RESULTADO OFICIAL DE LA AUDITORÍA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                DIAGNÓSTICO: Alerta de Legado de Escasez Activa
              </h2>

              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Nivel de Riesgo</span>
                  <span className="text-xl font-black text-rose-400">95% Crítico</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Ventana Neuro-Financiera</span>
                  <span className="text-xl font-black text-amber-400">Antes de 12 Años</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Estado del Patrón</span>
                  <span className="text-xl font-black text-rose-400">En Grabación</span>
                </div>
              </div>

              <div className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-medium">
                <p>
                  Las neurociencias financieras confirman que la <strong className="text-white">"Ventana de Impronta Económica"</strong> de un niño se consolida irreversiblemente entre los 5 y los 12 años. 
                </p>
                <p>
                  Al no contar con un método estructurado de juegos y simulaciones en casa, tu hijo está asimilando la relación con el dinero a través de impulsos y tensiones ambientales. En menos de una década, estas mismas respuestas dictarán sus deudas, su capacidad de ahorro y su nivel de libertad.
                </p>
              </div>

              {/* Reset button if desired */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>¿Deseas recalibrar tus respuestas?</span>
                <button 
                  onClick={handleResetAudit}
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold underline cursor-pointer"
                >
                  <RefreshCw className="h-3 w-3" /> Reiniciar Auditoría
                </button>
              </div>
            </div>


            {/* THE ONLY SOLUTION: EL MÉTODO PEQUEÑO INVERSIONISTA */}
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              
              {/* Escudo Enfriamiento Simulator Toggle */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-md">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-emerald-300">
                      Escudo de Escape: Enfriamiento de Riesgo Inmediato
                    </h4>
                    <p className="text-xs text-slate-300">
                      Mira cómo el método 'Pequeño Inversionista' neutraliza el 95% de riesgo a 0% de seguridad.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEscudoActive(!isEscudoActive)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isEscudoActive 
                      ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300' 
                      : 'bg-slate-800 text-emerald-400 hover:bg-slate-700 border border-emerald-500/40'
                  }`}
                >
                  {isEscudoActive ? '✓ Escudo Activo (0% Riesgo)' : '⚡ Simular Activación del Escudo'}
                </button>
              </div>

              {/* Solution Presentation */}
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-3">
                  LA SOLUCIÓN DEFINITIVA DE ALTA CONVERSIÓN
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Método Pequeño Inversionista: Enfría el Termómetro y Rompe el Ciclo Familiar en 7 Días
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-medium">
                  Un protocolo 100% práctico y gamificado para transformar el dinero en un juego educativo donde tu hijo aprende a <strong className="text-emerald-400">ahorrar con propósito, resistir impulsos e invertir de forma natural.</strong>
                </p>
              </div>

              {/* 7-Day Journey Highlights */}
              <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mb-1">
                    <Clock className="h-4 w-4" /> Días 1 y 2
                  </div>
                  <h4 className="text-sm font-black text-white">Desactivar el Impulso Inmediato</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Juegos de gratificación postergada para que el niño experimente la recompensa de retener dinero antes de gastarlo.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase mb-1">
                    <BookOpen className="h-4 w-4" /> Días 3 y 4
                  </div>
                  <h4 className="text-sm font-black text-white">El Sistema de las 3 Cuentas</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Instalación del Banco Familiar en Casa: Gasto Inteligente, Ahorro con Meta y Semilla de Inversión.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase mb-1">
                    <DollarSign className="h-4 w-4" /> Días 5 y 6
                  </div>
                  <h4 className="text-sm font-black text-white">Dinero Trabajador vs Dinero Dormido</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Simuladores visuales sencillos para entender qué es un activo y cómo el dinero genera más dinero.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase mb-1">
                    <Trophy className="h-4 w-4" /> Día 7
                  </div>
                  <h4 className="text-sm font-black text-white">Graduación y Criterio Financiero</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Entrega de certificado y fijación de hábitos para mantener la protección financiera durante toda su infancia.
                  </p>
                </div>
              </div>

              {/* 4 Bonuses Included at $0 today */}
              <div className="mb-8 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" /> 4 Bonos Exclusivos de Aceleración Incluidos ($0 Hoy)
                  </h4>
                  <span className="text-[10px] font-black bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                    VALORADOS EN $97 USD
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Bono #1:</strong> Kit y Fichas del Banco Familiar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Bono #2:</strong> Simulador de Inversiones Infantil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Bono #3:</strong> Tablas y Retos Imprimibles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span><strong>Bono #4:</strong> Comunidad Privada de Padres</span>
                  </div>
                </div>
              </div>

              {/* PRICING OFFER & DEFINITIVE CTA */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-950/90 border-2 border-emerald-500/40 text-center relative overflow-hidden shadow-2xl">
                
                <div className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase px-3.5 py-1 rounded-full border border-emerald-500/30 mb-3">
                  ⚡ OFERTA ESPECIAL DE LANZAMIENTO
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Paquete Completo Pequeño Inversionista 3.0
                </h3>

                {/* Price Display */}
                <div className="my-4 flex items-center justify-center gap-3">
                  <span className="text-sm text-slate-500 line-through font-bold">$37 USD</span>
                  <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">$12</span>
                  <span className="text-xs text-slate-400 font-bold uppercase">USD • Pago Único</span>
                </div>

                <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                  Menos de lo que cuesta una salida a comer pizza, para blindar las decisiones financieras de tu hijo para siempre.
                </p>

                {/* Main Mandatory High-Converting CTA Button */}
                <button
                  onClick={handleGoToCheckout}
                  className="w-full max-w-xl mx-auto py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base tracking-tight shadow-xl glow-btn transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  id="checkout-cta-button"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  <span>Aplicar Escudo de Escape para el Futuro de mi Hijo — US$ 12</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </button>

                {/* Security badges */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" /> Garantía Total de 7 Días
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-emerald-400" /> Checkout Seguro Hotmart
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-emerald-400" /> Acceso Digital Inmediato
                  </span>
                </div>

              </div>

            </div>


            {/* SOCIAL PROOF & TESTIMONIALS */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <div className="text-center mb-6">
                <span className="text-xs font-black uppercase text-slate-400 tracking-wider">
                  EXPERIENCIAS REALES EN LATINOAMÉRICA
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Más de 500 Familias Han Roto el Ciclo
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                    <p className="italic mb-3 text-slate-200 font-medium">
                      "Mi hijo de 8 años se gastaba todo en golosinas. Al tercer día con el Banco Familiar me pidió guardar el 50% para su meta de inversión. ¡Es increíble!"
                    </p>
                  </div>
                  <div className="font-bold text-white border-t border-slate-800 pt-2 flex items-center justify-between">
                    <span>Valeria M.</span>
                    <span className="text-[10px] text-slate-500">Santiago, Chile</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                    <p className="italic mb-3 text-slate-200 font-medium">
                      "Yo crecí viendo a mis padres endeudados y no quería eso para mis gemelos. Este curso les dio una claridad que ni en la escuela enseñan."
                    </p>
                  </div>
                  <div className="font-bold text-white border-t border-slate-800 pt-2 flex items-center justify-between">
                    <span>Carlos R.</span>
                    <span className="text-[10px] text-slate-500">Bogotá, Colombia</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                    <p className="italic mb-3 text-slate-200 font-medium">
                      "Los juegos son tan sencillos que los hacemos en 15 minutos antes de cenar. Se lo recomiendo a cualquier padre comprometido."
                    </p>
                  </div>
                  <div className="font-bold text-white border-t border-slate-800 pt-2 flex items-center justify-between">
                    <span>Mariana G.</span>
                    <span className="text-[10px] text-slate-500">CDMX, México</span>
                  </div>
                </div>
              </div>
            </div>


            {/* FREQUENTLY ASKED QUESTIONS */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-black text-white mb-4 text-center">
                Preguntas Frecuentes
              </h3>

              <div className="space-y-3 max-w-2xl mx-auto">
                {[
                  {
                    q: "¿Para qué edades está diseñado el programa?",
                    a: "Está optimizado para niños de 5 a 13 años. Las dinámicas usan analogías visuales, historias y juegos prácticos adaptables a su nivel de comprensión."
                  },
                  {
                    q: "¿Cómo y cuándo recibo el acceso?",
                    a: "Inmediatamente después de confirmar tu pago de US$ 12 en Hotmart, recibes un correo electrónico con tus accesos instantáneos y de por vida a la plataforma y todos los descargables."
                  },
                  {
                    q: "¿Qué pasa si no tengo tiempo para sentarme horas con mi hijo?",
                    a: "El método está diseñado para padres ocupados. Cada actividad toma entre 10 y 15 minutos al día durante 7 días."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs cursor-pointer"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  >
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>{item.q}</span>
                      <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-emerald-400' : ''}`} />
                    </div>
                    {openFaqIndex === idx && (
                      <p className="mt-2 text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Sticky Action */}
              <div className="mt-8 text-center">
                <button
                  onClick={handleGoToCheckout}
                  className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm tracking-tight shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Garantizar Escudo de Escape Ahora — US$ 12
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-4xl px-4 space-y-2">
          <p>© {new Date().getFullYear()} Pequeño Inversionista. Todos los derechos reservados.</p>
          <p className="text-[11px] text-slate-600 max-w-xl mx-auto">
            Este sitio web no forma parte del sitio de Facebook o Meta Inc. Este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de META Platforms, Inc.
          </p>
        </div>
      </footer>

      {/* Live Sales Notification Popups */}
      <SalesPopups />

    </div>
  );
}
