/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AlertTriangle, ShieldCheck, Flame, Zap, CheckCircle } from 'lucide-react';

interface TermometroRiesgoProps {
  percentage: number; // 0, 50, 95
  isVibrating?: boolean;
  isEscudoActive?: boolean;
  stageName?: string;
}

export default function TermometroRiesgo({
  percentage,
  isVibrating = false,
  isEscudoActive = false,
  stageName = "Auditoría de Patrón Financiero"
}: TermometroRiesgoProps) {
  const [displayValue, setDisplayValue] = useState(percentage);

  // Smooth interpolation for the digital number
  useEffect(() => {
    let start = displayValue;
    const end = percentage;
    if (start === end) return;

    const duration = 700;
    const startTime = performance.now();

    const animateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * ease);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [percentage]);

  // Determine state zone
  let zoneColor = "text-emerald-500";
  let zoneBg = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
  let zoneLabel = "ZONA VERDE • 0% RIESGO REGISTRADO";
  let glowClass = "glow-green";

  if (percentage >= 80) {
    zoneColor = "text-rose-500";
    zoneBg = "bg-rose-500/20 border-rose-500/40 text-rose-400";
    zoneLabel = "ZONA ROJA • 95% RIESGO CRÍTICO DE REPETICIÓN";
    glowClass = "glow-red";
  } else if (percentage >= 30) {
    zoneColor = "text-amber-400";
    zoneBg = "bg-amber-500/20 border-amber-500/40 text-amber-400";
    zoneLabel = "ZONA AMARILLA • 50% RIESGO MODERADO";
    glowClass = "glow-amber";
  }

  if (isEscudoActive) {
    zoneColor = "text-emerald-400";
    zoneBg = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
    zoneLabel = "🛡️ ESCUDO DE ENFRIAMIENTO ACTIVO • PROTEGIENDO FUTURO";
    glowClass = "glow-green";
  }

  // Calculate needle angle from -90 deg (0%) to +90 deg (100%)
  const needleAngle = -90 + (displayValue / 100) * 180;

  return (
    <div 
      className={`relative w-full max-w-md mx-auto p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl transition-all duration-500 ${glowClass} ${
        isVibrating ? 'animate-gauge-vibrate' : ''
      }`}
      id="termometro-riesgo-component"
    >
      {/* Ambient background aura */}
      <div 
        className={`absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-32 blur-3xl pointer-events-none rounded-full transition-colors duration-700 ${
          percentage >= 80 ? 'bg-rose-600/30' : percentage >= 30 ? 'bg-amber-500/25' : 'bg-emerald-500/20'
        }`}
      />

      {/* Top Header Tag */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider">
          {percentage >= 80 ? (
            <Flame className="h-4 w-4 text-rose-500 animate-pulse" />
          ) : percentage >= 30 ? (
            <Zap className="h-4 w-4 text-amber-400" />
          ) : (
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
          )}
          <span>{stageName}</span>
        </div>
        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
          NEURO-AUDIT v3.0
        </span>
      </div>

      {/* Speedometer Gauge Graphic */}
      <div className="relative flex flex-col items-center justify-center pt-2 pb-1">
        <svg 
          viewBox="0 0 300 165" 
          className="w-full max-w-[280px] sm:max-w-[320px] overflow-visible drop-shadow-md"
        >
          <defs>
            {/* Semicircular gradient arc */}
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="35%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>

            <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track Arc (Grey track) */}
          <path
            d="M 30 145 A 120 120 0 0 1 270 145"
            fill="none"
            stroke="#1e293b"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Colored Gradient Arc */}
          <path
            d="M 30 145 A 120 120 0 0 1 270 145"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            className="transition-all duration-700"
          />

          {/* Zone Dividers / Tick marks */}
          {/* 0% Start */}
          <line x1="30" y1="145" x2="18" y2="145" stroke="#10b981" strokeWidth="2.5" />
          {/* 33% Transition */}
          <line x1="85" y1="65" x2="76" y2="55" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
          {/* 50% Top Marker */}
          <line x1="150" y1="25" x2="150" y2="12" stroke="#f59e0b" strokeWidth="2.5" />
          {/* 66% Transition */}
          <line x1="215" y1="65" x2="224" y2="55" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
          {/* 100% Danger Marker */}
          <line x1="270" y1="145" x2="282" y2="145" stroke="#ef4444" strokeWidth="2.5" />

          {/* Sub-labels in SVG */}
          <text x="32" y="162" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="start">
            SEGURO
          </text>
          <text x="150" y="42" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
            MODERADO
          </text>
          <text x="268" y="162" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="end">
            CRÍTICO
          </text>

          {/* Dynamic Needle */}
          <g 
            transform={`rotate(${needleAngle}, 150, 145)`}
            className="transition-transform duration-700 ease-out"
          >
            {/* Needle line */}
            <path
              d="M 148 145 L 149.5 35 L 150.5 35 L 152 145 Z"
              fill={percentage >= 80 ? "#f87171" : percentage >= 30 ? "#fbbf24" : "#34d399"}
              filter="url(#gaugeGlow)"
            />
            {/* Center pointer point */}
            <polygon
              points="146,145 150,30 154,145"
              fill="#ffffff"
            />
          </g>

          {/* Center Hub/Cap */}
          <circle cx="150" cy="145" r="14" fill="#0f172a" stroke="#475569" strokeWidth="3" />
          <circle 
            cx="150" 
            cy="145" 
            r="7" 
            fill={percentage >= 80 ? "#ef4444" : percentage >= 30 ? "#f59e0b" : "#10b981"}
            className="transition-colors duration-500" 
          />
        </svg>

        {/* Big Digital Readout in Center */}
        <div className="-mt-6 text-center z-10">
          <div className="flex items-baseline justify-center gap-1">
            <span 
              className={`text-4xl sm:text-5xl font-black tracking-tight font-mono transition-colors duration-500 ${
                percentage >= 80 ? 'text-rose-400' : percentage >= 30 ? 'text-amber-400' : 'text-emerald-400'
              }`}
            >
              {displayValue}%
            </span>
            <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
              {percentage >= 80 ? "RIESGO ALTO" : percentage >= 30 ? "RIESGO" : "RIESGO"}
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Zone Pill */}
      <div className="mt-2 text-center">
        <div 
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-black tracking-wide transition-all duration-500 ${zoneBg}`}
        >
          {percentage >= 80 ? (
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 animate-bounce" />
          ) : percentage >= 30 ? (
            <Zap className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <CheckCircle className="h-3.5 w-3.5 shrink-0" />
          )}
          <span>{zoneLabel}</span>
        </div>
      </div>

      {/* Micro-guide explanation */}
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium px-1">
        <span>Transmisión Intergeneracional</span>
        <span className="font-bold text-slate-300">
          {percentage === 0 && "Nivel 0: Sin medición"}
          {percentage === 50 && "Nivel 1: Alerta Temprana"}
          {percentage === 95 && "Nivel 2: Bloqueo Urgente Requerido"}
        </span>
      </div>
    </div>
  );
}
