/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  PiggyBank, 
  Sparkles, 
  Calendar, 
  Target, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Award,
  Zap,
  Smile,
  Coins,
  Compass
} from 'lucide-react';
import { SectionHeader, Badge, Button, Card } from './ui/design-system';

interface PresetGoal {
  id: string;
  name: string;
  emoji: string;
  amount: number;
  description: string;
  motivation: string;
}

const PRESET_GOALS: PresetGoal[] = [
  {
    id: 'bicicleta',
    name: 'Bicicleta nueva',
    emoji: '🚲',
    amount: 120,
    description: 'Para pasear y disfrutar al aire libre.',
    motivation: '¡Pedaleando hacia el éxito! Ahorrando de forma constante, tu hijo sentirá la satisfacción de estrenar su bicicleta sabiendo que fue fruto de su disciplina.'
  },
  {
    id: 'consola',
    name: 'Consola de videojuegos',
    emoji: '🎮',
    amount: 300,
    description: 'Para divertirse con sus juegos favoritos.',
    motivation: '¡Subiendo de nivel financiero! Una meta grande enseña que con paciencia y perseverancia se pueden alcanzar grandes sueños sin caer en deudas.'
  },
  {
    id: 'patineta',
    name: 'Patineta / Skateboard',
    emoji: '🛹',
    amount: 60,
    description: 'Aprender trucos y divertirse en el parque.',
    motivation: '¡Meta en marcha! Un objetivo alcanzable a corto plazo es ideal para que los niños experimenten la emoción de cumplir su primer gran reto de ahorro.'
  },
  {
    id: 'zapatillas',
    name: 'Zapatillas favoritas',
    emoji: '👟',
    amount: 80,
    description: 'Su modelo deportivo preferido.',
    motivation: '¡Pasos firmes hacia el futuro! Aprenderá a valorar cada compra y a distinguir entre un capricho impulsivo y una meta planificada con ilusión.'
  },
  {
    id: 'tablet',
    name: 'Tablet educativa',
    emoji: '📱',
    amount: 200,
    description: 'Para estudiar, leer y crear proyectos.',
    motivation: '¡Inversión en conocimiento! Ahorrar para una herramienta de aprendizaje refuerza su visión de que los recursos bien administrados multiplican oportunidades.'
  },
  {
    id: 'lego',
    name: 'Set de LEGO especial',
    emoji: '🚀',
    amount: 45,
    description: 'Construir naves y mundos creativos.',
    motivation: '¡Construyendo hábitos pieza por pieza! Pequeños ahorros semanales se convierten en grandes logros tangibles que aumentan su autoestima.'
  }
];

const WEEK_PRESETS = [
  { weeks: 4, label: '4 sem (1 mes)' },
  { weeks: 8, label: '8 sem (2 meses)' },
  { weeks: 12, label: '12 sem (3 meses)' },
  { weeks: 24, label: '24 sem (6 meses)' },
  { weeks: 52, label: '52 sem (1 año)' }
];

