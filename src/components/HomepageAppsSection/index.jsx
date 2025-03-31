import React from 'react'
import Link from '@docusaurus/Link'

import s from './styles.module.css'
import common from '@site/src/pages/index.module.css'

export default function HomepageAppsSection() {
  return (
    <section className={`${s.applications} ${common.section}`}>
      <h2 className={common.subHeading}>🚀 Generate complete applications</h2>
      <p className={`${common.text} ${s.applicationsTest}`}>
        Perfect for AI code generation with no setup required. Ideal for ChatGPT quick starts and code sandbox demos.{' '}
        <br className={s.applicationsBr}/>
        For React developers, check out the <Link to='/docs/react-tutorial'>seLiveQuery tutorial</Link>{' '}
        for the recommended auto-refresh APIs. Get started by writing features, and <Link to='/docs/database-api/replication'>connect to the cloud</Link> after your app is awesome.
      </p>
      <ul className={s.appsList}>
        <li className={s.app}>
          <img className={s.appImage} src='/img/todo-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Todos</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/photo-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Photos</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/pixel-art-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Drawing</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/trivia-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Quiz</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/playlist-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Playlist</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/calculator-app.jpg' />
          <p className={`${common.hint} ${s.appHint}`}>Calculator</p>
        </li>
      </ul>
    </section>
  )
}
