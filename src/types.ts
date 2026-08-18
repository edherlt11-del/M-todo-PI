/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InvestmentProject {
  id: string;
  name: string;
  description: string;
  risk: 'Bajo' | 'Medio' | 'Alto' | 'Muy Alto';
  growth: 'Bajo' | 'Medio' | 'Alto' | 'Muy Alto';
  riskColor: string;
  growthColor: string;
  details: string;
}

export interface SimulatorState {
  balance: number;
  allocations: Record<string, number>;
  history: number[];
  currentDay: number;
  events: string[];
  isSimulating: boolean;
  isFinished: boolean;
}
