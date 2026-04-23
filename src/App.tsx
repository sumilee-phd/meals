/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Utensils, User, Bell, Search, Calendar, ShieldAlert, ArrowRight, Star, ChefHat } from 'lucide-react';
import { ViewType, DayMenu } from './types';
import { WEEKLY_DATA } from './constants';
import HomeView from './components/HomeView';
import WeeklyView from './components/WeeklyView';
import DetailView from './components/DetailView';
import AllergyView from './components/AllergyView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedDay, setSelectedDay] = useState<DayMenu>(WEEKLY_DATA[3]); // Default to THU (the featured one in images)
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAllergyOpen, setIsAllergyOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Auto-hide splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleDaySelect = (day: DayMenu) => {
    setSelectedDay(day);
    setIsDetailOpen(true);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center p-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_0y0sWVl-cfHrosb9wnRFVK3TbHQFWgWgpik2GQZRLB2At7tXY09nYactZBReOaE7Ep9QeOgraxUHaO4AKRuJZjkOO-YgSEIKdZnG0eWu7DjyXIhj5GRuqOWHemZ9nXDlxDji7cpcYFJhu6zhVZCM-js-a05AXVFTxYjrLJHujsiNq-hg03_qS2NAFccwPMGz5Bagtf7MzqDMjIwdtB85gwjWI4zUyyw7YpZW0OzZiEwpSr1E6JPFjF3TL_nOSYJw1tvCeXRCjcg" 
              alt="C-MAS Lunch Logo" 
              className="w-40 h-40 relative z-10 mx-auto"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl font-display text-brand-primary">씨마스 급식</h1>
            <p className="text-brand-secondary font-medium tracking-widest text-sm uppercase">Healthy & Tasty Lunch</p>
          </div>
        </motion.div>
        
        <div className="absolute bottom-16 w-full flex flex-col items-center gap-3 px-10">
          <div className="w-full max-w-[200px] h-1.5 bg-brand-primary/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-brand-primary shadow-[0_0_8px_rgba(108,71,31,0.5)]"
            ></motion.div>
          </div>
          <p className="text-xs text-brand-primary/50 font-bold">건강한 오늘의 식단을 준비중입니다...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100 lg:bg-stone-200 flex justify-center selection:bg-brand-primary/10">
      {/* Mobile-centric Container for Web & App */}
      <div className="w-full max-w-md bg-brand-bg min-h-screen shadow-2xl relative flex flex-col overflow-x-hidden border-x border-brand-primary/5">
        
        {/* Top App Bar */}
        <header className="fixed top-0 w-full max-w-md bg-brand-bg/85 backdrop-blur-xl z-40 px-6 py-4 flex items-center justify-between border-b border-brand-primary/5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-brand-primary/20">
              <Utensils className="text-white" size={20} />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-[10px] font-bold text-brand-secondary tracking-widest uppercase opacity-70">C-MAS HIGH SCHOOL</span>
              <span className="text-xl font-display text-brand-primary">씨마스 급식</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-brand-surface-container rounded-full text-brand-primary hover:bg-brand-surface-high transition-all shadow-sm active:scale-90">
              <Bell size={18} strokeWidth={2.5} />
            </button>
            <button className="p-2.5 bg-brand-surface-container rounded-full text-brand-primary hover:bg-brand-surface-high transition-all shadow-sm active:scale-90">
              {currentView === 'home' ? <Search size={18} strokeWidth={2.5} /> : <Calendar size={18} strokeWidth={2.5} />}
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 pt-24 pb-32">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <HomeView 
                  onMenuClick={() => setCurrentView('menu')} 
                  onFeaturedClick={() => handleDaySelect(WEEKLY_DATA[3])}
                  onAllergyClick={() => setIsAllergyOpen(true)}
                />
              </motion.div>
            )}

            {currentView === 'menu' && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <WeeklyView onDaySelect={handleDaySelect} />
              </motion.div>
            )}

            {currentView === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="px-6 flex flex-col items-center justify-center pt-24 text-center pb-10"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-primary/10 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-28 h-28 bg-brand-surface-container rounded-full flex items-center justify-center mb-6 shadow-inner relative border-2 border-brand-primary/5">
                    <User size={56} className="text-brand-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-2xl font-display text-brand-primary">학생 사용자</h2>
                <p className="text-brand-secondary font-medium mt-1">2학년 3반 15번 김철수</p>
                
                <div className="w-full mt-10 space-y-4">
                  <button 
                    onClick={() => setIsAllergyOpen(true)}
                    className="w-full flex items-center justify-between p-5 bg-brand-surface-container text-brand-primary rounded-[2rem] font-bold hover:bg-brand-surface-high transition-all group border border-brand-primary/5 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-tertiary/10 rounded-2xl flex items-center justify-center text-brand-tertiary">
                        <ShieldAlert size={22} />
                      </div>
                      <span className="text-lg">알레르기 정보 설정</span>
                    </div>
                    <ArrowRight size={20} className="text-brand-primary/30 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                     <button className="p-6 bg-brand-surface-container rounded-[2rem] border border-brand-primary/5 text-left space-y-2 active:scale-95 transition-transform hover:bg-brand-surface-high">
                        <div className="text-brand-primary"><Star size={24} /></div>
                        <div>
                          <p className="text-sm font-bold text-brand-primary">나의 후기</p>
                          <p className="text-[10px] text-brand-secondary opacity-60">내가 쓴 리뷰 모아보기</p>
                        </div>
                     </button>
                     <button className="p-6 bg-brand-surface-container rounded-[2rem] border border-brand-primary/5 text-left space-y-2 active:scale-95 transition-transform hover:bg-brand-surface-high">
                        <div className="text-brand-primary"><ChefHat size={24} /></div>
                        <div>
                          <p className="text-sm font-bold text-brand-primary">식단 제안</p>
                          <p className="text-[10px] text-brand-secondary opacity-60">영양사님께 건의하기</p>
                        </div>
                     </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Overlays */}
        <AnimatePresence>
          {isDetailOpen && (
            <DetailView day={selectedDay} onClose={() => setIsDetailOpen(false)} />
          )}
          {isAllergyOpen && (
            <AllergyView onClose={() => setIsAllergyOpen(false)} />
          )}
        </AnimatePresence>

        {/* Floating Glass Navigation */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[380px] bg-brand-primary/90 backdrop-blur-2xl z-40 px-2 py-2 rounded-[2.5rem] flex items-center justify-between shadow-[0_20px_50px_rgba(108,71,31,0.3)] border border-white/20">
          <NavItem 
            isActive={currentView === 'home'} 
            onClick={() => { setCurrentView('home'); setIsDetailOpen(false); }} 
            icon={<Home size={22} />} 
            label="홈" 
          />
          <NavItem 
            isActive={currentView === 'menu'} 
            onClick={() => { setCurrentView('menu'); setIsDetailOpen(false); }} 
            icon={<Utensils size={22} />} 
            label="식단관" 
          />
          <NavItem 
            isActive={currentView === 'profile'} 
            onClick={() => { setCurrentView('profile'); setIsDetailOpen(false); }} 
            icon={<User size={22} />} 
            label="프로필" 
          />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ isActive, onClick, icon, label }: { isActive: boolean, onClick: () => void, icon: ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all relative ${isActive ? 'bg-white text-brand-primary shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
    >
      <div className="shrink-0">
        {icon}
      </div>
      {isActive && (
        <motion.span 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          className="text-xs font-bold whitespace-nowrap overflow-hidden"
        >
          {label}
        </motion.span>
      )}
    </button>
  );
}

