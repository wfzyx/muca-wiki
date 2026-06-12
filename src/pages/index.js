import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const SECTIONS = [
  {icon: '🛡️', label: 'Classes & Builds', to: '/docs/classes-builds'},
  {icon: '⚔️', label: 'Itens & Crafting', to: '/docs/itens-crafting'},
  {icon: '🗺️', label: 'Mapas & Dungeons', to: '/docs/mundo-dungeons'},
  {icon: '🧮', label: 'Mecânicas de Jogo', to: '/docs/mecanicas'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/">
            Entrar na Wiki →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          {SECTIONS.map((s) => (
            <div className="col col--3" key={s.to}>
              <Link to={s.to} className={clsx('card', styles.sectionCard)}>
                <span className={styles.sectionIcon}>{s.icon}</span>
                <span>{s.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
