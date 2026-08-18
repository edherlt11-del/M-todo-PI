/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  Video, 
  Headphones, 
  BookOpen, 
  Target, 
  Printer, 
  Globe, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Trophy, 
  Award, 
  Gamepad2, 
  ArrowRight,
  Zap,
  Check,
  Star
} from 'lucide-react';
import { SectionHeader, Button } from './ui/design-system';

interface LevelMission {
  id: number;
  missionNumber: string;
  ageRange: string;
  title: string;
  subtitle: string;
  themeColor: string;
  badgeBg: string;
  borderColor: string;
  activeRing: string;
  glowColor: string;
  rewardTitle: string;
  rewardDesc: string;
  desc: string;
  questObjectives: string[];
  powerUps: string[];
  keyTool: string;
}

const MISSIONS: LevelMission[] = [
  {
    id: 1,
    missionNumber: "MISIÓN 1",
    ageRange: "3 a 5+ años",
    title: "Primeros Pasos y Valor del Dinero",
    subtitle: "Aprender de dónde viene el dinero y el valor de esperar",
    themeColor: "sky",
    badgeBg: "bg-sky-100 text-sky-800 border-sky-200",
    borderColor: "border-sky-300",
    activeRing: "ring-4 ring-sky-400/30",
    glowColor: "from-sky-500 to-teal-500",
    rewardTitle: "Recompensa de Misión 1",
    rewardDesc: "🎁 Desbloqueaste: El truco de la alcancía transparente + Cuento visual interactivo",
    desc: "Comprenderá de dónde viene el dinero, para qué sirve y el valor del ahorro mediante juegos interactivos, cuentos y actividades visuales tangibles.",
    questObjectives: [
      "Entender que el dinero se genera con trabajo, tiempo y esfuerzo (no es infinito).",
      "Aprender a clasificar monedas y billetes jugando en familia.",
      "Desarrollar paciencia con el reto de la primera alcancía visual."
    ],
    powerUps: ["Cuentos ilustrados", "Juegos de compra simulada", "Plantilla de primera alcancía"],
    keyTool: "Cuentos ilustrados + Actividades visuales de alcancía"
  },
  {
    id: 2,
    missionNumber: "MISIÓN 2",
    ageRange: "5 a 12+ años",
    title: "Ahorro Inteligente y Metas Reales",
    subtitle: "Organizar, presupuestar su mesada y frenar impulsos",
    themeColor: "emerald",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    borderColor: "border-emerald-400",
    activeRing: "ring-4 ring-emerald-500/30",
    glowColor: "from-emerald-500 to-teal-500",
    rewardTitle: "Recompensa de Misión 2",
    rewardDesc: "🎁 Desbloqueaste: El método de las 3 alcancías + Simulador infantil de 7 días",
    desc: "Aprenderá a fijar metas de ahorro concretas (como su bicicleta o juguetes), administrar su asignación semanal y diferenciar con total claridad entre necesidades e impulsos.",
    questObjectives: [
      "Dividir sus ingresos en 3 destinos: Ahorro, Disfrute personal y Donación.",
      "Controlar la impulsividad antes de comprar y evitar berrinches.",
      "Monitorear su progreso semanal con el tablero de metas."
    ],
    powerUps: ["Simulador de 7 días", "Regla de las 3 alcancías", "Hojas de metas semanales"],
    keyTool: "Plantillas de ahorro + Simulador de 7 días"
  },
  {
    id: 3,
    missionNumber: "MISIÓN 3",
    ageRange: "12 a 16+ años",
    title: "Decisiones Financieras y Futuro",
    subtitle: "Mentalidad de inversionista, presupuesto real y anti-deudas",
    themeColor: "amber",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
    borderColor: "border-amber-400",
    activeRing: "ring-4 ring-amber-500/30",
    glowColor: "from-amber-500 to-emerald-500",
    rewardTitle: "Recompensa de Misión 3",
    rewardDesc: "🎁 Desbloqueaste: Guía de Primer Presupuesto + Simulador de Inversiones Juvenil",
    desc: "Descubrirá cómo funciona el presupuesto real, la planificación a largo plazo, los principios básicos de la inversión sin riesgos y la importancia de protegerse contra las deudas.",
    questObjectives: [
      "Crear y controlar su primer presupuesto mensual personal con ingresos y gastos.",
      "Entender cómo el dinero puede crecer mediante inversiones seguras sin riesgo.",
      "Blindarse contra las trampas de tarjetas de crédito y deudas de consumo."
    ],
    powerUps: ["Planificador mensual", "Simulador de interés", "Guía anti-deudas"],
    keyTool: "Guía de primer presupuesto + Retos de inversión juvenil"
  }
];

