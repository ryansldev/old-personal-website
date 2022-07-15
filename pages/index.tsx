import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Clock from "./components/Clock";
import Networks from "./components/Networks";
import Project from "./components/Project";
import ScrollTo from "./components/ScrollTo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ryan Lima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Clock />
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1>RYAN S. LIMA</h1>
            <h2>Desenvolvedor Fullstack focado em eficiência.</h2>
            <Networks />

            <ScrollTo href="#about" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          id="about"
          className={styles.about}
        >
          <div className={styles.container}>
            <p>
              Olá, meu nome é <strong>Ryan Lima</strong> e sou um desenvolvedor{" "}
              <strong>focado em eficiência.</strong> Deve estar se perguntando o
              motivo de eu ter deixado isso claro, e irei explicar.
            </p>
            <p>
              O mundo está mudando, inovações e novas soluções para problemas
              surgem a cada dia de formas diferentes e de forma muito rápida, e
              esse é o motivo.
            </p>
            <p>
              Em um mundo onde tudo acontece muito rápido, empresas e startups
              precisam de extrema eficiência, solucionar problemas rápido e
              desenvolver soluções com eficácia e performance é essencial.
            </p>
            <p>
              Por isso estou ligado às melhores tecnologias do mercado: Node.js,
              Typescript, React, Next.js, React Native e a lista não termina tão
              cedo.
            </p>
            <p>
              Mas sabe o que todas essas stacks têm em comum? Todas elas se
              conectam de forma simples. Stacks realmente eficientes e
              conectadas que formam uma estrutura sólida para qualquer empresa.
            </p>
            <p>
              A cada dia vemos mais gigantes como Facebook, Instagram, Discord e
              muitas outras empresas ao redor do mundo utilizando essas stacks.
              E sua empresa não deveria ficar de fora.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className={styles.projects}
          id="projects"
        >
          <h1>PROJETOS</h1>
          <p>Projetos que desenvolvi ao longo da minha carreira</p>

          <Project
            mockups={[
              {
                url: "/assets/feedget-iphone-mockup.webp",
              },
              {
                url: "/assets/feedget-ipad-mockup.webp",
              },
            ]}
          >
            <p>
              <strong>Feedget Widget</strong> foi um projeto desenvolvido em um
              evento chamado <strong>NLW</strong>, nesse evento que acontece
              todos os anos sempre criamos uma aplicação do{" "}
              <strong>total zero</strong> em uma semana com as melhores stacks
              de todo mercado. Essa aplicação constitui em um widget que pode
              ser utilizado em qualquer sistema para receber feedbacks.
            </p>

            <p>
              A aplicação também foi colocada no ar por mim, então você pode
              verificar online {""}
              <Link href="https://feedget-web-mauve.vercel.app/" passHref>
                <a target="_blank">clicando aqui</a>
              </Link>
            </p>

            <p>
              Projeto no GitHub: {""}
              <Link href="https://github.com/ryansldev/feedget-web" passHref>
                <a target="_blank">Web</a>
              </Link>
              {""} e {""}
              <Link href="https://github.com/ryansldev/feedget-server" passHref>
                <a target="_blank">API</a>
              </Link>
            </p>
          </Project>

          <Project
            projectLink="https://github.com/ryansldev/event-platform"
            mockups={[
              {
                url: "/assets/event-platform-iphone-mockup.webp",
              },
              {
                url: "/assets/event-platform-ipad-mockup.webp",
              },
            ]}
          >
            <p>
              <strong>Event platform</strong> foi uma aplicação desenvolvida no{" "}
              <strong>Ignite Lab</strong> que é da mesma empresa responsável
              pela NLW, a {""}
              <Link href="https://www.rocketseat.com.br/" passHref>
                <a target="_blank">Rocketseat</a>
              </Link>
            </p>

            <p>
              Desta vez tivemos uma plataforma de eventos, para o usuário é
              simples, ele entra colocando seu e-mail e está tudo pronto, todas
              as aulas estarão disponíveis.
            </p>

            <p>
              Para o instrutor, basta cadastrar a aula com um vídeo hospedado no
              YouTube, data de liberação, título, descrição e etc. Na data
              cadastrada o conteúdo ficará disponível na plataforma.
            </p>

            <p>
              Caso queira conferir o projeto,{" "}
              <Link href="https://github.com/ryansldev/event-platform">
                <a target="_blank">clique aqui</a>
              </Link>{" "}
              {""}
              ou na imagem.
            </p>
          </Project>

          <Project
            image="https://unsplash.com/photos/_nm_mZ4Cs2I/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3MjAwNjQ0&force=true&w=1920"
            projectLink="https://github.com/ryansldev/letmeask"
            imageAt="right"
          >
            <p>
              Em uma das milhares de vezes que participei de uma{" "}
              <strong>NLW</strong>, criamos uma plataforma para o
              desenvolvimento de perguntas e respostas online em uma live stream
              para facilitar o criador de conteúdo a organizar e categorizar as
              perguntas.
            </p>

            <p>
              Para conferir o projeto,{" "}
              <Link href="https://github.com/ryansldev/letmeask" passHref>
                <a target="_blank">clique aqui</a>
              </Link>
            </p>
          </Project>

          <Project
            projectLink="https://github.com/ryansldev/world-wide-dev"
            image="https://unsplash.com/photos/Q1p7bh3SHj8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzB8fGNvbm5lY3Rpb258ZW58MHx8fHwxNjU3MTkzODE5&force=true&w=1920"
          >
            <p>
              <strong>WWD</strong> foi um projeto desenvolvido por mim a alguns
              anos que será reformulado em outro projeto chamado
              <strong> dev.radar.</strong>
            </p>
            <p>
              O intuito desse projeto é conectar desenvolvedores ao redor do
              mundo de uma forma simples e prática.
            </p>

            <p>
              Para conferir o projeto,{" "}
              <Link href="https://github.com/ryansldev/world-wide-dev" passHref>
                <a target="_blank">clique aqui</a>
              </Link>
            </p>
          </Project>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className={styles.network}
        >
          <div className={styles.container}>
            <h2>
              Precisa de um desenvolvedor?
              <Link href="https://www.linkedin.com/in/ryansldev/" passHref>
                <a target="_blank">Entre em contato</a>
              </Link>
            </h2>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
