export interface MenuItem {
  name: string;
  calories: number;
  featured?: boolean;
  staple: string;
  soup: string;
  side: string;
  traditional: string;
  nutrients: {
    carbs: number;
    protein: number;
    fat: number;
  };
  tags: string[];
  image: string;
}

export interface DayMenu {
  date: string; // "YYYY-MM-DD"
  dayName: string; // "MON", "TUE", etc.
  menu: MenuItem;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  menuName: string;
}

export type ViewType = 'home' | 'menu' | 'profile';

