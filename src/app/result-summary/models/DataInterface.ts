export interface DataInterface {
  category: { text: string; styles: StylesType };
  score: number;
  icon: string;
  maxScore: number;
  styles: StylesType;
}

type StylesType = string[];
