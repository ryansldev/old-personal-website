import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Footer from './components/Footer';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if(darkMode) {
      html?.classList.add('dark-mode');
      return;
    }

    html?.classList.remove('dark-mode');
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Ryan Lima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hello}>
            <div className={styles.avatar}>
              <Link href="https://github.com/ryansldev" passHref={true}>
                <a target="_blank">
                  <Image src="/profile.jpg" alt="Ryan Lima" width={200} height={200} />
                </a>
              </Link>
            </div>
            <h1>Ryan Lima</h1>
            <h2 style={{ marginBottom: '0.3em' }}>Sou UI/UX Designer e desenvolvedor FullStack</h2>
            <Link passHref={true} href="#projects">
              <div className={styles.scrollTo}>
                <div className={styles.scrollToIcon}>
                </div>
                Veja mais abaixo
              </div>
            </Link>
            <button className={styles.viewMode} onClick={() => setDarkMode(!darkMode ? true : false)}>
              { !darkMode ? <FiMoon size={24} /> : <FiSun size={24} /> }
              { !darkMode ? 'Dark Mode' : 'Light mode' }
            </button>
          </div>

          <h1 className={styles.projectsSectionTitle} id="projects">MEUS PROJETOS</h1>
          <div className={styles.projects}>
            <Link href="https://github.com/ryansldev/world-wide-dev" passHref={true}>
              <a target="_blank" className={styles.project} id={styles.wwdev}>
                <div className={styles.containerProject}>
                  <span className={styles.year}>2021</span>
                  <h1 className={styles.title}>
                    World Wide Dev – conecte devs ao redor do mundo
                  </h1>
                </div>
              </a>
            </Link>
            <Link href="https://github.com/ryansldev/letmeask" passHref={true}>
              <a target="_blank" className={styles.project} id={styles.letmeask}>
                <div className={styles.containerProject}>
                  <span className={styles.year}>2021</span>
                  <h1 className={styles.title}>
                    Letmeask – faça perguntas
                  </h1>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.contact}>
            <p>
              Estou aberto para novas experiências, precisa
              de um desenvolvedor ou designer?
            </p>
            <Link href="https://www.linkedin.com/in/ryansldev/" passHref={true}>
              <a target="_blank">
                <h1>Vamos trabalhar juntos <HiOutlineArrowNarrowRight size={32} /></h1>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
