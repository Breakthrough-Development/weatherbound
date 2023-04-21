import { DataInterface } from './models/DataInterface';

export const Data: DataInterface[] = [
  {
    category: { text: 'Reaction', styles: ['text-red-500'] },
    score: 80,
    icon: './assets/images/icon-reaction.svg',
    maxScore: 100,
    styles: ['bg-pink-100'],
  },
  {
    category: { text: 'Memory', styles: ['text-yellow-400'] },
    score: 92,
    maxScore: 100,
    icon: './assets/images/icon-memory.svg',
    styles: ['bg-yellow-100'],
  },
  {
    category: { text: 'Verbal', styles: ['text-teal-500'] },
    score: 61,
    maxScore: 100,
    icon: './assets/images/icon-verbal.svg',
    styles: ['bg-green-100'],
  },
  {
    category: { text: 'Visual', styles: ['text-blue-900'] },
    maxScore: 100,
    score: 72,
    icon: './assets/images/icon-visual.svg',
    styles: ['bg-blue-50'],
  },
];
