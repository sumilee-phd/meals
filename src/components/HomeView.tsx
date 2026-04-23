import { motion } from 'motion/react';
import { CalendarDays, MessageSquare, Megaphone, Info, ChevronRight, Utensils, Star, ShieldAlert } from 'lucide-react';
import { NOTICES, MOCK_REVIEWS } from '../constants';

export default function HomeView({ 
  onMenuClick, 
  onFeaturedClick, 
  onAllergyClick 
}: { 
  onMenuClick: () => void, 
  onFeaturedClick: () => void,
  onAllergyClick: () => void
}) {
  return (
    <div className="px-4 space-y-8 pb-10">
      {/* Hero Section */}
      <section className="relative mt-4 cursor-pointer" onClick={onFeaturedClick}>
        {/* ... (keep existing hero content) */}
        <div className="bg-brand-surface-high rounded-[2rem] overflow-hidden relative min-h-[420px] flex flex-col justify-end p-8 shadow-sm group">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800" 
              alt="Cheese Tonkatsu" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-on-surface/80 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 space-y-2 text-left">
            <span className="inline-block bg-brand-primary text-brand-bg px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Special Menu</span>
            <h2 className="text-white text-3xl font-display leading-tight">2026년 5월 21일 (목)<br/>오늘의 메뉴</h2>
            <div className="flex items-center gap-2 text-[#dfedac]">
              <Utensils size={20} />
              <p className="text-xl font-semibold">치즈돈까스 정식</p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-2 w-32 h-32 z-20">
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary text-left">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_0y0sWVl-cfHrosb9wnRFVK3TbHQFWgWgpik2GQZRLB2At7tXY09nYactZBReOaE7Ep9QeOgraxUHaO4AKRuJZjkOO-YgSEIKdZnG0eWu7DjyXIhj5GRuqOWHemZ9nXDlxDji7cpcYFJhu6zhVZCM-js-a05AXVFTxYjrLJHujsiNq-hg03_qS2NAFccwPMGz5Bagtf7MzqDMjIwdtB85gwjWI4zUyyw7YpZW0OzZiEwpSr1E6JPFjF3TL_nOSYJw1tvCeXRCjcg" alt="Chef Chick" className="w-24 h-24" />
              </div>
              <div className="absolute bottom-4 right-0 bg-brand-tertiary text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">Chef Pick!</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-2 gap-4">
        <div 
          onClick={onMenuClick}
          className="bg-brand-primary-container p-6 rounded-3xl flex flex-col justify-between aspect-square group hover:opacity-90 transition-all cursor-pointer organic-shadow text-left"
        >
          <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
            <CalendarDays className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-white text-xl font-display">주간 식단</h3>
            <p className="text-white/70 text-xs mt-1">한 주간의 소식</p>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          <div 
            onClick={onAllergyClick}
            className="bg-brand-tertiary/10 p-5 rounded-3xl flex items-center gap-4 hover:bg-brand-tertiary/20 transition-all cursor-pointer border border-brand-tertiary/10 text-left"
          >
            <div className="bg-brand-tertiary/20 w-10 h-10 rounded-xl flex items-center justify-center text-brand-tertiary shrink-0">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h3 className="text-brand-tertiary text-sm font-bold">알레르기</h3>
              <p className="text-brand-tertiary/60 text-[10px]">정보 설정</p>
            </div>
          </div>

          <div className="bg-brand-surface-container p-5 rounded-3xl flex items-center gap-4 hover:bg-brand-surface-high transition-all cursor-pointer border border-brand-primary/5 text-left">
            <div className="bg-brand-secondary/10 w-10 h-10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-brand-on-surface text-sm font-bold">문의하기</h3>
              <p className="text-brand-secondary/60 text-[10px]">피드백 남기기</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Reviews Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-display text-brand-primary">실시간 급식 톡</h3>
          <button className="text-sm text-brand-tertiary font-semibold">더보기</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
          {MOCK_REVIEWS.map(review => (
            <div key={review.id} className="min-w-[280px] bg-white p-5 rounded-3xl organic-shadow flex flex-col justify-between space-y-4 text-left">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-surface-container rounded-full flex items-center justify-center text-brand-primary">
                    <Star size={14} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-on-surface">{review.author}</p>
                    <p className="text-[10px] text-brand-secondary">{review.date}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-tertiary bg-brand-tertiary/10 px-2 py-1 rounded-lg">{review.menuName}</span>
              </div>
              <p className="text-sm text-brand-on-surface leading-snug line-clamp-2 italic">"{review.comment}"</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < review.rating ? "#6c471f" : "none"} className={i < review.rating ? "text-brand-tertiary" : "text-brand-secondary/20"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-brand-surface-container p-6 rounded-[2rem] space-y-4 shadow-sm text-left">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-brand-on-surface">식단 상세 정보</h3>
          <span className="text-xs text-brand-secondary font-medium px-3 py-1 bg-brand-surface-high rounded-full">854 kcal</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['돈까스(국내산)', '김치(국내산)', '치즈(자연산)', '우동', '양배추 샐러드'].map(tag => (
            <span key={tag} className="bg-white/50 px-3 py-1.5 rounded-xl text-xs text-brand-secondary border border-brand-primary/5">{tag}</span>
          ))}
        </div>
      </section>

      {/* Notices */}
      <section className="space-y-4 text-left">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-display text-brand-primary">공지사항</h3>
          <button className="text-sm text-brand-tertiary font-semibold">전체보기</button>
        </div>
        <div className="space-y-3">
          {NOTICES.map(notice => (
            <div key={notice.id} className="bg-brand-surface-container p-5 rounded-2xl flex items-center gap-4 group cursor-pointer hover:bg-brand-surface-high transition-all">
              <div className="bg-white/50 p-3 rounded-xl group-hover:bg-brand-primary transition-colors text-brand-primary group-hover:text-white">
                {notice.type === 'campaign' ? <Megaphone size={20} /> : <Info size={20} />}
              </div>
              <div className="flex-1">
                <h4 className="text-brand-on-surface font-semibold line-clamp-1">{notice.title}</h4>
                <p className="text-brand-secondary text-xs mt-1">{notice.date}</p>
              </div>
              <ChevronRight size={20} className="text-brand-secondary/40" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
