import ChevronRightImg from '../../../static/img/chevron-right.svg';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from './HomepagePreFooter.module.css';

const PreFooterData = {
  title: '🌀 Manifold Finance',
  text: 'Connecting you to DeFi Opportunities',
  button: {
    title: 'Launch dApp',
    href: 'https://staking.manifoldfinance.com',
  },
  image: require('../homepage-prefooter/img/image-footer.png').default,
};

export default function homepageFooter() {
  return (
    <section className={styles.prefooterWrap}>
      <div className={styles.prefooterFirstColumn}>
        <h2 className={styles.prefooterTitle}>{PreFooterData.title}</h2>
        <p className={styles.prefooterText}>{PreFooterData.text}</p>
        <Link to={PreFooterData.button.href} className={styles.prefooterButton}>
          <span>{PreFooterData.button.title}</span>
          <ChevronRightImg />
        </Link>
      </div>
      <img className={styles.prefooterImage} src={PreFooterData.image} alt={PreFooterData.title} />
    </section>
  );
}
