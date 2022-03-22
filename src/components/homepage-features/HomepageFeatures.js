import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from '@docusaurus/core/lib/client/exports/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OpenMEV',
    description:
      'OpenMEV aims to bring new liquidity to SushiSwap, decrease slippage, expand our pool offerings, and foster exciting synergistic partnerships with other DeFi projects.',
    image: <div className={clsx(styles.featureCardImage, styles.onsenImage)} />,
    links: [
      {
        title: 'Introduction',
        href: '#',
      },
      {
        title: 'Integrations',
        href: '#',
      },
      {
        title: 'Markets',
        href: '#',
      },
      {
        title: 'OpenMEV',
        href: '#',
      },
      {
        title: 'API',
        isSwagger: false,
        href: '#',
      },
    ],
  },
  {
    title: 'OpenMEV',
    description:
      'OpenMEV is a decentralized protocol that incentives liquidity and liquidity rebates for protocols and liquidity.',
    image: (
      <div
        className={clsx(
          styles.featureCardImage,
          styles.spotPriceAggregatorImage,
        )}
      />
    ),
    links: [
      {
        title: 'Overview',
        href: '/docs/bentobox/introduction',
      },
      {
        title: 'Concepts',
        href: '/docs/bentobox/concepts',
      },
      {
        title: 'Connecting and usage',
        href: '#',
      },
      {
        title: 'API',
        isSwagger: false,
        href: '#',
      },
    ],
  },
  {
    title: 'Fold Vaults',
    description:
      'Fold Vaults is a protocol that incentivizes liquidity and liquidity rebates for protocols and liquidity.',
    image: (
      <div className={clsx(styles.featureCardImage, styles.sushipartyImage)} />
    ),
    links: [
      {
        title: 'Introduction',
        href: '#',
      },
      {
        title: 'Vaults',
        href: '#',
      },
      {
        title: 'Contract APIs',
        href: '#',
      },
    ],
  },
];

function Feature({ title, description, image, links }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <div>
          <h3 className={styles.featureCardTitle}>{title}</h3>
          <p className={styles.featureCardText}>{description}</p>
        </div>
        {image}
      </div>
      <div className={styles.featureCardLinks}>
        {links.map((link, index) => {
          if (link.title) {
            return (
              <Link
                href={link.href}
                className={styles.featureCardLinkWrap}
                key={index}
              >
                <p className={styles.featureCardLinkTitle}>
                  <span>{link.title}</span>
                  {link.isSwagger && (
                    <span className={styles.featureCardLinkSwagger}>
                      Swagger
                    </span>
                  )}
                  {link.versionLabel && (
                    <span className={styles.featureCardLinkVersionLabel}>
                      {link.versionLabel}
                    </span>
                  )}
                </p>
                <ArrowOutside className={styles.featureCardLinkIcon} />
              </Link>
            );
          } else {
            return <span />;
          }
        })}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <h2 className={styles.featureListTitle}>Manifold Platform Hub</h2>
      <div className={styles.featureList}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
