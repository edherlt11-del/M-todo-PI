/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  Zap,
  Target,
  PiggyBank,
  Brain
} from 'lucide-react';
import { SectionHeader, Button } from './ui/design-system';

interface DiagnosticResult {
  riskLevel: 'Moderado' | 'Alto' | 'Crítico';
  riskBadgeColor: string;
  riskTitle: string;
  projection2035: string;
  riskDescription: string;
  solutionTitle: string;
  solutionPoints: string[];
  projectedSavings: string;
}

const DIAGNOSTICS: Record<string, DiagnosticResult> = {
  low: {
    riskLevel: 'Moderado',
    riskBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    riskTitle: 'Riesgo de falta de práctica y consumo impulsivo tardío',
    projection2035: 'Sin experiencia previa administrando dinero, el 78% de los jóvenes gasta desmedidamente su primer sueldo.',
    riskDescription: 'Cuando un niño no practica con pequeñas cantidades, no aprende el valor del dinero ni el retraso de la gratificación.',
    solutionTitle: 'Cómo Pequeño Inversionista lo resuelve desde el Día 1:',
    solutionPoints: [
      'Implementa el Banco Familiar para enseñarle a ganarse y administrar recompensas tangibles.',
      'Aprende a valorar cada moneda sin necesidad de asignaciones grandes.',
      'Desarrolla el hábito de postergar el deseo inmediato antes de pedir caprichos.'
    ],
    projectedSavings: '+$3,500 USD ahorrados en compras impulsivas futuras'
  },
  medium: {
    riskLevel: 'Alto',
    riskBadgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    riskTitle: 'Riesgo de "Agujero Negro": Gastar el 100% de lo que recibe',
    projection2035: 'Proyección 2035: Riesgo de vivir mes a mes con tarjetas de crédito al tope por falta de regla de presupuesto.',
    riskDescription: 'Dar mesada sin un sistema educativo entrena al cerebro del niño a gastar todo lo que entra en su bolsillo.',
    solutionTitle: 'Cómo el Sistema Pequeño Inversionista transforma este hábito:',
    solutionPoints: [
      'Aplica la Regla de las 3 Alcancías (Ahorro 50%, Disfrute 30%, Inversión 20%).',
      'Usa el Simulador Infantil para que vea cómo su dinero crece en lugar de desaparecer.',
      'Fija metas a mediano plazo (como su bicicleta) en lugar de golosinas inmediatas.'
    ],
    projectedSavings: '+$8,200 USD proyectados en fondo de ahorro juvenil'
  },
  high: {
    riskLevel: 'Crítico',
    riskBadgeColor: 'bg-red-100 text-red-900 border-red-300',
    riskTitle: 'Riesgo de Hiperconsumismo y Dependencia Financiera',
    projection2035: 'Proyección 2035: Alto riesgo de acumular deudas de consumo para mantener un estilo de vida que no puede sostener.',
    riskDescription: 'A mayor cantidad de dinero sin educación financiera, mayor es la velocidad con la que se forman hábitos de sobregasto.',
    solutionTitle: 'La Solución Estratégica con Pequeño Inversionista:',
    solutionPoints: [
      'Enseña a crear su primer presupuesto real con ingresos, metas e inversión.',
      'Aprende a diferenciar con total frialdad entre "Necesidades reales" y "Deseos emocionales".',
      'Desarrolla mentalidad de inversionista creador en vez de consumidor pasivo.'
    ],
    projectedSavings: '+$18,000 USD de patrimonio y cero deudas tóxicas'
  }
};

const LOADING_MESSAGES = [
  "Analizando patrones de gasto y hábitos infantiles...",
  "Calculando riesgo de deuda y crédito para el año 2035...",
  "Simulando impacto de educación financiera temprana...",
  "Generando micro-diagnóstico y plan de acción..."
];

