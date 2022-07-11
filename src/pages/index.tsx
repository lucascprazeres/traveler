import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Logo } from '../components/Logo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>traveler | home</title>
      </Head>

      <div className={styles.content}>
        <header>
          <Logo />

          <span />
        </header>

        <main>
          <section className={styles.hero}>
            <h1>
              Viva uma grande aventura
            </h1>

            <p>
              Descubra locais incríveis para se <br />
              visitar em cidades maravilhosas do <br /> Pará.
            </p>

            <Link href="#">
              <a>
                Descobrir todos os lugares
              </a>
            </Link>
          </section>

          <section className={styles.places}></section>
        </main>
      </div>
    </div>
  )
}

export default Home
