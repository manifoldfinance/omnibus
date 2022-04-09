import ChevronRightImg from '../../../static/img/chevron-right.svg';
import DiscordImage from '../../../static/img/icons/discord.svg';
import FooterLogoImage from '../../../static/img/footer-logo.svg';
import GithubImage from '../../../static/img/icons/github.svg';
import Link from '@docusaurus/Link';
import MediumImage from '../../../static/img/icons/medium.svg';
import React from 'react';
import RedditImage from '../../../static/img/icons/reddit.svg';
import TelegramImage from '../../../static/img/icons/telegram.svg';
import TwitterImage from '../../../static/img/icons/twitter.svg';
import YoutubeImage from '../../../static/img/icons/youtube.svg';
import clsx from 'clsx';
import styles from './HomepageFooter.module.css';

const FooterLinks = {
  links: [
    {
      title: 'Markets',
      links: [
        {
          title: 'Liquidity',
          link: '#',
        },
        {
          title: 'Staking',
          link: '#',
        },
        {
          title: 'Lending',
          link: '#',
        },
      ],
    },
    {
      title: 'Networks',
      links: [
        {
          title: 'Ethereum',
          link: '#',
        },
        {
          title: 'Avalanche',
          link: '#',
        },
        {
          title: 'Polygon',
          link: '#',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          title: 'Forums',
          link: '#',
        },
        {
          title: 'Support',
          link: '#',
        },
        {
          title: 'Governance',
          link: '#',
        },
        {
          title: 'Contact',
          link: '#',
        },
        {
          title: 'Legal',
          link: '#',
        },
      ],
    },
  ],
  socialMedia: [
    {
      href: '#',
      image: <MediumImage />,
    },
    {
      href: '#',
      image: <RedditImage />,
    },
    {
      href: '#',
      image: <TwitterImage />,
    },
    {
      href: '#',
      image: <DiscordImage />,
    },
    {
      href: '#',
      image: <YoutubeImage />,
    },
    {
      href: '#',
      image: <TelegramImage />,
    },
    {
      href: '#',
      image: <GithubImage />,
    },
  ],
};

export default function HomepageFooter() {
  return (
    <section className={styles.footerTopBorder}>
      <div className={clsx('page-container', styles.footer)}>
        <div className={styles.footerColumnWrap}>
          {FooterLinks.links.map((props, idx) => (
            <div className={styles.footerColumn} key={idx}>
              <span className={styles.footerColumnTitle}>{props.title}</span>
              {props.links.map((linkProps, index) => (
                <Link key={index} className={styles.footerColumnLink} to={linkProps.link}>
                  {linkProps.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className={styles.footerSubscribeTitle}>Primitives Report</p>
          <p className={styles.footerSubscribeText}>Listings, events, and more</p>
          <Link to="https://manifoldfinance.github.io/primitives/" className={styles.footerSubscribeButton}>
            <span className={styles.footerSubscribeButtonText}>Subscribe</span>
            <ChevronRightImg />
          </Link>
          <div className={styles.socialMediaWrap}>
            {FooterLinks.socialMedia.map((media, idx) => (
              <Link className={styles.socialMediaLink} to={media.href} key={idx}>
                {media.image}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={clsx('page-container', styles.afterFooter)}>
        <div className={styles.footerLogoContainer}>
          <FooterLogoImage className={styles.footerLogo} />
          <span>&#169; {new Date().getFullYear()} Manifold Finance, Inc - All Rights Reserved </span>
        </div>
        <a href="https://etherscan.io/address/0xd084944d3c05cd115c09d072b9f44ba3e0e45921" target="_blank">
          FOLDv1
        </a>
        <a href="" target="_blank">
          📚 Manifold Finance Contributors
        </a>
      </div>
    </section>
  );
}
