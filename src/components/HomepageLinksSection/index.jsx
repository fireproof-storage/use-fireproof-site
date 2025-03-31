import React from 'react'
import Link from '@docusaurus/Link'

import s from './styles.module.css'
import common from '@site/src/pages/index.module.css'

export default function HomepageLinksSection() {
  return (
    <>
      <section className={common.section}>
        <h2 className={common.subHeading}>Tutorials:</h2>
        <Link className={`${s.docsLink} ${s.tutorialLink}`} to='docs/react-tutorial'>
          <img className={s.docsImage} src='/img/react-logo.svg' />
          <span>Learn how to create a simple todo list from scratch with React.js.</span>
        </Link>
        <Link className={`${s.docsLink} ${s.tutorialLink}`} to='/docs/solid-tutorial'>
          <img className={s.docsImage} src='/img/solid-logo.png' />
          <span>Learn basics of using Fireproof in SolidJS</span>
        </Link>
      </section>
      <section className={common.section}>
        <h2 className={common.subHeading}>Documentation:</h2>
        <Link className={s.docsLink} to='docs/welcome'><span className={s.emoji}>📚</span>Docks</Link>
      </section>
    </>
  )
}
