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
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div style={{width: '50rem'}} className="card shadow--tl">
          <div class="card__body">
            <p>
              There isn't much in this landing page...
            </p>
          </div>
          <div class="card__footer">
            <a class="button button--lg button--outline button--primary" href="/docs">Read the Docs</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