export default function QueAprendera() {
  const [allowance, setAllowance] = useState<number>(10);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const getTierKey = (amount: number): 'low' | 'medium' | 'high' => {
    if (amount <= 5) return 'low';
    if (amount <= 20) return 'medium';
    return 'high';
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);
    setLoadingStep(0);

    // Sequence through loading messages over 3 seconds
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 750);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      const tier = getTierKey(allowance);
      setResult(DIAGNOSTICS[tier]);
    }, 3000);
  };

  const handleReset = () => {
    setResult(null);
    setIsAnalyzing(false);
    setLoadingStep(0);
  };

  const handleGoToOffer = () => {
    const el = document.getElementById('oferta-checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'https://pay.hotmart.com/O106740525J';
    }
  };

  return (
    <section className="bg-slate-50/80 py-16 lg:py-24 border-y border-slate-100 relative overflow-hidden" id="calculadora-futuro">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="SIMULADOR INTERACTIVO 2035"
          tagVariant="emerald"
          title="Calculadora del Futuro Financiero"
          subtitle="Descubre en 10 segundos cómo los hábitos de dinero que tu hijo tiene hoy definirán su libertad o esclavitud en la adultez."
        />

        {/* Main Gamified Calculator Container */}
        <div className="mt-10 max-w-3xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {!result && !isAnalyzing && (
            <div className="space-y-8">
              
              <div className="text-center max-w-lg mx-auto">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100 shadow-2xs">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  ¿Cuánto dinero o mesada recibe tu hijo semanalmente?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Incluye propinas, asignación semanal o dinero para la escuela (en USD aprox.)
                </p>
              </div>

              {/* Allowance Slider & Amount Display */}
              <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/70 text-center">
                
                <div className="flex items-baseline justify-center gap-1.5 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-mono">
                    ${allowance}
                  </span>
                  <span className="text-sm font-extrabold text-emerald-600 uppercase">
                    USD / semana
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="2"
                  value={allowance}
                  onChange={(e) => setAllowance(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                <div className="flex justify-between text-[11px] font-bold text-slate-400 mt-2">
                  <span>$0 (Sin mesada fija)</span>
                  <span>$25/sem</span>
                  <span>$50+/sem</span>
                </div>

                {/* Quick Selection Preset Chips */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    { label: '$0 - Sin mesada', val: 0 },
                    { label: '$5/sem', val: 5 },
                    { label: '$10/sem', val: 10 },
                    { label: '$25/sem', val: 25 },
                    { label: '$40+/sem', val: 40 }
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      type="button"
                      onClick={() => setAllowance(chip.val)}
                      className={`px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                        allowance === chip.val
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

              </div>

              {/* Trigger Analysis Button */}
              <div className="text-center">
                <Button
                  variant="primary"
                  size="xl"
                  icon={Sparkles}
                  iconPosition="right"
                  glow
                  onClick={handleRunAnalysis}
                  className="w-full sm:w-auto font-black text-base px-10 py-4.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-xl transition-all"
                >
                  Analizar Futuro en 10 Segundos
                </Button>
                
                <p className="mt-3 text-[11px] font-bold text-slate-400">
                  ⚡ Diagnóstico instantáneo basado en modelos de conducta financiera familiar
                </p>
              </div>

            </div>
          )}

          {/* ANIMATED LOADING SEQUENCE */}
          {isAnalyzing && (
            <div className="py-12 text-center space-y-6 animate-fade-in">
              <div className="relative mx-auto h-20 w-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-100 border-t-emerald-600 animate-spin"></div>
                <Brain className="h-8 w-8 text-emerald-600 animate-pulse" />
              </div>

              <div className="max-w-md mx-auto">
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  PROCESANDO MODELO PREDICTIVO
                </span>
                
                <h4 className="mt-4 text-base sm:text-lg font-black text-slate-900 transition-all duration-300 min-h-[50px] flex items-center justify-center">
                  {LOADING_MESSAGES[loadingStep]}
                </h4>

                <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden border border-slate-200">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((loadingStep + 1) / LOADING_MESSAGES.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC MICRO-DIAGNOSTIC RESULT */}
          {result && !isAnalyzing && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Header Result */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${result.riskBadgeColor}`}>
                    Nivel de Riesgo 2035: {result.riskLevel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    {result.riskTitle}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-500 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Probar otro monto</span>
                </button>
              </div>

              {/* Warning projection box */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900">
                  <p className="font-bold">{result.projection2035}</p>
                  <p className="mt-1 text-amber-800/90 font-medium">{result.riskDescription}</p>
                </div>
              </div>

              {/* System Solution Breakdown */}
              <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center gap-2 text-emerald-900 mb-3">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <h4 className="text-sm font-black uppercase tracking-wide">
                    {result.solutionTitle}
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  {result.solutionPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Savings projection badge */}
                <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">
                    Impacto acumulado proyectado:
                  </span>
                  <span className="text-xs font-black text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                    {result.projectedSavings}
                  </span>
                </div>
              </div>

              {/* Direct Action CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
                  El programa incluye el simulador de 7 días y la guía completa para padres.
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  glow
                  onClick={handleGoToOffer}
                  className="w-full sm:w-auto font-black text-xs sm:text-sm px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md"
                >
                  Comenzar Transformación ($12 USD)
                </Button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
