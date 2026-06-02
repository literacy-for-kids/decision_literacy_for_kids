import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Decision Literacy for Kids</h1>
          <p className="hero__subtitle">
            A free, open curriculum for helping learners make wiser choices under uncertainty.
          </p>
          <p className={styles.heroLead}>
            18 weeks of hands-on activities in probability, cognitive shortcuts,
            game theory, and reflective problem solving. Strongest for ages 10–12,
            with a simplified path for ages 8–9 and extension prompts for ages 12–15.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/literacy-for-kids/decision_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustration of three children using coins, charts, a decision journal, and choice symbols to practice probability, reflection, and decision-making tools"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A curriculum website for teaching young learners how to reflect on choices, weigh uncertainty, and build stronger decision habits.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
