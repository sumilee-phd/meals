import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X, Send, Heart, Utensils } from 'lucide-react';
import { MenuItem } from '../types';

export default function RatingView({ menu, onClose }: { menu: MenuItem, onClose: () => void }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) return;
    setIsSubmitted(true);
    // 실제 환경에서는 여기서 API 호출을 수행합니다.
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-brand-bg flex flex-col max-w-md mx-auto overflow-hidden p-6"
    >
      <header className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-display text-brand-primary">급식 후기 남기기</h2>
        <button onClick={onClose} className="p-2 bg-brand-surface-container rounded-full text-brand-primary">
          <X size={20} />
        </button>
      </header>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col space-y-8"
          >
            {/* Menu Info */}
            <div className="bg-brand-surface-container p-6 rounded-3xl text-center space-y-3 organic-shadow">
              <div className="w-16 h-16 bg-brand-primary text-brand-bg rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Utensils size={32} />
              </div>
              <div>
                <p className="text-brand-tertiary text-xs font-bold uppercase tracking-widest">오늘의 메뉴</p>
                <h3 className="text-2xl font-display text-brand-primary">{menu.name}</h3>
              </div>
            </div>

            {/* Star Rating */}
            <div className="text-center space-y-4">
              <p className="text-brand-secondary font-semibold">오늘 식사는 어떠셨나요?</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setRating(num)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={44}
                      fill={num <= rating ? "#6c471f" : "none"}
                      className={num <= rating ? "text-brand-tertiary" : "text-brand-tertiary/20"}
                      strokeWidth={num <= rating ? 0 : 2}
                    />
                  </motion.button>
                ))}
              </div>
              <p className="text-brand-tertiary font-display text-lg min-h-[28px]">
                {rating === 1 && "조금 아쉬웠어요 😢"}
                {rating === 2 && "그저 그랬어요 😐"}
                {rating === 3 && "맛있었어요! 🙂"}
                {rating === 4 && "정말 최고였어요! 😍"}
                {rating === 5 && "씨마스 급식 사랑해요! 💕"}
              </p>
            </div>

            {/* Comment Field */}
            <div className="flex-1 flex flex-col space-y-2">
              <label className="text-sm font-bold text-brand-secondary ml-2">상세 후기 (선택사항)</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="영양사 선생님과 조리원 분들께 따뜻한 한마디를 남겨주세요."
                className="flex-1 bg-brand-surface-high rounded-3xl p-6 text-brand-on-surface placeholder:text-brand-secondary/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`w-full py-5 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                rating > 0 
                  ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                  : 'bg-brand-surface-high text-brand-secondary/40 cursor-not-allowed'
              }`}
            >
              후기 등록하기
              <Send size={20} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-32 h-32 bg-brand-tertiary text-white rounded-full flex items-center justify-center shadow-2xl"
            >
              <Heart size={64} fill="currentColor" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-3xl font-display text-brand-primary">후기 등록 완료!</h3>
              <p className="text-brand-secondary leading-relaxed">
                소중한 의견 감사합니다.<br/>
                더욱 맛있는 씨마스 급식으로 보답할게요!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
