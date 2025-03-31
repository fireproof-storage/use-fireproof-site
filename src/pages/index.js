import React from 'react'
import Layout from '@theme/Layout'
import HomepageHeroSection from '@site/src/components/HomepageHeroSection'
import HomepageFeaturesSection from '@site/src/components/HomepageFeaturesSection'
import HomepageAppsSection from '@site/src/components/HomepageAppsSection'
import HomepageInfoSection from '@site/src/components/HomepageInfoSection'
import HomepageLinksSection from '@site/src/components/HomepageLinksSection'

import s from './index.module.css'

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
