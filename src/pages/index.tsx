import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '../components/Card'
import { Logo } from '../components/Logo'
import RestrictedAccess from '../components/RestrictedAccess'
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

          <RestrictedAccess />
        </header>

        <main>
          <section className={styles.hero}>
            <h1>
              Viva uma <br />
              grande <br />
              aventura
            </h1>

            <p>
              Descubra locais incríveis para se <br />
              visitar em cidades maravilhosas do <br /> Pará.
            </p>

            <Link href="/cities">
              <a>
                Descobrir todos os lugares
              </a>
            </Link>
          </section>

          <section className={styles.places}>
            <div className={styles.col}>
              <Card
                imageUrl='https://viagemeturismo.abril.com.br/wp-content/uploads/2016/01/estaccca7acc83o-das-docas-de-belecc81m-do-paracc81.jpg'
                city='Belém'
                locations={30}
              />

              <Card
                imageUrl='https://santarem.pa.gov.br/storage/posts/May2021/YnsSnMKhsDrQ97O1KJTczK0ImHT3j1ewK30SbVSZ.jpg'
                city='Santarém'
                locations={15}
              />

              <Card
                imageUrl='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/09/3c/4b/castanhal.jpg?w=700&h=500&s=1'
                city='Castanhal'
                locations={30}
              />
            </div>

            <div className={styles.col}>
              <Card
                imageUrl='https://www.oliberal.com/image/contentid/policy:1.283817:1650632793/Braganca.jpeg?f=3x2&$p$f=0597639'
                city='Bragança'
                locations={25}
              />

              <Card
                imageUrl='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/fd/e2/ff/visao-aerea-da-ilha-onde.jpg?w=600&h=400&s=1'
                city='São Caetano de Odivelas'
                locations={11}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
