// Portfolio projects. Add a new object to this list to create a new card
// on the home page and a detail page at /projects/<slug>.
// Put images in public/projects/<slug>/.

export type Platform = 'iOS' | 'Android' | 'Web';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  platforms: Platform[];
  accent: string; // card background color
  icon: string;
  screenshots: string[];
  features: string[];
  facts: { label: string; value: string }[];
  links: { appStore?: string; playStore?: string; website?: string; privacy?: string };
}

export const projects: Project[] = [
  {
    slug: 'posturist',
    name: 'Posturist',
    tagline: '21-Day Posture Challenge',
    summary: 'A guided 21-day program that helps people fix their posture in a few minutes a day.',
    description: [
      'Posturist is a structured 21-day posture program with short, guided daily exercises. It targets common problems like forward head posture, rounded upper back (kyphosis) and lower back pain.',
      'The program was created with Emir Eryiğit, a fitness trainer with 12 years of experience in postural disorders and spinal health. Every session builds on spinal alignment, muscle balance, mobility, stability and core activation — no equipment needed.',
      'We designed and built Posturist as native apps for both iOS and Android, so every user gets a smooth experience on their platform.',
    ],
    platforms: ['iOS', 'Android'],
    accent: 'var(--orange)',
    icon: '/projects/posturist/icon.jpg',
    screenshots: [
      '/projects/posturist/shot-1.jpg',
      '/projects/posturist/shot-2.jpg',
      '/projects/posturist/shot-3.jpg',
      '/projects/posturist/shot-4.jpg',
      '/projects/posturist/shot-5.jpg',
    ],
    features: [
      '21-day structured posture program',
      'Short, guided daily exercises',
      'Step-by-step movement guidance',
      'Progress tracking across the journey',
      'No equipment, all fitness levels',
      'Designed to fit busy routines',
    ],
    facts: [
      { label: 'Category', value: 'Health & Fitness' },
      { label: 'Platforms', value: 'iPhone, iPad, Mac, Android' },
      { label: 'Released', value: 'March 2026' },
      { label: 'Requires', value: 'iOS 18+' },
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/posturist/id6760512476',
      playStore: 'https://play.google.com/store/apps/details?id=com.kg.posturist',
      privacy: 'https://www.posturistapp.com/privacy.html',
    },
  },
];
