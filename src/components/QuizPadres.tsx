/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  TrendingUp, 
  Award, 
  Brain, 
  AlertCircle,
  Lightbulb,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SectionHeader, Badge, Button, Card } from './ui/design-system';

interface Question {
  id: number;
  question: string;
  subtitle: string;
  contextYes: string;
  contextNo: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: '1. ¿Sabe qué es un presupuesto?',
    subtitle: '¿Comprende que el dinero es limitado y cómo distribuirlo entre distintas necesidades?',
    contextYes: '¡Genial! Reconoce la importancia de planificar sus recursos.',
    contextNo: 'Común en la mayoría de niños: suelen ver el dinero como una fuente ilimitada.'
  },
  {
    id: 2,
    question: '2. ¿Ahorra su dinero recibido?',
    subtitle: 'Cuando recibe propinas, mesadas o regalos de cumpleaños, ¿guarda una parte voluntariamente?',
    contextYes: '¡Excelente hábito! Ya tiene una inclinación hacia el ahorro.',
    contextNo: 'Suele gastarlo de inmediato en lo primero que le llama la atención.'
  },
  {
    id: 3,
    question: '3. ¿Entiende la diferencia entre deseo y necesidad?',
    subtitle: '¿Sabe distinguir entre lo que realmente le hace falta y un capricho o impulso momentáneo?',
    contextYes: '¡Muy bien! Demuestra madurez y autocontrol al elegir.',
    contextNo: 'Tiende a pedir compras impulsivas motivadas por la publicidad o las modas.'
  }
];

