import { InformationBoxProps } from '@/types/infoBox';

export const homeInfo: InformationBoxProps[] = [
  {
    title: 'Web Development',
    description:
      'I have worked on numerous web projects, both with frontend technologies such as Next.js and React, and backend technologies such as Express.js, Hasura',
    icon: '/web.svg',
  },
  {
    title: 'Development',
    description: 'Check out my projects and what I have been working on',
    icon: '/development.svg',
    link: '/projects',
  },
  {
    title: 'Contact',
    description: 'Reach out to me and let me know how I can help you',
    icon: '/icons/contact.svg',
    link: '/contact',
  },
];
