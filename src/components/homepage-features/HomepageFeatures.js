import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from '@docusaurus/core/lib/client/exports/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OpenMEV',
    description:
      'OpenMEV  enables protocols to recapture arbitrage opportunities and liquidity by offering a percentage of the protocols harvest upfront, today.',
    image: <div className={clsx(styles.featureCardImage, styles.defiTokens)} />,
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
    title: 'ETH Staking',
    description:
      'The most liquid ETH2 Staking Pool with the highest APY.',
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
        href: '#',
      },
      {
        title: 'Infrastructure',
        href: '#',
      },
      {
        title: 'Risk Management',
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
      'Fold Vaults enable lending and borrowing of ETH and ERC20 tokens.',
    image: (
      <div className={clsx(styles.featureCardImage, styles.exploreEthereum)} />
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
        title: 'Lending',
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
                      API Spec
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
