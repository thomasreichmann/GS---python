import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title" style={{color: "white"}}>
                    {siteConfig.title}
                </Heading>
                {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
                {/*<div className={styles.buttons}>*/}
                {/*    <Link*/}
                {/*        className="button button--secondary button--lg"*/}
                {/*        to="/docs/intro">*/}
                {/*        Docusaurus Tutorial - 5min ⏱️*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </header>
    );
}

function Welcome() {
    return (
        <header className={clsx('hero ', styles.heroBanner, styles.welcome)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Bem vindo a documentação do PRISMO!
                </Heading>

                <Heading as="h3" className="hero__tag">
                    (Plataforma de Recursos Integrados de Sustentabilidade Marinha e
                    Oceânica)
                </Heading>

                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/category/prismo-api">
                        Ir direto a documentação!
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <Welcome/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
