import React from 'react';
import { Badge, Card, SectionHeader } from './ui/design-system';
import { Baby, Trophy, Rocket, Target, PiggyBank, Sparkles } from 'lucide-react';

export default function Etapas() {
  const tiers = [
    {
      age: "👶 Niños pequeños",
      tagline: "Visualizar • Ahorrar • Valorar",
      color: "emerald" as const,
      icon: Baby,
      badgeText: "Bases",
      description: "Asienta una relación sana con el dinero mediante experiencias visuales que hacen tangible el progreso de sus esfuerzos."
    },
    {
      age: "🧒 De 5 a 12 años",
      tagline: "Organizar • Planificar • Decidir",
      color: "indigo" as const,
      icon: Target,
      badgeText: "Hábitos",
      description: "Aprende a asignar propósito a cada moneda, desarrollar metas y tomar mejores decisiones antes de gastar."
    },
    {
      age: "🧑 De 13 a 15 años",
      tagline: "Emprender • Administrar • Invertir",
      color: "purple" as const,
      icon: Rocket,
      badgeText: "Futuro",
      description: "Desarrolla criterio financiero mediante presupuestos, emprendimiento y simulaciones seguras adaptadas a su edad."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/70 border-t border-b border-slate-100 py-16 lg:py-20" id="etapas-crecimiento">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header containing persuasion tags */}
        <SectionHeader
          tag="Ruta Pedagógica"
          tagVariant="indigo"
          title="Ideal para cada etapa de crecimiento"
          subtitle="Desde los primeros conceptos de ahorro hasta las decisiones financieras más avanzadas para adolescentes."
          className="mb-10"
        />

        {/* 3 Grid system - One for each age block */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier, idx) => {
            const IconComponent = tier.icon;
            
            // Map colors to design-system compatible variables dynamic mapping
            const borderColors = {
              emerald: "border-emerald-100 hover:border-emerald-200",
              indigo: "border-indigo-100 hover:border-indigo-200",
              purple: "border-purple-100 hover:border-purple-200"
            };
            
            const badgeVariants = {
              emerald: "emerald" as const,
              indigo: "indigo" as const,
              purple: "purple" as const
            };

            const headerColors = {
              emerald: "text-emerald-700 bg-emerald-50",
              indigo: "text-indigo-700 bg-indigo-50",
              purple: "text-purple-700 bg-purple-50"
            };

            return (
              <Card 
                key={idx} 
                variant="interactive" 
                className={`relative flex flex-col p-6 sm:p-8 bg-white border ${borderColors[tier.color]} transition-all duration-300 shadow-sm rounded-3xl`}
              >
                {/* Visual Accent Corner Decor */}
                <div className={`absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl opacity-5 rounded-tr-3xl pointer-events-none ${
                  tier.color === 'emerald' ? 'from-emerald-500' : tier.color === 'indigo' ? 'from-indigo-500' : 'from-purple-500'
                }`}></div>

                {/* Card Top Information */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <Badge variant={badgeVariants[tier.color]}>
                    {tier.badgeText}
                  </Badge>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${headerColors[tier.color]}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                {/* Age & Core Skills */}
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  {tier.age}
                </h3>
                
                <div className={`mt-2 inline-block text-xs font-black tracking-wider uppercase ${
                  tier.color === 'emerald' ? 'text-emerald-600' : tier.color === 'indigo' ? 'text-indigo-600' : 'text-purple-600'
                }`}>
                  {tier.tagline}
                </div>

                {/* Soft Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {tier.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Dynamic age banner connector bottom */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500 border border-amber-100">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs sm:text-sm font-black text-slate-900">¿Qué pasa si mi hijo está entre dos edades?</p>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">El programa utiliza un enfoque progresivo que permite avanzar al ritmo de cada niño sin frustraciones ni presión.</p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="inline-block rounded-full bg-slate-900 text-slate-150 px-3 py-1 text-[10px] font-black tracking-wider uppercase">
              ✅ 100% adaptable
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
