import React from 'react'
import Link from '@docusaurus/Link'

import s from './styles.module.css'
import common from '@site/src/pages/index.module.css'

export default function HomepageFeaturesSection() {
  return (
    <section className={`${s.features} ${common.section}`}>
      <div className={s.featuresHeader}></div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🏗</p>
        <h2 className={common.subHeading}>Build</h2>
        <p className={common.text}>
          Generate complete applications in a single file. Perfect for AI code generation with no setup required. Ideal for{' '}
          <Link to='/docs/chatgpt-quick-start'>ChatGPT quick starts</Link> and{' '}
          <Link to='https://codesandbox.io/s/fireproof-react-antd-f6zbi7?file=/src/App.tsx'>
            code sandbox demos
          </Link>.
        </p>
      </div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🌩</p>
        <h2 className={common.subHeading}>Connect</h2>
        <p className={common.text}>
          Built-in sync and collaboration for AI-generated apps. Works offline-first with{' '}
          <Link to='/docs/connect'>automatic CRDT-based conflict resolution</Link> and{' '}
          <Link to='/docs/database-api/replication'>cloud replication</Link>.
        </p>
      </div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🏔</p>
        <h2 className={common.subHeading}>Scale</h2>
        <p className={common.text}>
          Deploy anywhere - from code sandboxes to production.{' '}
          <Link to='/docs/database-api/encryption'>Perfect for rapid development and demos</Link>{' '}
          that need to scale.
        </p>
      </div>
    </section>
  )
}
