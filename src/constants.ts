import { DayMenu } from './types';

export const WEEKLY_DATA: DayMenu[] = [
  {
    date: '2026-05-18',
    dayName: 'MON',
    menu: {
      name: '소불고기 덮밥',
      calories: 780,
      staple: '소불고기덮밥',
      soup: '팽이버섯된장국',
      side: '참나물무침',
      traditional: '포기김치',
      nutrients: { carbs: 105, protein: 35, fat: 18 },
      tags: ['고단백', '인기메뉴'],
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop'
    }
  },
  {
    date: '2026-05-19',
    dayName: 'TUE',
    menu: {
      name: '카레라이스',
      calories: 720,
      staple: '카레라이스',
      soup: '우동국물',
      side: '그린샐러드',
      traditional: '깍두기',
      nutrients: { carbs: 120, protein: 25, fat: 12 },
      tags: ['저염식'],
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop'
    }
  },
  {
    date: '2026-05-20',
    dayName: 'WED',
    menu: {
      name: '비빔밥 & 약고추장',
      calories: 680,
      staple: '비빔밥',
      soup: '콩나물국',
      side: '계란후라이',
      traditional: '무생채',
      nutrients: { carbs: 95, protein: 20, fat: 8 },
      tags: ['로컬푸드', '건강식'],
      image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop'
    }
  },
  {
    date: '2026-05-21',
    dayName: 'THU',
    menu: {
      name: '치즈돈까스',
      calories: 850,
      featured: true,
      staple: '백미밥',
      soup: '어니언스프',
      side: '발사믹샐러드',
      traditional: '배추김치',
      nutrients: { carbs: 115, protein: 45, fat: 22 },
      tags: ['고단백', '인기메뉴', '국내산돼지'],
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop'
    }
  },
  {
    date: '2026-05-22',
    dayName: 'FRI',
    menu: {
      name: '마라탕 & 꿔바로우',
      calories: 920,
      staple: '마라탕',
      soup: '자스민차',
      side: '숙주무침',
      traditional: '단무지',
      nutrients: { carbs: 110, protein: 40, fat: 35 },
      tags: ['매운맛', '특식'],
      image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop'
    }
  }
];

export const NOTICES = [
  { id: 1, title: '신선한 로컬 푸드 사용 안내', date: '2026.05.20', type: 'campaign' },
  { id: 2, title: '기말고사 기간 급식 시간 변경', date: '2026.05.18', type: 'info' }
];

export const MOCK_REVIEWS = [
  {
    id: '1',
    author: '2학년 이지은',
    rating: 5,
    comment: '돈까스 소스가 진짜 대박이에요ㅠㅠ 고기도 엄청 두툼하고 최고!',
    date: '10분 전',
    menuName: '치즈돈까스'
  },
  {
    id: '2',
    author: '3학년 박준호',
    rating: 4,
    comment: '치즈가 끊임없이 늘어나서 먹는 재미가 있었어요. 샐러드도 상큼해요.',
    date: '30분 전',
    menuName: '치즈돈까스'
  },
  {
    id: '3',
    author: '1학년 최유리',
    rating: 5,
    comment: '오늘 급식 역대급... 매일매일 이런 메뉴면 좋겠어요!',
    date: '1시간 전',
    menuName: '치즈돈까스'
  }
];

export const ALLERGEN_LIST = [
  { id: 1, name: '난류(가공품 포함)', icon: '🥚' },
  { id: 2, name: '우유', icon: '🥛' },
  { id: 3, name: '메밀', icon: '🌾' },
  { id: 4, name: '땅콩', icon: '🥜' },
  { id: 5, name: '대두', icon: '🫘' },
  { id: 6, name: '밀', icon: '🥖' },
  { id: 7, name: '고등어', icon: '🐟' },
  { id: 8, name: '게', icon: '🦀' },
  { id: 9, name: '새우', icon: '🦐' },
  { id: 10, name: '돼지고기', icon: '🐷' },
  { id: 11, name: '복숭아', icon: '🍑' },
  { id: 12, name: '토마토', icon: '🍅' },
  { id: 13, name: '아황산류', icon: '🧪' },
  { id: 14, name: '호두', icon: '🪵' },
  { id: 15, name: '닭고기', icon: '🍗' },
  { id: 16, name: '쇠고기', icon: '🥩' },
  { id: 17, name: '오징어', icon: '🦑' },
  { id: 18, name: '조개류', icon: '🐚' },
  { id: 19, name: '잣', icon: '🌲' }
];
