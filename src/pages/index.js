import React from 'react';
//import clsx from 'clsx';
import Link from '@docusaurus/Link';
//import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

//import styles from './index.module.css';

/*
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            📚 Check out the Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}
*/

export default function Home() {
  //const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div style={{
          width: 'auto',
          textAlign: 'center',
        }}>
          <p>There isn't much in this landing page...</p>
          <div style={{ margin: '0 auto' }} className="card card-button" id='main'>
            <a style={{ textDecoration: 'none' }} href="/docs"><div className="card__body">
              <span style={{
                color: 'var(--ifm-color-secondary)',
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)'
              }}>Read the Docs</span>
            </div></a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
