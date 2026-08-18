/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

// BADGE PROPS & COMPONENT
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'rose' | 'slate' | 'indigo' | 'blue' | 'purple' | 'outline' | 'dark';
  className?: string;
  icon?: LucideIcon;
}

export function Badge({ children, variant = 'slate', className = '', icon: Icon, ...props }: BadgeProps) {
  const baseClasses = "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border tracking-wide uppercase transition-all";
  
  const variants = {
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-100",
    amber: "bg-amber-50 text-amber-850 border-amber-100",
    rose: "bg-rose-50 text-rose-800 border-rose-100",
    slate: "bg-slate-50 text-slate-700 border-slate-100",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    dark: "bg-slate-950 text-slate-300 border-slate-800",
    outline: "bg-transparent text-slate-600 border-slate-200"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      <span>{children}</span>
    </span>
  );
}

// BUTTON PROPS & COMPONENT
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  iconPosition = 'right', 
  glow = false,
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center font-extrabold tracking-wide rounded-2xl transition-all active:scale-98 cursor-pointer text-center";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4.5 text-base rounded-2xl",
    xl: "px-10 py-5 text-lg rounded-[20px]"
  };

  const variantClasses = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
    secondary: "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-100/50",
    accent: "bg-amber-400 text-slate-900 hover:bg-amber-500 shadow-md",
    dark: "bg-slate-900 text-white hover:bg-slate-950 border border-slate-800",
    danger: "bg-rose-600 text-white hover:bg-rose-700 shadow-md",
    outline: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
  };

  const glowClass = glow ? "glow-btn" : "";

  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${glowClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-4.5 w-4.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-4.5 w-4.5" />}
    </button>
  );
}

// CARD PROPS & COMPONENT
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'flat' | 'interactive' | 'glow' | 'dark' | 'border';
  className?: string;
  id?: string;
}

export function Card({ children, variant = 'flat', className = '', id, ...props }: CardProps) {
  const baseClasses = "rounded-2xl transition-all overflow-hidden";
  
  const variantClasses = {
    flat: "bg-white border border-gray-100 shadow-sm",
    interactive: "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] hover:border-gray-200/80",
    glow: "bg-white border border-emerald-100 shadow-xl shadow-emerald-50/50 glow-green",
    dark: "bg-slate-950 border border-slate-800 shadow-2xl",
    border: "border-2 border-slate-200 bg-white"
  };

  return (
    <div id={id} className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

// SECTION HEADER PROPS & COMPONENT
export interface SectionHeaderProps {
  tag: string;
  tagVariant?: 'emerald' | 'amber' | 'rose' | 'slate' | 'indigo' | 'blue' | 'purple' | 'dark';
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ 
  tag, 
  tagVariant = 'emerald', 
  title, 
  subtitle, 
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <Badge variant={tagVariant}>{tag}</Badge>
      <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// LIST ITEM PROPS & COMPONENT
export interface ListItemProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'emerald' | 'rose' | 'slate';
  className?: string;
}

export function ListItem({ children, icon: Icon = CheckCircle2, variant = 'emerald', className = '' }: ListItemProps) {
  const iconColors = {
    emerald: "text-emerald-500",
    rose: "text-rose-500",
    slate: "text-slate-400"
  };

  return (
    <li className={`flex items-start gap-2.5 text-slate-600 ${className}`}>
      <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${iconColors[variant]}`} />
      <span className="text-sm leading-relaxed">{children}</span>
    </li>
  );
}
