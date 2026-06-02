import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import EcosystemLinks from '@theme/EcosystemLinks';
import styles from './styles.module.css';

const features = [
  {
    title: 'Probabilistic Outcomes',
    description:
      'Many outcomes are shaped by likelihoods rather than guarantees. Learners practice using probability language instead of treating every choice as certain or impossible.',
  },
  {
    title: 'Brain Shortcuts (Heuristics)',
    description:
      'Our brains use mental shortcuts that often help but can mislead in some situations. Noticing those default patterns is the first step toward checking them.',
  },
  {
    title: 'Opportunity Cost',
    description:
      'Every choice carries a hidden price tag: the next-best option you did not pick. Learners make those invisible trade-offs easier to discuss.',
  },
  {
    title: 'Diminishing Returns',
    description:
      'More is not always better. Students learn that extra effort or extra research can help at first, then help less, and sometimes delay action without adding much value.',
  },
  {
    title: 'Iterative Decisions',
    description:
      'Many choices can be tested, measured, and improved. The course ends by helping learners design a protocol, try it, gather data, and revise it.',
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
            Decision Literacy for Kids helps educators and families teach learners how to
            think through choices, weigh evidence, notice trade-offs, and reflect on
            outcomes. The strongest fit is ages 10–12, with simpler supports for ages 8–9
            and extension prompts for ages 12–15.
          </p>
          <p>
            Plain-language summary: learners practice noticing choices, making predictions,
            checking what evidence they used, and reflecting on what happened.
          </p>
          <p>
            Source note for facilitators: the curriculum uses widely taught ideas from
            probability, heuristics, metacognition, and reflective practice. These are
            presented as common patterns that often show up in real decisions.
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
            The learning progression moves from foundational ideas about luck and process
            into increasingly complex applications involving evidence, systems, and
            self-designed protocols.
          </p>
          <p>
            This roadmap is presented as text so the full sequence stays readable with a
            screen reader or without relying on image text.
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
            Begin with Week 1 and help learners build a repeatable process for making,
            discussing, and revising decisions thoughtfully.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week1">
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
