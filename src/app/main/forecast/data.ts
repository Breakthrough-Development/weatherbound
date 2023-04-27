import { DataInterface } from './models/DataInterface';

export const Data: DataInterface[] = [
  {
    category: { text: 'Reaction', styles: ['text-red-500'] },
    score: 80,
    icon: {
      src: './assets/images/icon-reaction.svg',
      alt: 'Thunder ray icon: a stylized image of a lightning bolt with a curved tail, resembling a ray fish.',
    },
    maxScore: 100,
    styles: ['bg-pink-100'],
  },
  {
    category: { text: 'Memory', styles: ['text-yellow-400'] },
    score: 92,
    maxScore: 100,
    icon: {
      src: './assets/images/icon-memory.svg',
      alt: 'Human brain icon: a simplified, stylized image of a human brain, with a wavy outline and various lobes and folds depicted.',
    },
    styles: ['bg-yellow-100'],
  },
  {
    category: { text: 'Verbal', styles: ['text-teal-500'] },
    score: 61,
    maxScore: 100,
    icon: {
      src: './assets/images/icon-verbal.svg',
      alt: 'Message icon: a white speech bubble outlined in green, resembling the messaging icon used in the WhatsApp app.',
    },
    styles: ['bg-green-100'],
  },
  {
    category: { text: 'Visual', styles: ['text-blue-900'] },
    maxScore: 100,
    score: 72,
    icon: {
      src: './assets/images/icon-visual.svg',
      alt: 'Human eye icon: a simplified, stylized image of a human eye, with a circular pupil, an iris with radial lines, and upper and lower eyelids depicted."',
    },
    styles: ['bg-blue-50'],
  },
];
