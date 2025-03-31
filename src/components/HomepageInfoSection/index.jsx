import React from 'react'
import Link from '@docusaurus/Link'
import { copyText } from '@site/src/utils/copyText'

import s from './styles.module.css'
import common from '@site/src/pages/index.module.css'

export default function HomepageInfoSection() {
  return (
    <section className={`${s.infoBox} ${common.section}`}>
      <div className={`${s.infoItem} ${s.itemLarge}`}>
        <h2 className={common.subHeading}>📦 Lightweight install</h2>
        <p className={common.text}>
          Perfect for AI-generated single-file apps. Includes live queries, file attachments, and automatic persistence - everything you need in one package.
        </p>
        <div className={s.infoCodeBox + ' copytextWrap'}>
          <code className={s.infoCode + ' copytext'}>npm install use-fireproof</code>
          <div className={`${common.copyIcon} ${s.infoCopyIcon} copyicon`} onClick={copyText}></div>
          <div className={`${common.copiedIcon} ${s.infoCopiedIcon} copiedicon`}></div>
        </div>
        <p className={common.text} style={{ maxWidth: '500px'}}>
          The{' '}
          <Link to='https://www.npmjs.com/package/use-fireproof'>use-fireproof</Link> module runs
          anywhere, with bundles built for Node.js and the browser, and optional <Link to='/docs/react-hooks/use-live-query'>React hooks</Link>.
        </p>
      </div>
      <div className={s.infoItem}>
        <h2 className={common.subHeading}>🔐 Built-in sync and collaboration</h2>
        <p className={common.text}>
          Works offline-first with automatic CRDT-based conflict resolution. Every operation is{' '}
          <Link to='/docs/database-api/encryption'>end-to-end encrypted</Link> and{' '}
          <Link to='https://fireproof.storage/posts/from-mlops-to-point-of-sale:-merkle-proofs-and-data-locality/'>
            accelerated by cryptographic proofs
          </Link>
          . Deploy anywhere - from code sandboxes to production.
        </p>
      </div>
      <div className={s.infoItem}>
        <h2 className={common.subHeading}>📝 Open-source</h2>
        <p className={common.text}>
          Fireproof is dual-licensed under the Apache 2.0 and MIT license and is free to use.{' '}
          <Link to='/docs/contributing'>Read about contributing</Link>.
        </p>
      </div>
      <p className={`${common.hint} ${s.infoHint}`}>One shot apps</p>
    </section>
  )
}
