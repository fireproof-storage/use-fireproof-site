import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Build',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    icon: '🏗',
    description: (
      <>
        Generate complete applications in a single file. Perfect for AI code generation with no setup required. Ideal for{' '}
        <Link to="/docs/chatgpt-quick-start">ChatGPT quick starts</Link> and{' '}
        <Link to="https://codesandbox.io/s/fireproof-react-antd-f6zbi7?file=/src/App.tsx">
          code sandbox demos
        </Link>
        .
      </>
    )
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    icon: '🌩',
    description: (
      <>
        Built-in sync and collaboration for AI-generated apps. Works offline-first with{' '}
        <Link to="/docs/connect">automatic CRDT-based conflict resolution</Link> and{' '}
        <Link to="/docs/database-api/replication">cloud replication</Link>.
      </>
    )
  },
  {
    title: 'Scale',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    icon: '🏔',
    description: (
      <>
        Deploy anywhere - from code sandboxes to production.{' '}
        <Link to="/docs/database-api/encryption">Perfect for rapid development and demos</Link>{' '}
        that need to scale.
      </>
    )
  }
]

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span role="img" style={{ fontSize: '8rem' }}>
          {icon}
        </span>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
