/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Play, RotateCcw, AlertCircle, Sparkles, TrendingUp, DollarSign, ArrowRight,
  TrendingDown, CheckCircle2, Award, Zap, HelpCircle
} from 'lucide-react';
import { InvestmentProject, SimulatorState } from '../types';

const PROJECTS: InvestmentProject[] = [
  {
    id: 'limonada',
    name: '🍋 Limonada Express',
    description: 'Vendes limonada fresca en el parque los fines de semana. ¡Siempre hay sed y calor!',
    risk: 'Bajo',
    growth: 'Medio',
    riskColor: 'bg-emerald-100 text-emerald-800',
    growthColor: 'bg-blue-100 text-blue-800',
    details: 'Poco riesgo. Si llueve vendes un poco menos, pero si hace sol vendes todo.'
  },
  {
    id: 'juguetes',
    name: '🧸 Juguetes con Historia',
    description: 'Reparas y decoras juguetes antigos para darles una segunda vida y revenderlos.',
    risk: 'Medio',
    growth: 'Alto',
    riskColor: 'bg-yellow-100 text-yellow-800',
    growthColor: 'bg-purple-100 text-purple-800',
    details: 'Riesgo moderado. Algunos juguetes tardan en venderse, pero obtienes buenas ganancias.'
  },
  {
    id: 'huerto',
    name: '🍓 Eco-Huerto de Fresas',
    description: 'Siembras fresas orgánicas en el jardín para vender deliciosas cajitas a tus vecinos.',
    risk: 'Bajo',
    growth: 'Bajo',
    riskColor: 'bg-emerald-100 text-emerald-800',
    growthColor: 'bg-emerald-50 text-emerald-700',
    details: 'Muy seguro y constante. El huerto siempre da fresas si las riegas, aunque el precio es estable.'
  },
  {
    id: 'robots',
    name: '🤖 RoboEducación',
    description: 'Inviertes en comprar kits de robots educativos para rentar en talleres de ciencia.',
    risk: 'Alto',
    growth: 'Muy Alto',
    riskColor: 'bg-red-100 text-red-800',
    growthColor: 'bg-amber-100 text-amber-800',
    details: 'Alto riesgo. Si a las escuelas les gusta, duplicas tu dinero. Si prefieren la teoría, ganas poco.'
  }
];

// Fun events for each day of simulation to teach lessons
const DAILY_EVENTS: Record<number, { title: string; desc: string; multipliers: Record<string, number> }> = {
  1: {
    title: '☀️ Ola de Calor Extrema',
    desc: 'Hace muchísimo calor en la ciudad. ¡Todo el mundo busca refrescarse con urgencia!',
    multipliers: { limonada: 1.4, huerto: 1.1, juguetes: 0.9, robots: 1.0 }
  },
  2: {
    title: '🌧️ Tormenta Sorpresa',
    desc: 'Llovió toda la tarde. El parque quedó vacío y nadie salió a comprar provisiones.',
    multipliers: { limonada: 0.6, huerto: 0.8, juguetes: 1.1, robots: 1.0 }
  },
  3: {
    title: '📰 Viral en Redes Sociales',
    desc: 'Un video en TikTok elogió la idea de reparar juguetes ecológicos y cuidar el planeta.',
    multipliers: { limonada: 1.0, huerto: 1.0, juguetes: 1.6, robots: 1.1 }
  },
  4: {
    title: '🐛 Plaga de Orugas Silvestres',
    desc: 'Pequeños insectos invadieron una sección de las plantas de fresa. ¡Hubo que actuar rápido!',
    multipliers: { limonada: 1.0, huerto: 0.6, juguetes: 1.0, robots: 1.0 }
  },
  5: {
    title: '🏫 Gran Feria Escolar de Ciencia',
    desc: 'Una escuela local contrató de inmediato todos los kits de robótica para su evento anual.',
    multipliers: { limonada: 1.1, huerto: 1.0, juguetes: 1.0, robots: 1.8 }
  },
  6: {
    title: '🍋 Subida del Limón',
    desc: 'El precio de los limones subió temporalmente, por lo que la limonada es más cara de preparar.',
    multipliers: { limonada: 0.7, huerto: 1.1, juguetes: 1.0, robots: 1.0 }
  },
  7: {
    title: '🎉 Mercadillo del Barrio',
    desc: 'Se celebra el festival vecinal de cierre de semana. ¡Hay abundante tránsito de familias curiosas!',
    multipliers: { limonada: 1.3, huerto: 1.3, juguetes: 1.3, robots: 1.2 }
  }
};

