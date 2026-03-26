// @ts-check

import {literacyHubUrl, literacyProjects} from './src/data/literacyLinks.js';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'license',
    {
      type: 'category',
      label: 'Probability & The Physics of Choice',
      description: 'Weeks 1–4: Luck vs. skill, uncertainty, and the Decision Journal',
      collapsed: false,
      items: [
        'week01-week-1',
        'week02-week-2',
        'week03-week-3',
        'week04-week-4',
      ],
    },
    {
      type: 'category',
      label: 'Debugging the Hardware',
      description: 'Weeks 5–8: Cognitive biases, shortcuts, and learning to spot them',
      items: [
        'week05-week-5',
        'week06-week-6',
        'week07-week-7',
        'week08-week-8',
      ],
    },
    {
      type: 'category',
      label: 'Data & Signal Processing',
      description: 'Weeks 9–11: Expected value, filtering information, and weighing stakes',
      items: [
        'week09-week-9',
        'week10-week-10',
        'week11-week-11',
      ],
    },
    {
      type: 'category',
      label: 'Game Theory & Social Systems',
      description: 'Weeks 12–14: Interconnected decisions, cooperation, and the commons',
      items: [
        'week12-week-12',
        'week13-week-13',
        'week14-week-14',
      ],
    },
    {
      type: 'category',
      label: 'The Optimization Project',
      description: 'Weeks 15–18: Identify, design, test, and iterate on a real-life decision protocol',
      items: [
        'week15-week-15',
        'week16-week-16',
        'week17-week-17',
        'week18-week-18',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      description: 'Bonus weeks: Bayesian updating and multi-step decision trees',
      items: [
        'week-extension-1',
        'week-extension-2',
      ],
    },
    'curriculum-master',
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {
          type: 'link',
          label: 'Literacy for Kids Hub',
          href: literacyHubUrl,
        },
        ...literacyProjects.map(({label, href}) => ({
          type: 'link',
          label,
          href,
        })),
      ],
    },
  ],
};

export default sidebars;