export default function SimuladorAhorro() {
  const [selectedGoalId, setSelectedGoalId] = useState<string>('bicicleta');
  const [goalAmount, setGoalAmount] = useState<number>(120);
  const [weeks, setWeeks] = useState<number>(8);

  const selectedPreset = PRESET_GOALS.find(g => g.id === selectedGoalId);

  const handleSelectPreset = (preset: PresetGoal) => {
    setSelectedGoalId(preset.id);
    setGoalAmount(preset.amount);
  };

  const handleAmountSliderChange = (newAmount: number) => {
    setGoalAmount(newAmount);
    // Check if matches an existing preset
    const match = PRESET_GOALS.find(g => g.amount === newAmount);
    if (match) {
      setSelectedGoalId(match.id);
    } else {
      setSelectedGoalId('custom');
    }
  };

  // Calculations
  const weeklyAmount = useMemo(() => {
    if (weeks <= 0) return 0;
    return goalAmount / weeks;
  }, [goalAmount, weeks]);

  const dailyAmount = useMemo(() => {
    return weeklyAmount / 7;
  }, [weeklyAmount]);

  // Motivational message generator
  const motivationalMessage = useMemo(() => {
    if (selectedPreset && selectedGoalId !== 'custom') {
      return selectedPreset.motivation;
    }

    if (weeklyAmount <= 5) {
      return '¡Un objetivo súper accesible! Con menos de lo que cuesta una merienda semanal, tu hijo descubrirá que ahorrar es fácil y divertido.';
    } else if (weeklyAmount <= 15) {
      return '¡El ritmo ideal de constancia! Con un esfuerzo pequeño cada semana, tu hijo desarrollará autocontrol y orgullo al ver crecer su alcancía.';
    } else if (weeklyAmount <= 35) {
      return '¡Un gran reto para campeones! Dividir esta meta en semanas le enseña a planificar y a no desanimarse frente a objetivos importantes.';
    } else {
      return '¡Meta ambiciosa y emocionante! Enseña a tu hijo a combinar ahorro con pequeñas iniciativas creativas para alcanzar la meta aún más rápido.';
    }
  }, [selectedPreset, selectedGoalId, weeklyAmount]);

  // Comparison snack context
  const comparisonContext = useMemo(() => {
    if (dailyAmount <= 1.0) {
      return 'Equivale a menos de 1 dulce o golosina al día.';
    } else if (dailyAmount <= 2.5) {
      return 'Equivale a menos de lo que cuesta un helado al día.';
    } else if (dailyAmount <= 5.0) {
      return 'Equivale al costo de una merienda sencilla.';
    } else {
      return 'Equivale a un compromiso familiar colaborativo.';
    }
  }, [dailyAmount]);

  const handleScrollToOffer = () => {
    const el = document.getElementById('oferta-checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'https://pay.hotmart.com/O106740525J';
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-16 lg:py-24 border-b border-slate-100 relative overflow-hidden" id="simulador-ahorro">
      {/* Subtle ambient lighting */}
      <div className="absolute top-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tag="HERRAMIENTA INTERACTIVA"
          tagVariant="emerald"
          title="Simulador de Ahorro para Niños"
          subtitle="Haz la prueba: elige una meta y el tiempo que quiere ahorrar. Descubre qué tan fácil es para tu hijo alcanzar lo que se proponga con el método adecuado."
        />

        {/* Simulator Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* LEFT COLUMN: Interactive Sliders & Presets (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Goal Selector Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300/80 transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                      1. Elige una Meta de Ahorro
                    </h3>
                    <p className="text-xs text-slate-500">
                      Selecciona un ejemplo o usa la barra para un monto personalizado
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-xl">
                  <span className="text-xs font-bold text-sky-700">Meta:</span>
                  <span className="font-mono text-xl font-black text-sky-800">${goalAmount}</span>
                  <span className="text-[10px] font-bold text-sky-600">USD</span>
                </div>
              </div>

              {/* Goal Presets Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
                {PRESET_GOALS.map((preset) => {
                  const isSelected = selectedGoalId === preset.id && goalAmount === preset.amount;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`flex flex-col text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-sky-50 to-emerald-50/50 border-sky-500 ring-2 ring-sky-500/20 shadow-xs'
                          : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-2xl">{preset.emoji}</span>
                        <span className={`text-xs font-black px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-sky-600 text-white' : 'bg-slate-200/70 text-slate-700'
                        }`}>
                          ${preset.amount}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-800 truncate">
                        {preset.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Slider for Goal Amount */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
                  <span>Ajustar valor exacto:</span>
                  <span className="text-slate-700 font-mono font-black">${goalAmount} USD</span>
                </div>
                
                <div className="relative flex items-center">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={goalAmount}
                    onChange={(e) => handleAmountSliderChange(Number(e.target.value))}
                    className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600 transition-all hover:bg-slate-300"
                  />
                </div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1.5">
                  <span>$10</span>
                  <span>$150</span>
                  <span>$300</span>
                  <span>$500+</span>
                </div>
              </div>

            </div>

            {/* 2. Weeks Slider Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300/80 transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                      2. Semanas Ahorrando
                    </h3>
                    <p className="text-xs text-slate-500">
                      ¿En cuánto tiempo desea tu hijo completar su meta?
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl">
                  <span className="text-xs font-bold text-emerald-700">Tiempo:</span>
                  <span className="font-mono text-xl font-black text-emerald-800">{weeks}</span>
                  <span className="text-[10px] font-bold text-emerald-600">{weeks === 1 ? 'semana' : 'semanas'}</span>
                </div>
              </div>

              {/* Quick Week Presets */}
              <div className="flex flex-wrap gap-2 mb-5">
                {WEEK_PRESETS.map((preset) => {
                  const isSelected = weeks === preset.weeks;
                  return (
                    <button
                      key={preset.weeks}
                      type="button"
                      onClick={() => setWeeks(preset.weeks)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-800'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>

              {/* Slider for Weeks */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
                  <span>Mover barra de tiempo:</span>
                  <span className="text-slate-700 font-mono font-black">{weeks} semanas ({Math.round((weeks / 4) * 10) / 10} meses)</span>
                </div>
                
                <div className="relative flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="52"
                    step="1"
                    value={weeks}
                    onChange={(e) => setWeeks(Number(e.target.value))}
                    className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-emerald-600 transition-all hover:bg-slate-300"
                  />
                </div>
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1.5">
                  <span>1 sem</span>
                  <span>12 sem</span>
                  <span>26 sem</span>
                  <span>52 sem</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Results Dashboard & Motivational Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Result Box */}
            <div className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between flex-1">
              
              {/* Decorative top badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                  <Sparkles className="h-3.5 w-3.5" /> Plan de Ahorro Calculado
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {weeks * 7} días totales
                </span>
              </div>

              {/* Central Result: Weekly Savings Number */}
              <div className="my-6 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  Tu hijo debe guardar sólo:
                </span>
                
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">$</span>
                  <span className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono">
                    {weeklyAmount.toFixed(2)}
                  </span>
                  <span className="text-sm font-bold text-slate-400 uppercase">/ semana</span>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-300">
                  <Coins className="h-3.5 w-3.5 text-amber-400" />
                  <span>Aprox. ${dailyAmount.toFixed(2)} al día</span>
                </div>
                
                <p className="mt-2 text-xs text-slate-400">
                  {comparisonContext}
                </p>
              </div>

              {/* Progress Milestones Visualizer */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-2.5">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1 text-sky-400">
                    <TrendingUp className="h-3.5 w-3.5" /> Hito Final:
                  </span>
                  <span className="font-mono text-emerald-400 font-black">${goalAmount} USD</span>
                </div>

                {/* Progress Visual Track */}
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 flex gap-1">
                  <div className="h-full w-1/4 rounded-full bg-sky-500" title="Semana inicial (25%)"></div>
                  <div className="h-full w-1/4 rounded-full bg-sky-400" title="Medio camino (50%)"></div>
                  <div className="h-full w-1/4 rounded-full bg-emerald-500" title="Recta final (75%)"></div>
                  <div className="h-full w-1/4 rounded-full bg-emerald-400 animate-pulse" title="¡Meta Cumplida! (100%)"></div>
                </div>

                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>25% (${(goalAmount * 0.25).toFixed(0)})</span>
                  <span>50% (${(goalAmount * 0.5).toFixed(0)})</span>
                  <span>75% (${(goalAmount * 0.75).toFixed(0)})</span>
                  <span className="text-emerald-400 font-bold">100% (${goalAmount})</span>
                </div>
              </div>

              {/* Motivational Card */}
              <div className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-sky-950/70 p-4 border border-emerald-800/60">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <Smile className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                      Mensaje Motivacional para tu Hijo:
                    </h4>
                    <p className="mt-1 text-xs text-slate-200 leading-relaxed font-medium">
                      "{motivationalMessage}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Call */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleScrollToOffer}
                  icon={ArrowRight}
                  iconPosition="right"
                  glow
                  className="w-full font-black text-sm py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg cursor-pointer"
                >
                  Enseñar a mi hijo a lograrlo
                </Button>
                <p className="mt-2 text-[11px] text-slate-400">
                  Aprende la técnica de las 3 alcancías y retos gamificados en el programa.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Pedagogical benefit callout below simulator */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  ¿Por qué este método funciona mejor que darles dinero sin más?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Cuando un niño fija una meta visual y ve progresar sus números semana a semana, desarrolla paciencia, autocontrol y valora cada esfuerzo.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Método 100% Práctico
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
