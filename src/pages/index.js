import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import s from './index.module.css'

function handleCopy(e) {
  const parentNode = e.currentTarget.parentNode
  const text = parentNode?.querySelector('.copytext')?.innerText
  if (text) {
    navigator.clipboard.writeText(text)
    const copyIcon = parentNode.querySelector('.copyicon')
    const copiedIcon = parentNode.querySelector('.copiedicon')
    copyIcon.style.display = 'none'
    copiedIcon.style.display = 'block'
    setTimeout(() => {
      copyIcon.style.display = 'block'
      copiedIcon.style.display = 'none'
    }, 1500)
  }
}

function HomepageHeroSection() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={s.heroBanner}>
      <div className={s.heroContent}>
        <h1 className={s.heroTitle}>{siteConfig.title}</h1>
        <p className={s.heroSubTitle}>{siteConfig.tagline}</p>
        <div className={s.heroCodeBox + ' copytextWrap'}>
          <code className={s.heroCode + ' copytext'}>npm install use-fireproof</code>
          <div className={s.copyIcon + ' copyicon'} onClick={handleCopy}></div>
          <div className={s.copiedIcon + ' copiedicon'}></div>
        </div>
        <div className={s.heroButtons}>
          <Link
            className={s.heroButton}
            to='https://chatgpt.com/g/g-67bd0ebe210081918561667c08662d03-vibe-coding-with-fireproof'
          >
            ChatGPT
          </Link>
          <Link
            className={s.heroButton}
            to='https://v0.dev/chat/fork-of-fireproof-vibecoder-EBSLa63DQUd?b=b_OavhZ3eO2qn'
          >
            V0
          </Link>
          <Link
            className={s.heroButton}
            to='https://lovable.dev/projects/cbf5e6f5-0b4d-4467-93c3-c4d2a2c6922a'
          >
            Lovable
          </Link>
          <Link
            className={s.heroButton}
            to='https://bolt.new/~/bolt-vite-react-wvkz6fkw'
          >
            Bolt.new
          </Link>
          <Link
            className={`${s.heroButton} ${s.heroButtonAccent}`}
            to='https://use-fireproof.com/llms.txt'
          >
            LLMs.txt
          </Link>
        </div>
      </div>
      <div className={s.bluredLogo}></div>
    </header>
  )
}

function HomepageFeaturesSection() {
  return (
    <section className={`${s.features} ${s.section}`}>
      <div className={s.featuresHeader}></div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🏗</p>
        <h2 className={s.subHeading}>Build</h2>
        <p className={s.text}>
          Generate complete applications in a single file. Perfect for AI code generation with no setup required. Ideal for{' '}
          <Link to='/docs/chatgpt-quick-start'>ChatGPT quick starts</Link> and{' '}
          <Link to='https://codesandbox.io/s/fireproof-react-antd-f6zbi7?file=/src/App.tsx'>
            code sandbox demos
          </Link>.
        </p>
      </div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🌩</p>
        <h2 className={s.subHeading}>Connect</h2>
        <p className={s.text}>
          Built-in sync and collaboration for AI-generated apps. Works offline-first with{' '}
          <Link to='/docs/connect'>automatic CRDT-based conflict resolution</Link> and{' '}
          <Link to='/docs/database-api/replication'>cloud replication</Link>.
        </p>
      </div>
      <div className={s.feature}>
        <p className={s.featuresEmoji}>🏔</p>
        <h2 className={s.subHeading}>Scale</h2>
        <p className={s.text}>
          Deploy anywhere - from code sandboxes to production.{' '}
          <Link to='/docs/database-api/encryption'>Perfect for rapid development and demos</Link>{' '}
          that need to scale.
        </p>
      </div>
    </section>
  )
}

