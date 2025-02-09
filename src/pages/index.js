import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary fireproof', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://fireproof.storage/try-free/"
          >
            Try Demo
          </Link>
          <Link
            className="button button--primary button--lg margin-left--md"
            to="/docs/react-tutorial"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`The embedded database for AI Code Generation`}
      description="Generate complete, single-file applications with built-in data persistence and real-time sync."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <h2>📦 Lightweight install</h2>
          <p>
            Perfect for AI-generated single-file apps. Includes live queries, file attachments, and automatic persistence - everything you need in one package.
          </p>

          <CodeBlock language="jsx">npm install use-fireproof</CodeBlock>
          <p>
            The{' '}
            <Link to="https://www.npmjs.com/package/use-fireproof">use-fireproof</Link> module runs
            anywhere, with bundles built for Node.js and the browser, and optional <Link to="/docs/react-hooks/use-live-query">React hooks</Link>.
          </p>
          <h2>🚀 Generate complete applications</h2>
          <p>
            Perfect for AI code generation with no setup required. Ideal for ChatGPT quick starts and code sandbox demos.{' '}
            For React developers, check out the <Link to="/docs/react-tutorial">useLiveQuery tutorial</Link>{' '}
            for the recommended auto-refresh APIs. Get started by writing features, and <Link to="/docs/database-api/replication">connect to the cloud</Link> after your app is awesome.
          </p>

          <h2>🔐 Built-in sync and collaboration</h2>
          <p>
            Works offline-first with automatic CRDT-based conflict resolution. Every operation is{' '}
            <Link to="/docs/database-api/encryption">end-to-end encrypted</Link> and{' '}
            <Link to="https://fireproof.storage/posts/from-mlops-to-point-of-sale:-merkle-proofs-and-data-locality/">
              accelerated by cryptographic proofs
            </Link>
            . Deploy anywhere - from code sandboxes to production.
          </p>
          <h2>📝 Open-source</h2>
          <p>
            Fireproof is dual-licensed under the Apache 2.0 and MIT license and is free to use.{' '}
            <Link to="/docs/contributing">Read about contributing</Link>.
          </p>
        </div>
      </main>
    </Layout>
  )
}
import ThemedImage from '@theme/ThemedImage'
