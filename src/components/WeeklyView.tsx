import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { WEEKLY_DATA } from '../constants';
import { DayMenu } from '../types';
import { Leaf, Utensils, Verified } from 'lucide-react';

export default function WeeklyView({ onDaySelect }: { onDaySelect: (day: DayMenu) => void }) {
  const currentHighlightDate = '2026-05-21';

  return (
    <div className="px-6 space-y-8">
      {/* Header */}
      <section className="mt-8 relative">
        <div className="relative z-10 text-left">
          <span className="text-brand-tertiary font-medium text-[11px] uppercase tracking-[0.2em] mb-2 block">Weekly Selection</span>
          <h2 className="text-4xl font-display text-brand-primary tracking-tight leading-tight">5월 넷째 주<br/>식단표</h2>
          <p className="text-brand-secondary mt-2 font-medium">May 18 - May 22, 2026</p>
        </div>
        <div className="absolute -top-4 -right-2 w-24 h-24 z-0 opacity-20 transform rotate-12">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_0y0sWVl-cfHrosb9wnRFVK3TbHQFWgWgpik2GQZRLB2At7tXY09nYactZBReOaE7Ep9QeOgraxUHaO4AKRuJZjkOO-YgSEIKdZnG0eWu7DjyXIhj5GRuqOWHemZ9nXDlxDji7cpcYFJhu6zhVZCM-js-a05AXVFTxYjrLJHujsiNq-hg03_qS2NAFccwPMGz5Bagtf7MzqDMjIwdtB85gwjWI4zUyyw7YpZW0OzZiEwpSr1E6JPFjF3TL_nOSYJw1tvCeXRCjcg" alt="Chef Chick" />
        </div>
      </section>

      {/* Week Navigator */}
      <div className="flex justify-between items-end bg-brand-surface-container p-4 rounded-3xl organic-shadow">
        {WEEKLY_DATA.map((day) => {
          const isHighlighted = day.date === currentHighlightDate;
          return (
            <div key={day.date} className="text-center group flex flex-col items-center">
              <p className={`text-[10px] font-bold mb-1 ${isHighlighted ? 'text-brand-primary font-black' : 'text-brand-secondary/60'}`}>
                {day.dayName}
              </p>
              <button 
                onClick={() => onDaySelect(day)}
                className={`w-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  isHighlighted 
                    ? 'h-14 bg-brand-primary text-white shadow-lg -translate-y-2' 
                    : 'h-10 bg-brand-bg text-brand-on-surface'
                }`}
              >
                {day.date.split('-')[2]}
              </button>
            </div>
          );
        })}
      </div>

      {/* Featured Menu Card */}
      <div 
        onClick={() => onDaySelect(WEEKLY_DATA[3])}
        className="bg-brand-surface-high rounded-[32px] overflow-hidden organic-shadow relative cursor-pointer"
      >
        <div className="h-48 w-full relative">
          <img 
            src={WEEKLY_DATA[3].menu.image} 
            className="w-full h-full object-cover" 
            alt="Featured Menu" 
          />
          <div className="absolute top-4 right-4 bg-brand-primary/90 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">Chef's Pick</div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div className="text-left">
              <span className="text-brand-tertiary font-semibold text-[10px] uppercase tracking-widest">오늘의 메인</span>
              <h3 className="text-2xl font-display text-brand-primary mt-1">{WEEKLY_DATA[3].menu.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-brand-primary font-bold text-lg">{WEEKLY_DATA[3].menu.calories}</span>
              <span className="text-brand-secondary text-[11px] font-medium block">kcal</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-brand-primary/5 pt-6 text-left">
            <SideItem name={WEEKLY_DATA[3].menu.staple} />
            <SideItem name={WEEKLY_DATA[3].menu.soup} />
            <SideItem name={WEEKLY_DATA[3].menu.traditional} />
            <SideItem name={WEEKLY_DATA[3].menu.side} />
          </div>
        </div>
      </div>

      {/* Grid for other days */}
      <div className="grid grid-cols-2 gap-4">
        {[WEEKLY_DATA[2], WEEKLY_DATA[4]].map((day) => (
          <div 
            key={day.date}
            onClick={() => onDaySelect(day)}
            className="bg-brand-surface-container p-6 rounded-[28px] border border-brand-primary/5 cursor-pointer hover:bg-brand-surface-high transition-all text-left"
          >
            <span className="text-brand-tertiary font-semibold text-[9px] uppercase tracking-tighter">
              {day.date.split('-')[1]}.{day.date.split('-')[2]} {day.dayName}
            </span>
            <h4 className="text-md font-bold text-brand-primary mt-1">{day.menu.name}</h4>
            <p className="text-[11px] text-brand-secondary mt-2 leading-relaxed">
              {day.menu.staple}, {day.menu.soup}, {day.menu.side}
            </p>
          </div>
        ))}
      </div>

      {/* Health Chips */}
      <div className="flex flex-wrap gap-2 py-4">
        <HealthChip icon={<Leaf size={14}/>} label="Low Sodium" className="bg-brand-surface-container text-brand-secondary" />
        <HealthChip icon={<Utensils size={14}/>} label="High Protein" className="bg-brand-tertiary/10 text-brand-tertiary" />
        <HealthChip icon={<Verified size={14}/>} label="Local Farmed" className="bg-brand-primary/10 text-brand-primary" />
      </div>
    </div>
  );
}

function SideItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
      <span className="text-sm font-medium text-brand-on-surface">{name}</span>
    </div>
  );
}

function HealthChip({ icon, label, className }: { icon: ReactNode, label: string, className: string }) {
  return (
    <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${className}`}>
      {icon}
      <span className="text-[11px] font-bold uppercase">{label}</span>
    </div>
  );
}