function HomepageAppsSection() {
  return (
    <section className={`${s.applications} ${s.section}`}>
      <h2 className={s.subHeading}>🚀 Generate complete applications</h2>
      <p className={`${s.text} ${s.applicationsTest}`}>
        Perfect for AI code generation with no setup required. Ideal for ChatGPT quick starts and code sandbox demos.{' '}
        <br className={s.applicationsBr}/>
        For React developers, check out the <Link to='/docs/react-tutorial'>seLiveQuery tutorial</Link>{' '}
        for the recommended auto-refresh APIs. Get started by writing features, and <Link to='/docs/database-api/replication'>connect to the cloud</Link> after your app is awesome.
      </p>
      <ul className={s.appsList}>
        <li className={s.app}>
          <img className={s.appImage} src='/img/todo-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Todos</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/photo-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Photos</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/pixel-art-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Drawing</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/trivia-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Quiz</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/playlist-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Playlist</p>
        </li>
        <li className={s.app}>
          <img className={s.appImage} src='/img/calculator-app.jpg' />
          <p className={`${s.hint} ${s.appHint}`}>Calculator</p>
        </li>
      </ul>
    </section>
  )
}

function HomepageInfoSection() {
  return (
    <section className={`${s.infoBox} ${s.section}`}>
      <div className={`${s.infoItem} ${s.itemLarge}`}>
        <h2 className={s.subHeading}>📦 Lightweight install</h2>
        <p className={s.text}>
          Perfect for AI-generated single-file apps. Includes live queries, file attachments, and automatic persistence - everything you need in one package.
        </p>
        <div className={s.infoCodeBox + ' copytextWrap'}>
          <code className={s.infoCode + ' copytext'}>npm install use-fireproof</code>
          <div className={s.copyIcon + ' copyicon'} onClick={handleCopy}></div>
          <div className={s.copiedIcon + ' copiedicon'}></div>
        </div>
        <p className={s.text} style={{ maxWidth: '500px'}}>
          The{' '}
          <Link to='https://www.npmjs.com/package/use-fireproof'>use-fireproof</Link> module runs
          anywhere, with bundles built for Node.js and the browser, and optional <Link to='/docs/react-hooks/use-live-query'>React hooks</Link>.
        </p>
      </div>
      <div className={s.infoItem}>
        <h2 className={s.subHeading}>🔐 Built-in sync and collaboration</h2>
        <p className={s.text}>
          Works offline-first with automatic CRDT-based conflict resolution. Every operation is{' '}
          <Link to='/docs/database-api/encryption'>end-to-end encrypted</Link> and{' '}
          <Link to='https://fireproof.storage/posts/from-mlops-to-point-of-sale:-merkle-proofs-and-data-locality/'>
            accelerated by cryptographic proofs
          </Link>
          . Deploy anywhere - from code sandboxes to production.
        </p>
      </div>
      <div className={s.infoItem}>
        <h2 className={s.subHeading}>📝 Open-source</h2>
        <p className={s.text}>
          Fireproof is dual-licensed under the Apache 2.0 and MIT license and is free to use.{' '}
          <Link to='/docs/contributing'>Read about contributing</Link>.
        </p>
      </div>
      <p className={`${s.hint} ${s.infoHint}`}>One shot apps</p>
    </section>
  )
}


function HomepageLinksSection() {
  return (
    <>
      <section className={s.section}>
        <h2 className={s.subHeading}>Tutorials:</h2>
        <Link className={`${s.docsLink} ${s.tutorialLink}`} to='docs/react-tutorial'>
          <img className={s.docsImage} src='/img/react-logo.svg' />
          <span>Learn how to create a simple todo list from scratch with React.js.</span>
        </Link>
        <Link className={`${s.docsLink} ${s.tutorialLink}`} to='/docs/solid-tutorial'>
          <img className={s.docsImage} src='/img/solid-logo.png' />
          <span>Learn basics of using Fireproof in SolidJS</span>
        </Link>
      </section>
      <section className={s.section}>
        <h2 className={s.subHeading}>Documentation:</h2>
        <Link className={s.docsLink} to='docs/welcome'><span className={s.emoji}>📚</span>Docks</Link>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <Layout
      title={`The embedded database for AI Code Generation`}
      description='Generate complete, single-file applications with built-in data persistence and real-time sync.'
    >
      <HomepageHeroSection />
      <main className={s.main}>
        <HomepageFeaturesSection />
        <HomepageAppsSection />
        <HomepageInfoSection />
        <HomepageLinksSection />
      </main>
    </Layout>
  )
}

// import ThemedImage from '@theme/ThemedImage'