const LEVEL_FORMAT_FEATURES = [
  { icon: Video, label: "Videos Explicativos", sub: "Cortos y visuales para niños" },
  { icon: Headphones, label: "Versión Audio / Podcast", sub: "Para escuchar en el auto o antes de dormir" },
  { icon: BookOpen, label: "Guía Práctica en Ebook", sub: "Formato digital descargable" },
  { icon: Target, label: "Actividades en Casa", sub: "Dinámicas familiares listas para usar" },
  { icon: Printer, label: "Materiales Imprimibles", sub: "Plantillas e instructivos de retos" }
];

export default function Aprende() {
  // Unlocked levels state (Level 1 is unlocked by default)
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [recentReward, setRecentReward] = useState<string | null>(
    "🎁 Misión 1 Desbloqueada: El truco de la alcancía transparente"
  );
  const [showUnlockEffect, setShowUnlockEffect] = useState<boolean>(false);

  const handleSelectLevel = (levelId: number) => {
    // If level is not unlocked, check if it can be unlocked now
    if (!unlockedLevels.includes(levelId)) {
      // Must have unlocked previous level
      const prevLevel = levelId - 1;
      if (!unlockedLevels.includes(prevLevel)) {
        return; // Still locked
      }

      // Unlock this level
      setUnlockedLevels((prev) => [...prev, levelId]);
      setShowUnlockEffect(true);
      setTimeout(() => setShowUnlockEffect(false), 2000);
    }

    setSelectedLevelId(levelId);

    // If level 1 was clicked and level 2 was locked, automatically unlock level 2 to show progression
    if (levelId === 1 && !unlockedLevels.includes(2)) {
      setUnlockedLevels((prev) => [...prev, 2]);
      setRecentReward("🏆 ¡Misión 1 Completada! Nivel 2 desbloqueado: El método de las 3 alcancías");
      setShowUnlockEffect(true);
      setTimeout(() => setShowUnlockEffect(false), 2000);
    } else if (levelId === 2 && !unlockedLevels.includes(3)) {
      setUnlockedLevels((prev) => [...prev, 3]);
      setRecentReward("🏆 ¡Misión 2 Completada! Nivel 3 desbloqueado: Decisiones e Inversión");
      setShowUnlockEffect(true);
      setTimeout(() => setShowUnlockEffect(false), 2000);
    } else {
      const currentMission = MISSIONS.find(m => m.id === levelId);
      if (currentMission) {
        setRecentReward(currentMission.rewardDesc);
      }
    }
  };

  const currentMission = MISSIONS.find((m) => m.id === selectedLevelId) || MISSIONS[0];

  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white relative overflow-hidden border-y border-slate-800" id="que-incluye">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          tag="RUTA DE MISIONES GAMIFICADA"
          tagVariant="emerald"
          title="Mapa de Niveles del Programa"
          subtitle="Una aventura de 3 etapas diseñada como un videojuego educativo donde tu hijo desbloquea habilidades financieras reales."
          className="text-white [&_p]:text-slate-300"
        />

        {/* Video Game Mission Map (Interactive Nodes connected by dashed path) */}
        <div className="mt-12 max-w-4xl mx-auto">
          
          {/* Milestone Nodes Route Header */}
          <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            
            {/* Connecting Dashed Path Line */}
            <div className="hidden sm:block absolute top-[52px] left-[15%] right-[15%] h-1 border-t-2 border-dashed border-slate-700 pointer-events-none -z-0"></div>

            {/* Glowing active progress line fill */}
            <div 
              className="hidden sm:block absolute top-[52px] left-[15%] h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 transition-all duration-700 ease-out -z-0"
              style={{
                width: unlockedLevels.length === 1 ? '10%' : unlockedLevels.length === 2 ? '50%' : '70%'
              }}
            ></div>

            {/* 3 Interactive Milestone Nodes */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
              {MISSIONS.map((mission) => {
                const isUnlocked = unlockedLevels.includes(mission.id);
                const isSelected = selectedLevelId === mission.id;
                const isNextUnlockable = !isUnlocked && unlockedLevels.includes(mission.id - 1);

                return (
                  <div key={mission.id} className="flex flex-col items-center">
                    
                    {/* Interactive Node Button */}
                    <button
                      type="button"
                      onClick={() => handleSelectLevel(mission.id)}
                      className={`relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl transition-all duration-500 cursor-pointer ${
                        isSelected
                          ? `bg-gradient-to-tr ${mission.glowColor} text-slate-950 font-black shadow-xl shadow-emerald-500/20 scale-110 ring-4 ring-white/30`
                          : isUnlocked
                          ? 'bg-slate-800 text-white hover:bg-slate-700 hover:scale-105 border border-slate-600'
                          : 'bg-slate-900/90 text-slate-500 border border-slate-800 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      {/* Inner Node Icon */}
                      {isUnlocked ? (
                        <div className="flex flex-col items-center">
                          {isSelected ? (
                            <Gamepad2 className="h-7 w-7 text-slate-950 animate-bounce" />
                          ) : (
                            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                          )}
                          <span className="text-[10px] font-black mt-0.5">Nivel {mission.id}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Lock className="h-6 w-6 text-slate-600" />
                          <span className="text-[10px] font-bold mt-0.5">Nivel {mission.id}</span>
                        </div>
                      )}

                      {/* Active indicator beacon */}
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                        </span>
                      )}
                    </button>

                    {/* Node Labels */}
                    <div className="mt-3">
                      <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isSelected 
                          ? mission.badgeBg 
                          : isUnlocked 
                          ? 'bg-slate-800 text-slate-300 border-slate-700' 
                          : 'bg-slate-900 text-slate-600 border-slate-800'
                      }`}>
                        {mission.ageRange}
                      </span>
                      
                      <h4 className={`text-xs sm:text-sm font-black mt-1.5 leading-snug transition-colors ${
                        isSelected ? 'text-white' : isUnlocked ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {mission.title}
                      </h4>

                      <p className="text-[11px] font-bold text-slate-400 mt-0.5 hidden sm:block">
                        {isUnlocked ? (isSelected ? '⭐ Nivel Activo' : '✓ Desbloqueado') : '🔒 Completa el anterior'}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Micro-Reward Notification Banner (Dynamic Pop-Up) */}
            {recentReward && (
              <div className={`mt-8 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-sky-950/90 border border-emerald-500/40 flex items-center justify-between gap-3 shadow-lg transition-all duration-500 ${
                showUnlockEffect ? 'scale-105 ring-2 ring-emerald-400' : 'scale-100'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black shadow-md">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                      Recompensa de Progreso
                    </span>
                    <p className="text-xs sm:text-sm font-black text-white leading-tight">
                      {recentReward}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex text-[11px] font-black uppercase bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                  Progreso: {unlockedLevels.length}/3 Niveles
                </span>
              </div>
            )}

          </div>

          {/* Active Level Quest Card (Smoothly Revealed Details) */}
          <div className="mt-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-unlock-reveal">
            
            {/* Corner Decor Accent */}
            <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-3xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black uppercase px-3 py-1 rounded-full border ${currentMission.badgeBg}`}>
                  {currentMission.missionNumber} • {currentMission.ageRange}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {currentMission.subtitle}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-800/60">
                <Zap className="h-3.5 w-3.5" />
                <span>Herramienta: {currentMission.keyTool}</span>
              </div>
            </div>

            {/* Mission Core Description */}
            <p className="mt-5 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              {currentMission.desc}
            </p>

            {/* Quest Objectives Grid */}
            <div className="mt-6 bg-slate-900/90 rounded-2xl p-5 border border-slate-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                Objetivos de la Misión (Lo que aprenderá tu hijo):
              </h4>
              
              <div className="grid gap-2.5 sm:grid-cols-3">
                {currentMission.questObjectives.map((obj, oIdx) => (
                  <div key={oIdx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-medium leading-snug">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Power-Ups Included */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-extrabold text-slate-400">Power-Ups incluidos:</span>
                {currentMission.powerUps.map((p, pIdx) => (
                  <span key={pIdx} className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700 font-bold">
                    ⚡ {p}
                  </span>
                ))}
              </div>

              {selectedLevelId < 3 && (
                <button
                  type="button"
                  onClick={() => handleSelectLevel(selectedLevelId + 1)}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-extrabold cursor-pointer transition-colors"
                >
                  <span>Siguiente Nivel</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Content Formats Included Inside (Clean Minimalist Grid) */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-lg sm:text-xl font-black text-white">
              ¿Qué formatos encontrarás en cada nivel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              Diseñado para que el aprendizaje sea ágil, visual y entretenido en familia.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {LEVEL_FORMAT_FEATURES.map((f, fidx) => {
              const Icon = f.icon;
              return (
                <div key={fidx} className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-sm flex flex-col items-center">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-2.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h5 className="text-xs font-black text-white leading-tight">
                    {f.label}
                  </h5>
                  <p className="text-[11px] text-slate-400 font-medium mt-1 leading-tight">
                    {f.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Platform Access Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-300 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 shadow-sm">
              <Globe className="h-4 w-4 text-sky-400 shrink-0" />
              <span>Todo organizado en una <strong>plataforma privada</strong> de acceso inmediato disponible 24/7.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