export default function QuizPadres() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null
  });

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleAnswer = (questionId: number, value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    // Auto advance if in step mode
    if (questionId < 3) {
      setCurrentStep(questionId + 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({ 1: null, 2: null, 3: null });
    setCurrentStep(1);
  };

  const answeredCount = Object.values(answers).filter(v => v !== null).length;
  const isCompleted = answeredCount === 3;
  const yesCount = Object.values(answers).filter(v => v === true).length;

  // Custom diagnosis based on score
  const diagnosis = (() => {
    if (!isCompleted) return null;

    if (yesCount === 3) {
      return {
        badge: 'Pequeño Visionario 🌟',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        scoreLabel: '3 de 3 respuestas afirmativas (100%)',
        headline: '¡Tu hijo tiene una excelente intuición financiera!',
        description: 'Ya comprende las bases esenciales del dinero y el autocontrol. El siguiente paso crucial es enseñarle cómo poner a trabajar ese dinero mediante la inversión y el pensamiento emprendedor sin ningún riesgo.',
        actionText: 'Llevar sus habilidades al siguiente nivel',
        recommendation: 'El programa Pequeño Inversionista le enseñará a multiplicar sus ahorros con simuladores y retos de inversión reales para niños.'
      };
    } else if (yesCount === 2) {
      return {
        badge: 'Ahorrador en Desarrollo 🚀',
        badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
        scoreLabel: '2 de 3 respuestas afirmativas (66%)',
        headline: '¡Tiene muy buen potencial, pero necesita estructura!',
        description: 'Cuenta con hábitos positivos, pero aún existen brechas en su disciplina o en su capacidad de diferenciar impulsos de necesidades reales. Con una metodología práctica y divertida de 7 días, afianzará su mentalidad para toda la vida.',
        actionText: 'Consolidar sus hábitos financieros hoy',
        recommendation: 'Con las plantillas y el método de las 3 alcancías del curso, aprenderá a priorizar gastos y a planificar metas con total claridad.'
      };
    } else if (yesCount === 1) {
      return {
        badge: 'Explorador Financiero 🌱',
        badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        scoreLabel: '1 de 3 respuestas afirmativas (33%)',
        headline: '¡Está en el momento exacto para aprender!',
        description: 'A esta edad los niños absorben todo lo que ven. Si no se les enseña educación financiera ahora, la publicidad y el entorno moldearán hábitos de consumo descontrolados. Estás a tiempo de darle la mejor ventaja formativa.',
        actionText: 'Transformar su relación con el dinero',
        recommendation: 'El programa está diseñado con juegos y videos de 5 a 10 minutos para que entienda el presupuesto y el ahorro sin aburrirse.'
      };
    } else {
      return {
        badge: 'Oportunidad de Oro 💡',
        badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
        scoreLabel: '0 de 3 respuestas afirmativas',
        headline: '¡Completamente normal! La escuela nunca enseña esto.',
        description: 'Más del 85% de los niños comienza exactamente en este punto porque el sistema educativo tradicional ignora las finanzas. No te preocupes: con solo 7 días de actividades prácticas, tu hijo comprenderá el valor real del dinero.',
        actionText: 'Darle la educación que no enseñan en la escuela',
        recommendation: 'Aprenderá desde cero el origen del dinero, la regla del ahorro y cómo evitar berrinches por compras impulsivas.'
      };
    }
  })();

  const handleGoToCheckout = () => {
    const el = document.getElementById('oferta-checkout');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'https://pay.hotmart.com/O106740525J';
    }
  };

  return (
    <section className="bg-slate-50/70 py-16 lg:py-24 border-y border-slate-100 relative overflow-hidden" id="quiz-padres">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-10 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tag="TEST RÁPIDO PARA PADRES"
          tagVariant="blue"
          title="¿Qué tan financiero es tu hijo?"
          subtitle="Responde estas 3 preguntas en menos de 30 segundos y descubre el diagnóstico de madurez financiera de tu hijo y qué necesita para mejorar."
        />

        {/* Quiz Container Card */}
        <div className="mt-10 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-lg shadow-slate-100/60 relative overflow-hidden">
          
          {/* Progress Tracker Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Brain className="h-4 w-4 text-emerald-600" />
                Progreso del test: {answeredCount} de 3 preguntas respondidas
              </span>
              <span className="font-mono text-emerald-600 font-extrabold">
                {Math.round((answeredCount / 3) * 100)}%
              </span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${(answeredCount / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {QUESTIONS.map((q) => {
              const currentAns = answers[q.id];
              const isAnswered = currentAns !== null;

              return (
                <div 
                  key={q.id}
                  className={`rounded-2xl border p-5 sm:p-6 transition-all duration-200 ${
                    isAnswered 
                      ? 'border-slate-200 bg-slate-50/50' 
                      : 'border-sky-200/80 bg-white shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        {q.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                        {q.subtitle}
                      </p>
                    </div>

                    {/* Yes / No Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleAnswer(q.id, true)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                          currentAns === true
                            ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-600/30'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-800'
                        }`}
                      >
                        <CheckCircle2 className={`h-4 w-4 ${currentAns === true ? 'text-white' : 'text-emerald-600'}`} />
                        <span>Sí</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAnswer(q.id, false)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
                          currentAns === false
                            ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-600/30'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-800'
                        }`}
                      >
                        <XCircle className={`h-4 w-4 ${currentAns === false ? 'text-white' : 'text-rose-600'}`} />
                        <span>No</span>
                      </button>
                    </div>
                  </div>

                  {/* Immediate feedback pill if answered */}
                  {isAnswered && (
                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-600">
                      <span className={`inline-block h-2 w-2 rounded-full ${currentAns ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      <span>{currentAns ? q.contextYes : q.contextNo}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RESULTS CARD (Appears upon completing the 3 questions) */}
          {isCompleted && diagnosis && (
            <div className="mt-8 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl animate-fade-in">
              
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                    Diagnóstico Personalizado
                  </span>
                </div>
                
                <span className={`text-xs font-black px-3 py-1 rounded-full border ${diagnosis.badgeColor}`}>
                  {diagnosis.badge}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {diagnosis.scoreLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {diagnosis.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {diagnosis.description}
                </p>

                {/* Recommendation Box */}
                <div className="rounded-2xl bg-emerald-950/60 border border-emerald-800/80 p-4 flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                      Consejo Clave:
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      {diagnosis.recommendation}
                    </p>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleGoToCheckout}
                    icon={ArrowRight}
                    iconPosition="right"
                    glow
                    className="w-full sm:flex-1 font-black text-sm sm:text-base py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg cursor-pointer"
                  >
                    {diagnosis.actionText}
                  </Button>

                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Repetir Test</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 font-bold pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Garantía de satisfacción 7 días
                  </span>
                  <span>•</span>
                  <span>Acceso de por vida</span>
                </div>
              </div>

            </div>
          )}

          {/* Helper notice if not completed yet */}
          {!isCompleted && (
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 text-center">
              <Zap className="h-4 w-4 text-sky-500" />
              <span>Selecciona Sí o No en cada pregunta para ver el diagnóstico personalizado de tu hijo.</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
