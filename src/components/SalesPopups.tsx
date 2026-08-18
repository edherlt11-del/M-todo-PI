/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Check, Shield } from 'lucide-react';

interface SaleItem {
  name: string;
  location: string;
  product: string;
  timeText: string;
  avatarColor: string;
}

const SALES_DATA: SaleItem[] = [
  { name: "María de Jesús", location: "Ciudad de México", product: "Pequeño Inversionista", timeText: "acaba de comprar", avatarColor: "from-emerald-500 to-green-600 text-white" },
  { name: "Juan Carlos", location: "Bogotá", product: "el Plan VIP", timeText: "hace 3 minutos", avatarColor: "from-teal-500 to-emerald-600 text-white" },
  { name: "Carla", location: "Lima", product: "Pequeño Inversionista", timeText: "acaba de unirse al programa", avatarColor: "from-amber-500 to-orange-600 text-white" },
  { name: "Luis Alfonso", location: "Santiago", product: "el Plan VIP", timeText: "hace 5 minutos", avatarColor: "from-green-500 to-emerald-600 text-white" },
  { name: "Alejandro", location: "Buenos Aires", product: "Pequeño Inversionista", timeText: "hace 2 minutos", avatarColor: "from-blue-500 to-indigo-600 text-white" },
  { name: "Sofía", location: "Guadalajara", product: "Pequeño Inversionista", timeText: "hace 8 minutos", avatarColor: "from-rose-500 to-pink-600 text-white" },
  { name: "Mateo", location: "Medellín", product: "el Plan VIP", timeText: "hace 4 minutos", avatarColor: "from-teal-500 to-cyan-600 text-white" },
  { name: "Valentina", location: "Caracas", product: "Pequeño Inversionista", timeText: "acaba de unirse al programa", avatarColor: "from-pink-500 to-rose-600 text-white" },
  { name: "Diego", location: "Madrid", product: "el Programa Completo", timeText: "hace 10 minutos", avatarColor: "from-sky-500 to-blue-600 text-white" },
  { name: "Camila", location: "Montevideo", product: "Pequeño Inversionista", timeText: "hace 6 minutos", avatarColor: "from-orange-500 to-amber-600 text-white" },
  { name: "Lucas", location: "Quito", product: "el Plan VIP", timeText: "hace 15 minutos", avatarColor: "from-indigo-500 to-violet-600 text-white" },
  { name: "Isabella", location: "Guatemala", product: "Pequeño Inversionista", timeText: "acaba de comprar", avatarColor: "from-fuchsia-500 to-purple-600 text-white" },
  { name: "Sebastián", location: "San José", product: "el Plan VIP", timeText: "hace 1 minuto", avatarColor: "from-cyan-500 to-blue-600 text-white" },
  { name: "Mariana", location: "San Salvador", product: "Pequeño Inversionista", timeText: "hace 18 minutos", avatarColor: "from-red-500 to-rose-600 text-white" },
  { name: "Gabriel", location: "Asunción", product: "Pequeño Inversionista", timeText: "acaba de comprar", avatarColor: "from-emerald-500 to-emerald-700 text-white" },
  { name: "Andrea", location: "La Paz", product: "el Plan VIP", timeText: "hace 7 minutos", avatarColor: "from-yellow-500 to-amber-600 text-slate-900" },
  { name: "Nicolás", location: "Barcelona", product: "Pequeño Inversionista", timeText: "hace 11 minutos", avatarColor: "from-stone-600 to-slate-700 text-white" },
  { name: "Natalia", location: "Monterrey", product: "Pequeño Inversionista", timeText: "hace 4 minutos", avatarColor: "from-indigo-600 to-violet-700 text-white" },
  { name: "Daniel", location: "Cali", product: "el Plan VIP", timeText: "hace 9 minutos", avatarColor: "from-emerald-600 to-emerald-800 text-white" },
  { name: "Valeria", location: "Arequipa", product: "Pequeño Inversionista", timeText: "hace 25 minutos", avatarColor: "from-rose-600 to-pink-700 text-white" },
  { name: "Javier", location: "Valparaíso", product: "el Plan VIP", timeText: "hace 14 minutos", avatarColor: "from-emerald-500 to-green-600 text-white" },
  { name: "Paula", location: "Córdoba", product: "Pequeño Inversionista", timeText: "hace 8 minutos", avatarColor: "from-teal-600 to-cyan-700 text-white" },
  { name: "Tomás", location: "Rosario", product: "Pequeño Inversionista", timeText: "hace 30 minutos", avatarColor: "from-blue-600 to-indigo-700 text-white" },
  { name: "Lucía", location: "San Juan", product: "el Plan VIP", timeText: "hace 5 minutos", avatarColor: "from-purple-600 to-violet-700 text-white" },
  { name: "Felipe", location: "Medellín", product: "Pequeño Inversionista", timeText: "hace 13 minutos", avatarColor: "from-violet-600 to-purple-700 text-white" },
  { name: "Elena", location: "Sevilla", product: "el Plan VIP", timeText: "hace 17 minutos", avatarColor: "from-orange-600 to-red-600 text-white" },
  { name: "Andrés", location: "Lima", product: "Pequeño Inversionista", timeText: "hace 2 minutos", avatarColor: "from-pink-600 to-rose-700 text-white" },
  { name: "Victoria", location: "Querétaro", product: "Pequeño Inversionista", timeText: "hace 28 minutos", avatarColor: "from-sky-600 to-blue-700 text-white" }
];

