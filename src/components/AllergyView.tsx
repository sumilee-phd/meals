import { useState } from 'react';
import { motion } from 'motion/react';
import { X, ShieldAlert, Check } from 'lucide-react';
import { ALLERGEN_LIST } from '../constants';

export default function AllergyView({ onClose }: { onClose: () => void }) {
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([]);

  const toggleAllergy = (id: number) => {
    setSelectedAllergies(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      className="fixed inset-0 z-50 bg-brand-bg flex flex-col max-w-md mx-auto overflow-hidden"
    >
      <header className="fixed top-0 w-full max-w-md bg-brand-bg/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10 border-b border-brand-primary/5">
        <h1 className="text-xl font-display text-brand-primary">알레르기 설정</h1>
        <button onClick={onClose} className="p-2 bg-brand-surface-container rounded-full text-brand-primary">
          <X size={20} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-6 space-y-6">
        <section className="bg-brand-surface-high p-6 rounded-3xl space-y-3 organic-shadow border border-brand-primary/5">
          <div className="flex items-center gap-2 text-brand-tertiary">
            <ShieldAlert size={20} />
            <span className="font-bold uppercase tracking-widest text-xs">Security Note</span>
          </div>
          <p className="text-sm text-brand-secondary leading-relaxed">
            학생 본인의 알레르기 유발 식재료를 선택해 주세요. 설정한 정보는 식단 확인 시 해당 식재료가 포함된 메뉴를 주의할 수 있도록 도와줍니다.
          </p>
        </section>

        <div className="grid grid-cols-2 gap-3">
          {ALLERGEN_LIST.map((item) => {
            const isSelected = selectedAllergies.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => toggleAllergy(item.id)}
                className={`relative flex items-center gap-3 p-4 rounded-2xl transition-all border ${
                  isSelected 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-lg' 
                    : 'bg-white border-brand-primary/5 text-brand-on-surface'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-brand-secondary'}`}>
                  {item.name}
                </span>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center text-brand-primary"
                  >
                    <Check size={10} strokeWidth={4} />
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-md p-6 bg-gradient-to-t from-brand-bg via-brand-bg to-transparent">
        <button 
          onClick={onClose}
          className="w-full bg-brand-primary text-white py-5 rounded-3xl font-bold text-lg shadow-xl shadow-brand-primary/20 transition-transform active:scale-95"
        >
          설정 완료하기
        </button>
      </div>
    </motion.div>
  );
}
