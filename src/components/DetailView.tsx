import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DayMenu } from '../types';
import { X, Bolt, Wheat, Soup, Salad, ChefHat, ArrowRight, ThumbsUp, CheckCircle, Star } from 'lucide-react';
import { MOCK_REVIEWS } from '../constants';
import RatingView from './RatingView';

export default function DetailView({ day, onClose }: { day: DayMenu, onClose: () => void }) {
  const { menu } = day;
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 z-50 bg-brand-bg flex flex-col max-w-md mx-auto overflow-y-auto pb-10"
    >
      {/* Detail Content */}
      <div className="relative">
        <header className="fixed top-0 w-full max-w-md bg-brand-bg/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10">
          <h1 className="text-xl font-display text-brand-primary">식단 상세</h1>
          <button onClick={onClose} className="p-2 bg-brand-surface-container rounded-full text-brand-primary">
            <X size={20} />
          </button>
        </header>

        <div className="px-4 pt-20 pb-10 space-y-8">
          {/* ... (rest of the detailed info) */}
          <div className="px-2 text-left">
            <p className="text-brand-tertiary font-medium text-sm tracking-widest uppercase mb-1">Today's Menu</p>
            <h2 className="text-3xl font-bold font-display text-brand-primary">{day.date.replace(/-/g, '.')} ({day.dayName})</h2>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <img src={menu.image} alt={menu.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white text-left">
              <span className="bg-brand-primary/90 text-brand-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">Main Course</span>
              <h3 className="text-4xl font-display drop-shadow-md">{menu.name}</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MenuCard icon={<Wheat size={20} className="text-brand-primary" />} label="Staple" value={menu.staple} />
            <MenuCard icon={<Soup size={20} className="text-brand-tertiary" />} label="Soup" value={menu.soup} />
            <MenuCard icon={<Salad size={20} className="text-brand-primary" />} label="Side" value={menu.side} />
            <MenuCard icon={<ChefHat size={20} className="text-brand-tertiary" />} label="Traditional" value={menu.traditional} />
          </div>

          <section className="bg-brand-surface-high rounded-[2rem] p-6 relative overflow-hidden organic-shadow text-left">
            <div className="flex justify-between items-end mb-8 relative z-10">
              <div>
                <h3 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-1">Energy Intake</h3>
                <p className="text-5xl font-black text-brand-on-surface tracking-tighter">
                  {menu.calories}<span className="text-xl font-medium ml-1 text-brand-secondary">kcal</span>
                </p>
              </div>
              <div className="bg-brand-primary px-4 py-2 rounded-2xl flex items-center gap-2">
                <Bolt size={16} fill="currentColor" className="text-brand-bg" />
                <span className="text-brand-bg font-bold text-xs uppercase">Good Balance</span>
              </div>
            </div>
            <div className="space-y-5 relative z-10">
              <NutrientBar label="탄수화물 (Carbs)" value={`${menu.nutrients.carbs}g`} percentage={55} color="bg-brand-primary-container" />
              <NutrientBar label="단백질 (Protein)" value={`${menu.nutrients.protein}g`} percentage={22} color="bg-brand-tertiary" />
              <NutrientBar label="지방 (Fat)" value={`${menu.nutrients.fat}g`} percentage={23} color="bg-brand-secondary" />
            </div>
          </section>

          <div className="flex flex-wrap gap-2 text-left">
            {menu.tags.map(tag => (
              <div key={tag} className="bg-brand-surface-container text-brand-on-surface px-4 py-2 rounded-full text-[11px] font-bold flex items-center gap-1 border border-brand-primary/5">
                {tag === '인기메뉴' ? <ThumbsUp size={14} className="text-brand-tertiary" fill="currentColor"/> : <CheckCircle size={14} className="text-brand-primary" fill="currentColor"/>}
                {tag}
              </div>
            ))}
          </div>

          {/* Menu Specific Reviews */}
          <section className="space-y-4 text-left">
            <h3 className="text-xl font-display text-brand-primary px-2">친구들의 후기</h3>
            <div className="space-y-3">
              {MOCK_REVIEWS.map(review => (
                <div key={review.id} className="bg-brand-surface-container/50 p-4 rounded-2xl border border-brand-primary/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-on-surface">{review.author}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} fill={i < review.rating ? "#6c471f" : "none"} className={i < review.rating ? "text-brand-tertiary" : "text-brand-secondary/20"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-brand-secondary leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>

          <button 
            onClick={() => setIsRatingOpen(true)}
            className="w-full bg-brand-primary text-white py-5 rounded-3xl font-bold text-lg shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            급식 후기 남기기
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Rating Overlay */}
      <AnimatePresence>
        {isRatingOpen && (
          <RatingView menu={menu} onClose={() => setIsRatingOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}


function MenuCard({ icon, label, value }: { icon: ReactNode, label: string, value: string }) {
  return (
    <div className="bg-brand-surface-container p-5 rounded-3xl flex flex-col justify-between items-start text-left border border-brand-primary/5 h-28">
      <div>
        {icon}
        <h4 className="text-[10px] font-bold text-brand-secondary uppercase tracking-tighter mt-1">{label}</h4>
      </div>
      <p className="text-lg font-bold text-brand-on-surface line-clamp-1">{value}</p>
    </div>
  );
}


function NutrientBar({ label, value, percentage, color }: { label: string, value: string, percentage: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold mb-2">
        <span className="text-brand-secondary">{label}</span>
        <span className="text-brand-on-surface">{value} ({percentage}%)</span>
      </div>
      <div className="h-3 w-full bg-brand-bg rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}
