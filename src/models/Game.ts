export interface Game {
  id: number;
  title: string;
  publisher: string;
  categories: string[];
  players: string;
  duration: string;
  mode: string;
  description: string;
  rules: string;
  video?: string;
  image: string;
  secondaryImages: string[];
  rankValue: number;
  orderPurchased: number;
  age?: number;
}
