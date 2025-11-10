import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import Heading from "@theme/Heading"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.badge}>🔥 NOW LIVE - JOIN TODAY</div>
        <Heading as="h1" className="hero__title">
          Welcome to South Side RP
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>Build your empire, create your story, live the dream.</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="https://webdev.southsiderp.co.za#join">
            Join Server
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read Docs
          </Link>
        </div>

        {/* Stats section matching main site */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className="stats-number">500+</div>
            <div className={styles.statLabel}>Active Players</div>
          </div>
          <div className={styles.statItem}>
            <div className="stats-number">24/7</div>
            <div className={styles.statLabel}>Server Uptime</div>
          </div>
          <div className={styles.statItem}>
            <div className="stats-number">50+</div>
            <div className={styles.statLabel}>Custom Jobs</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Documentation`}
      description="Official documentation for South Side RP - Miami themed FiveM roleplay server"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
