import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import EcosystemLinks from '@theme/EcosystemLinks';
import styles from './styles.module.css';

const features = [
  {
    title: 'Probabilistic Outcomes',
    description:
      'The world runs on likelihoods, not certainties. Kids learn to think in probabilities instead of "yes or no," building comfort with uncertainty.',
  },
  {
    title: 'Brain Shortcuts (Heuristics)',
    description:
      'Our brains take mental shortcuts that usually help but sometimes mislead. Knowing your defaults is the first step to overriding them.',
  },
  {
    title: 'Opportunity Cost',
    description:
      'Every choice carries a hidden price tag — the next-best option you didn\'t pick. Seeing these invisible trade-offs transforms decision-making.',
  },
  {
    title: 'Diminishing Returns',
    description:
      'More isn\'t always better. The 10th hour of practice helps less than the 1st. Knowing when to stop optimizing is itself an optimization.',
  },
  {
    title: 'Iterative Decisions',
    description:
      'Few choices are permanent. Most can be tested, measured, and improved. Design → Test → Measure → Patch → Repeat.',
  },
];

const roadmapSections = [
  {
    title: 'Probability & The Physics of Choice',
    weeks: 'Weeks 1–4',
    description:
      'Randomness, probability, process vs. outcome thinking, and the Decision Journal — building the foundation for everything that follows.',
  },
  {
    title: 'Debugging the Hardware',
    weeks: 'Weeks 5–8',
    description:
      'Heuristics, loss aversion, sunk costs, and the framing effect — turning the lens inward to study the brain\'s default settings.',
  },
  {
    title: 'Data & Signal Processing',
    weeks: 'Weeks 9–11',
    description:
      'Expected value, signal vs. noise, and the reversible/irreversible framework — quantitative tools for cutting through uncertainty.',
  },
  {
    title: 'Game Theory & Social Systems',
    weeks: 'Weeks 12–14',
    description:
      'Ripple effects, the Prisoner\'s Dilemma, and the Tragedy of the Commons — expanding from "me" decisions to "us" decisions.',
  },
  {
    title: 'The Optimization Project',
    weeks: 'Weeks 15–18',
    description:
      'Identify a real friction point, design a protocol, test it with data, and iterate — applying every tool to a genuine personal challenge.',
  },
];

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Decision Literacy for Kids is designed to help educators and families teach
            young learners how to think through choices, evaluate options, and reflect on
            outcomes. The lessons push students to analyze, evaluate, and create as they
            move through the course.
          </p>
        </div>
      </section>

      <EcosystemLinks />

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around a set of mental models that help students
            understand decision-making in practical, durable ways.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from foundational decision-making concepts
            into increasingly complex and creative applications.
          </p>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Decision Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with Week 1 and give students a clearer understanding of how
            to think through decisions thoughtfully.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week01-week-1">
              Begin Week 1
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/decision_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Version 1.0</p>
            <p>
              This curriculum is an open project and will continue to improve as
              teachers and families use it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
