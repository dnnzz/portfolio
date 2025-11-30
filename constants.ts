import { Job, Education, Skill } from './types';

export const EXPERIENCES: Job[] = [
  {
    id: '1',
    role: 'Frontend Developer',
    company: 'Hipodrom.com',
    period: '2023 - Present',
    description: 'Leading the frontend architecture for a high-frequency live betting platform specialized in horse racing.',
    technologies: ['Vue', 'Nuxt', 'HTML', 'CSS', 'Vuex Store', 'JavaScript'],
    highlights: [
      'Developing the frontend for a horse racing & betting platform.',
      'Horse statistics & analytics tables for the horse predictions.',
      'Igaming game integrations for our platform (Milli Piyango,NeoGames,Sisal(Next)).'
    ]
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'GTS Global Travel Services',
    period: 'Jan 2023 -  Sep 2023 (9 months)',
    description: 'We are in the process of developing a cutting-edge online web application, specifically designed for  travel agencies.',
    technologies: ['Vue.js', '.Net Core', 'Asp.net', 'Jquery','SCSS','Vuex Store'],
    highlights: [
      'Our application is being built using Vue.js, along with modern front-end development tools to ensure a seamless user experience.',
      'The goal of our development efforts is to create a visually stunning and user-friendly web app that will streamline the operations of travel agencies, allowing them to efficiently manage bookings, reservations, and other travel-related tasks.',
      'We are dedicated to utilizing the latest web technologies and design principles to create a beautiful and functional application that meets the high demands of the travel industry in both Europe and Turkey..'
    ]
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Parabol',
    period: 'Feb 2022 - Dec 2022',
    description: 'Maintained legacy betting portals and migrated core modules to modern frameworks.',
    technologies: ['JavaScript', 'React.js', 'Angular.js', 'SASS','Leaflet','Bootstrap'],
    highlights: [
      'Working with agile methodology and using modern front-end development tools.',
      'Creating mobilization solutions and project for urban mobility.'
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: '1',
    degree: 'B.Sc. Computer Engineering',
    school: 'Suleyman Demirel University',
    year: '2017 - 2021',
    details: 'Focus on Frontend Development and Mobile Applications'
  },
  {
    id: '2',
    degree: 'Patika.dev & Hepsiburada Frontend Bootcamp Student',
    school: 'Patika.dev & Hepsiburada',
    year: '2021',
    details: 'Focus on Frontend Development for e-commerce websites. Using modern front-end development tools and frameworks.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Vue & Nuxt.js', level: 95, category: 'frontend' },
  { name: 'HTML & CSS & JavaScript', level: 95, category: 'frontend' },
  { name: 'WebSockets / Real-time', level: 92, category: 'specialized' },
  { name: 'Betting Logic / Odds', level: 88, category: 'specialized' },
  { name: 'SQL', level: 80, category: 'specialized' },
];