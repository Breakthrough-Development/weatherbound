export interface DataInterface {
  category: { text: string; styles: StylesType };
  score: number;
  icon: { src: string; alt: string };
  maxScore: number;
  styles: StylesType;
}

type StylesType = string[];
