import Head from '@docusaurus/core/lib/client/exports/Head';
import HomePageBackgroundImage from '../../static/img/_bg.svg';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';

function HomepageHeader() {
  return (
    <header className={styles.headerWrap}>
      <h1 className={styles.mainTitle}></h1>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      pageClassName={styles.mainLayout}
      description="Connect to DeFi Opportunities with Manifold"
    >
      <Head>
        <title>Manifold | Knowledgebase</title>
        <meta property="og:title" content="Manifold | Knowledgebase" />
        <meta
          property="og:description"
          content="Connect to DeFi Opportunities with Manifold"
        />
        <meta
          property="og:url"
          content="https://omnibus.manifoldfinance.com/"
        />
        <meta property="og:image" content="" />
        <meta
          property="og:site_name"
          content="Manifold Finance Documentation"
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Manifold | Documentation Hub" />
        <meta
          name="twitter:description"
          content="Connect to DeFi Opportunities with Manifold"
        />
        <meta name="twitter:image:alt" content="Manifold | Documentation Hub" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="@foldfinance" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.mainContainer}>
        <div className="page-container">
          <HomepageHeader />
          <div className={styles.section}>
            <HomepageFeatures />
          </div>
          <div className={styles.section2}>
            <HomepageDeveloperLinks />
          </div>
        </div>
        <HomepageFooter />
      </main>
    </Layout>
  );
}
