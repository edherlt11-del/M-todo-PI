/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  FolderCheck,
  Zap,
  Lock,
  Unlock,
  Layers,
  FileSpreadsheet,
  Gamepad2,
  Users
} from 'lucide-react';
import { Button } from './ui/design-system';

interface UnlockedAsset {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const UNLOCKED_ASSETS: UnlockedAsset[] = [
  {
    id: 'kit-niveles',
    title: 'Kit Digital Completo (Niveles 1, 2 y 3)',
    category: 'Módulos Pedagógicos',
    description: 'Videos explicativos, cuentos ilustrados y guías paso a paso adaptadas para 3 a 16+ años.',
    icon: Layers,
    badge: 'Desbloqueado'
  },
  {
    id: 'simulador',
    title: 'Simulador Infantil de Ahorro e Inversión',
    category: 'Herramienta Interactiva',
    description: 'Dinámica interactiva de 7 días para que tu hijo experimente decisiones con dinero ficticio sin riesgo.',
    icon: Gamepad2,
    badge: 'Listo para usar'
  },
  {
    id: 'banco-imprimibles',
    title: 'Sistema de Banco Familiar & Imprimibles',
    category: 'Plantillas y Fichas',
    description: 'Hojas de retos, tablas visuales para el refrigerador y método de las 3 alcancías.',
    icon: FileSpreadsheet,
    badge: 'Formato PDF Imprimible'
  },
  {
    id: 'comunidad-acceso',
    title: 'Comunidad de Padres & Actualizaciones de por Vida',
    category: 'Acompañamiento Continuo',
    description: 'Acceso ilimitado 24/7 a la plataforma privada, sin fechas de caducidad ni cuotas mensuales.',
    icon: Users,
    badge: 'Acceso Vitalicio'
  }
];

export default function Pricing() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const audioPlayedRef = useRef<boolean>(false);

  // Play a soft synthetic audio chime when checklist unlocks (using Web Audio API)
  const playSoftChime = (freq = 587.33) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio context might be restricted before user gesture; gracefully fallback
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sequentially check off assets with animation
          UNLOCKED_ASSETS.forEach((_, idx) => {
            setTimeout(() => {
              setCheckedItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
              if (!audioPlayedRef.current) {
                playSoftChime(520 + idx * 80);
              }
            }, 250 * (idx + 1));
          });
          audioPlayedRef.current = true;
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const handleCheckout = () => {
    window.location.href = 'https://pay.hotmart.com/O106740525J';
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-slate-950 py-16 text-slate-100 lg:py-24 relative overflow-hidden border-t border-slate-900" 
      id="oferta-checkout"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/90 border border-emerald-500/30 px-4 py-1.5 text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">
            <FolderCheck className="h-3.5 w-3.5" />
            <span>RESUMEN DE RECURSOS DESBLOQUEADOS</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl leading-tight">
            Tus recursos están listos para descarga y activación inmediata
          </h2>

          <p className="mt-3 text-sm text-slate-400 font-medium">
            Has completado la exploración de la ruta. Todo el material ha sido empaquetado para que comiences hoy mismo con tu familia.
          </p>
        </div>

        {/* Unlocked Assets Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm max-w-3xl mx-auto">
          
          {/* Header of the Asset Box */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                Paquete Familiar Completo
              </span>
            </div>
            
            <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60 font-mono">
              {checkedItems.length} de {UNLOCKED_ASSETS.length} Elementos Verificados
            </span>
          </div>

          {/* Sequential Checklist of Assets */}
          <div className="mt-5 space-y-3.5">
            {UNLOCKED_ASSETS.map((asset, index) => {
              const Icon = asset.icon;
              const isChecked = checkedItems.includes(index);

              return (
                <div 
                  key={asset.id}
                  className={`p-4 rounded-2xl border transition-all duration-500 flex items-start gap-4 ${
                    isChecked 
                      ? 'bg-slate-950/80 border-emerald-500/40 shadow-sm shadow-emerald-500/5' 
                      : 'bg-slate-950/30 border-slate-800/80 opacity-60'
                  }`}
                >
                  {/* Visual Animated Check Icon */}
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                    isChecked 
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-md scale-100 animate-check-pop' 
                      : 'bg-slate-800 text-slate-500 scale-95'
                  }`}>
                    {isChecked ? (
                      <CheckCircle2 className="h-5 w-5 fill-slate-950 text-emerald-400" />
                    ) : (
                      <span className="text-xs font-bold">{index + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                      <h4 className={`text-sm font-black transition-colors ${
                        isChecked ? 'text-white' : 'text-slate-400'
                      }`}>
                        {asset.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                        isChecked 
                          ? 'bg-emerald-950/90 text-emerald-300 border-emerald-800/70' 
                          : 'bg-slate-800 text-slate-500 border-slate-700'
                      }`}>
                        {asset.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transparent Lifetime Activation Fee Summary */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-slate-950/90 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
            
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Cuota de Activación Única de por Vida
              </span>

              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  $12
                </span>
                <span className="text-sm font-black text-emerald-400 uppercase tracking-wider">
                  USD
                </span>
                <span className="text-xs font-bold text-slate-500 ml-1">
                  (Pago único • Sin cobros recurrentes)
                </span>
              </div>

              <p className="text-xs text-slate-400 font-medium mt-1">
                Descarga instantánea y acceso vitalicio a todas las herramientas.
              </p>
            </div>

            {/* Direct Activation CTA Button */}
            <div className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="xl"
                icon={Download}
                iconPosition="right"
                glow
                onClick={handleCheckout}
                className="w-full sm:w-auto font-black text-sm sm:text-base px-8 py-4.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl shadow-xl shadow-emerald-500/20 cursor-pointer"
              >
                Activar y Descargar Recursos
              </Button>
            </div>

          </div>

        </div>

        {/* Security & Clarity Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400 text-center">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Garantía incondicional de 7 días
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-sky-400" /> Entrega digital inmediata 24/7
          </span>
          <span>•</span>
          <span>Sin suscripciones</span>
        </div>

      </div>
    </section>
  );
}