export default function Simulator() {
  const [state, setState] = useState<SimulatorState>({
    balance: 100,
    allocations: { limonada: 0, juguetes: 0, huerto: 0, robots: 0 },
    history: [100],
    currentDay: 0,
    events: ['¡Prepárate! Distribuye tus $100 iniciales entre los proyectos antes de iniciar.'],
    isSimulating: false,
    isFinished: false
  });

  const totalAllocated = (Object.values(state.allocations) as number[]).reduce((a: number, b: number) => a + b, 0);
  const remainingCash = state.balance - totalAllocated;

  const handleAllocationChange = (projectId: string, val: number) => {
    if (state.isSimulating || state.isFinished) return;

    // Check if the update is safe
    const prevAlloc = state.allocations[projectId] || 0;
    const proposedAlloc = Math.max(0, val);
    const difference = proposedAlloc - prevAlloc;

    if (difference <= remainingCash) {
      setState(prev => ({
        ...prev,
        allocations: {
          ...prev.allocations,
          [projectId]: proposedAlloc
        }
      }));
    } else {
      // Allocate the maximum remaining cash
      const maxPossible = prevAlloc + remainingCash;
      setState(prev => ({
        ...prev,
        allocations: {
          ...prev.allocations,
          [projectId]: maxPossible
        }
      }));
    }
  };

  const startSimulation = () => {
    if (totalAllocated === 0) {
      alert('¡Por favor, invierte al menos un poco de dinero en algún proyecto!');
      return;
    }

    setState(prev => ({
      ...prev,
      isSimulating: true,
      currentDay: 1,
      events: ['Iniciando la semana de inversiones...']
    }));
  };

  // Run simulation day by day
  useEffect(() => {
    if (!state.isSimulating) return;
    if (state.currentDay > 7) {
      setState(prev => ({ ...prev, isSimulating: false, isFinished: true }));
      return;
    }

    const timer = setTimeout(() => {
      const day = state.currentDay;
      const event = DAILY_EVENTS[day];
      
      // Calculate returns for this day
      let dailyEarnings = 0;
      let breakdown: string[] = [];

      PROJECTS.forEach(proj => {
        const allocated = state.allocations[proj.id] || 0;
        if (allocated > 0) {
          // Base daily profit rate (randomized slightly based on risk)
          let baseRate = 0;
          if (proj.risk === 'Bajo') baseRate = 0.05 + Math.random() * 0.04; // 5-9%
          else if (proj.risk === 'Medio') baseRate = 0.10 + Math.random() * 0.08; // 10-18%
          else if (proj.risk === 'Alto') baseRate = 0.20 + Math.random() * 0.15; // 20-35%
          
          // Apply event multiplier
          const multiplier = event.multipliers[proj.id] ?? 1.0;
          const finalRate = baseRate * multiplier;
          
          // Kids can lose money on high risk or severe events
          // Let's cap minimum returns so they don't go to zero instantly, but feel the realistic variance
          const profitOrLoss = Math.round(allocated * finalRate * (Math.random() > 0.4 ? 1 : -0.6));
          dailyEarnings += profitOrLoss;

          if (profitOrLoss >= 0) {
            breakdown.push(`+ $${profitOrLoss} de ${proj.name.split(' ')[1]}`);
          } else {
            breakdown.push(`- $${Math.abs(profitOrLoss)} de ${proj.name.split(' ')[1]}`);
          }
        }
      });

      // Keep cash not invested safe (it yields 0)
      const cashNotInvested = state.balance - totalAllocated;
      const newBalance = Math.max(10, state.balance + dailyEarnings);
      
      // Update allocations of remaining value proportionally so they can't exceed new value,
      // or simply keep allocations static as "initial investment" and update current balance sheet!
      // Static allocation model is easier: the kid invested a chunk, the earnings or losses are added/subtracted to total bank.
      
      setState(prev => {
        const nextDay = prev.currentDay + 1;
        const newHistory = [...prev.history, newBalance];
        const eventText = `Día ${day} [${event.title}]: ${event.desc} | Resultados: ${breakdown.join(', ') || 'Sin inversiones activas'}.`;
        
        return {
          ...prev,
          balance: newBalance,
          history: newHistory,
          currentDay: nextDay,
          events: [...prev.events, eventText],
          isSimulating: nextDay <= 7
        };
      });

    }, 2200); // 2.2 seconds per day to allow children to read the event and see charts move

    return () => clearTimeout(timer);
  }, [state.isSimulating, state.currentDay, state.allocations, state.balance, totalAllocated]);

  const resetSimulation = () => {
    setState({
      balance: 100,
      allocations: { limonada: 0, juguetes: 0, huerto: 0, robots: 0 },
      history: [100],
      currentDay: 0,
      events: ['Simulador reiniciado. ¡Distribuye tus $100 e intenta una estrategia diferente!'],
      isSimulating: false,
      isFinished: false
    });
  };

  const growthPercentage = Math.round(((state.balance - 100) / 100) * 100);

  // Helper to draw beautiful SVG path for the performance chart
  const getSvgPath = () => {
    const width = 300;
    const height = 120;
    const padding = 10;
    const pts = state.history;
    if (pts.length < 2) return '';

    const maxVal = Math.max(...pts, 150);
    const minVal = Math.min(...pts, 80);
    const range = maxVal - minVal || 1;

    return pts.map((val, i) => {
      const x = padding + (i / 7) * (width - padding * 2);
      const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-50 glow-green" id="inversiones-simulador">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 uppercase tracking-widest border border-emerald-100">
            <Sparkles className="h-3.5 w-3.5" /> Bono #3: Demo Interactiva
          </span>
          <h3 className="mt-1.5 text-2xl font-extrabold text-slate-800 tracking-tight">
            Simulador de Finanzas Infantiles
          </h3>
          <p className="text-sm text-slate-500">
            Prueba cómo tu hijo aprenderá a multiplicar dinero de forma 100% segura.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-slate-900 px-4 py-2.5 text-white shadow-md">
            <span className="block text-[9px] font-bold text-emerald-400 uppercase tracking-wider text-center">
              Saldo Disponible
            </span>
            <div className="flex items-center justify-center font-mono text-2xl font-black">
              <DollarSign className="h-5 w-5 text-emerald-400" />
              <span>{remainingCash}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simulator Core Layout */}
      <div className="grid gap-6 md:grid-cols-12">
        
        {/* Left Side: Investments form */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="rounded-lg bg-emerald-50/50 p-4 border border-emerald-100/60">
            <div className="flex items-start gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-extrabold text-white">
                1
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800 leading-tight">
                  Distribuye los $100 iniciales
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Usa los controles para invertir dinero en cada proyecto. ¡Mantente dentro del límite de $100!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {PROJECTS.map(proj => {
              const currentAlloc = state.allocations[proj.id] || 0;
              return (
                <div key={proj.id} className="relative rounded-xl border border-gray-100 bg-slate-50/30 p-4 transition-all hover:bg-slate-50/60 hover:border-gray-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                        {proj.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {proj.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${proj.riskColor}`}>
                        Riesgo: {proj.risk}
                      </span>
                      <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${proj.growthColor}`}>
                        Rendimiento: {proj.growth}
                      </span>
                    </div>
                  </div>

                  {/* Range slider and input */}
                  <div className="flex items-center gap-4 mt-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={currentAlloc}
                      disabled={state.isSimulating || state.isFinished}
                      onChange={e => handleAllocationChange(proj.id, parseInt(e.target.value) || 0)}
                      className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-emerald-500 disabled:opacity-50"
                    />
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={state.isSimulating || state.isFinished || currentAlloc <= 0}
                        onClick={() => handleAllocationChange(proj.id, currentAlloc - 10)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white font-black text-slate-700 hover:bg-gray-50 active:scale-95 disabled:opacity-40"
                      >
                        -
                      </button>
                      
                      <div className="w-14 text-center font-mono text-sm font-bold bg-white border border-gray-200 py-1 rounded-lg">
                        ${currentAlloc}
                      </div>

                      <button
                        type="button"
                        disabled={state.isSimulating || state.isFinished || remainingCash <= 0}
                        onClick={() => handleAllocationChange(proj.id, currentAlloc + 10)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white font-black text-slate-700 hover:bg-gray-50 active:scale-95 disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {!state.isSimulating && !state.isFinished && (
              <button
                type="button"
                onClick={startSimulation}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-emerald-700 active:scale-98 shadow-md hover:shadow-lg hover:shadow-emerald-100 cursor-pointer"
              >
                <Play className="h-4 w-4" /> COMENZAR RETO DE 7 DÍAS
              </button>
            )}

            {state.isSimulating && (
              <div className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-extrabold text-white animate-pulse">
                <Zap className="h-4 w-4 animate-bounce" /> SIMULANDO DÍA {state.currentDay} DE 7...
              </div>
            )}

            {state.isFinished && (
              <button
                type="button"
                onClick={resetSimulation}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-slate-900 active:scale-98 cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" /> REINICIAR Y PROBAR DE NUEVO
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Log and Real-time Results Screen */}
        <div className="md:col-span-5 flex flex-col gap-4">
          
          {/* Virtual Tablet Screen */}
          <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-slate-950 p-4 text-slate-100 border-4 border-slate-800 shadow-xl min-h-[340px]">
            {/* Tablet Camera details */}
            <div className="absolute top-1.5 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-slate-800"></div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Simulador 7 Días v1.0
              </span>
              <span className="rounded-full bg-emerald-950 px-2 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-900">
                ● RETO EN VIVO
              </span>
            </div>

            {/* Screen main content */}
            <div className="flex flex-1 flex-col justify-between py-2">
              
              {/* Top balance card */}
              <div className="text-center my-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block font-semibold">
                  Saldo Total Bancario
                </span>
                <span className="text-4xl font-extrabold tracking-tight text-white font-mono flex items-center justify-center gap-1">
                  <span className="text-emerald-400 text-3xl">$</span>
                  {state.balance}
                </span>

                {/* Growth performance indicator */}
                {state.history.length > 1 && (
                  <div className="mt-1 flex items-center justify-center gap-1">
                    {growthPercentage >= 0 ? (
                      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-400">
                        <TrendingUp className="h-3 w-3" /> +{growthPercentage}%
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-0.5 text-xs font-bold text-rose-400">
                        <TrendingDown className="h-3 w-3" /> {growthPercentage}%
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400 font-medium">desde el inicio</span>
                  </div>
                )}
              </div>

              {/* Chart container */}
              <div className="my-2 flex h-24 items-center justify-center bg-slate-900/50 rounded-xl relative border border-slate-900">
                <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#1e293b" strokeDasharray="3,3" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#1e293b" strokeDasharray="3,3" />
                  
                  {/* Performance Path */}
                  {state.history.length > 1 && (
                    <path
                      d={getSvgPath()}
                      fill="none"
                      stroke={growthPercentage >= 0 ? '#10b981' : '#f43f5e'}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  )}
                </svg>

                <div className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-500">
                  Día: {state.history.length - 1} / 7
                </div>
              </div>

              {/* Day Feed list */}
              <div className="flex-1 overflow-y-auto max-h-[140px] pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                {state.events.slice().reverse().map((evt, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-lg p-2 text-xs leading-relaxed border ${
                      idx === 0 
                        ? 'bg-slate-900 text-white font-medium border-slate-800' 
                        : 'bg-slate-950/40 text-slate-400 border-transparent'
                    }`}
                  >
                    {evt}
                  </div>
                ))}
              </div>

              {/* Success Result at end */}
              {state.isFinished && (
                <div className="mt-3 bg-gradient-to-r from-emerald-950/70 to-emerald-900/40 p-3 rounded-xl border border-emerald-800 text-center animate-fade-in">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-slate-950 mb-1.5">
                    <Award className="h-5 w-5" />
                  </div>
                  <h5 className="font-extrabold text-sm text-emerald-400">
                    ¡Felicidades, Simulador Escolar Completado!
                  </h5>
                  <p className="text-[10px] text-emerald-100 mt-1">
                    {growthPercentage >= 15 
                      ? 'Excelente criterio de diversificación y gestión de riesgos. ¡Tienes un pequeño genio inversionista!' 
                      : '¡Buen intento! Cada decisión enseña una lección valiosa. Intenta diversificar más la próxima vez.'}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Quick Info Tip */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex gap-2">
              <HelpCircle className="h-4.5 w-4.5 shrink-0 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-700 leading-tight">
                  ¿Por qué simular antes de invertir?
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Los niños recuerdan el 90% de lo que viven. Con el programa <strong>Pequeño Inversionista</strong>, ellos utilizan divertidos juegos de este tipo para entender los ciclos, pérdidas y ganancias antes de poner un solo centavo real.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
