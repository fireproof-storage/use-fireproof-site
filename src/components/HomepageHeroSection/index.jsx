import React from 'react'
import Link from '@docusaurus/Link'
import { copyText } from '@site/src/utils/copyText'

import s from './styles.module.css'
import common from '@site/src/pages/index.module.css'

export default function HomepageHeroSection() {
  return (
    <header className={s.heroBanner}>
      <div className={s.heroContent}>
        <h1 className={s.heroTitle}>Vibe coding<Link className={s.heroTitleLink} to='https://vibes.diy/'>*</Link> just got easier</h1>
        <p className={s.heroSubTitle}>Build apps instantly with our <b>AI templates.</b></p>
        <div className={s.heroCodeBox + ' copytextWrap'}>
          <code className={s.heroCode + ' copytext'}>npm install use-fireproof</code>
          <div className={common.copyIcon + ' copyicon'} onClick={copyText}></div>
          <div className={common.copiedIcon + ' copiedicon'}></div>
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