export default function SalesPopups() {
  const [currentSale, setCurrentSale] = useState<SaleItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing the very first social proof popup (e.g. 7 seconds)
    let displayTimeout: NodeJS.Timeout;
    let transitionTimeout: NodeJS.Timeout;

    const showNextPopup = () => {
      // Pick a random sale item
      const randomIndex = Math.floor(Math.random() * SALES_DATA.length);
      const sale = SALES_DATA[randomIndex];
      
      setCurrentSale(sale);
      setIsVisible(true);

      // Keep it on screen for 6.5 seconds
      displayTimeout = setTimeout(() => {
        setIsVisible(false);

        // Schedule the next popup after a random interval between 15 and 40 seconds
        const randomSeconds = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
        transitionTimeout = setTimeout(showNextPopup, randomSeconds * 1000);
      }, 6500);
    };

    // Initial load timer (show 6 seconds after user lands)
    const initialTimer = setTimeout(showNextPopup, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(displayTimeout);
      clearTimeout(transitionTimeout);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const getInitials = (fullname: string) => {
    const parts = fullname.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return fullname.substring(0, 2).toUpperCase();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[340px] w-[calc(100%-2rem)] sm:w-80 pointer-events-none select-none">
      <AnimatePresence>
        {isVisible && currentSale && (
          <motion.div
            id="social-proof-sales-popup"
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="pointer-events-auto flex items-center gap-3.5 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-100 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.06),0_4px_12px_-2px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            {/* Soft decorative emerald border effect */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-emerald-500" />

            {/* Avatar / Initials container with verification check stamp */}
            <div className="relative shrink-0">
              <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${currentSale.avatarColor} flex items-center justify-center font-bold text-sm tracking-tight shadow-inner`}>
                {getInitials(currentSale.name)}
              </div>
              <div className="absolute -bottom-1.5 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white border-2 border-white shadow-sm">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
            </div>

            {/* Message Body */}
            <div className="flex-1 pr-4 min-w-0 text-left">
              <p className="text-[13px] text-slate-800 font-medium leading-normal">
                <span className="font-bold text-slate-900">{currentSale.name}</span>
                {' de '}
                <span className="font-semibold text-slate-700">{currentSale.location}</span>
              </p>
              <p className="text-[12px] text-slate-500 leading-snug mt-0.5">
                Adquirió{' '}
                <span className="font-semibold text-emerald-600">{currentSale.product}</span>
              </p>
              
              {/* Timing metadata */}
              <div className="flex items-center gap-1.5 mt-1">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  {currentSale.timeText}
                </span>
                <span className="text-[10px] text-slate-350">•</span>
                <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-0.5">
                  <Shield className="h-2.5 w-2.5 text-emerald-500/80 inline stroke-[2]" /> Compra Segura
                </span>
              </div>
            </div>

            {/* Manual dismissal close button */}
            <button
              onClick={handleClose}
              type="button"
              className="absolute top-2.5 right-2.5 h-6 w-6 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors pointer-events-auto"
              aria-label="Cerrar notificación"
            >
              <X className="h-3.5 w-3.5 stroke-[2.5]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
