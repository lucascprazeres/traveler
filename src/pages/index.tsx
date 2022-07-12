import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { Card } from '../components/Card'
import { Logo } from '../components/Logo'
import { RestrictedAccess } from '../components/RestrictedAccess'

import styles from '../styles/Home.module.css'

import citiesJSON from '../../cities.json';

export interface City {
  id: number;
  name: string;
  imageUrl: string;
  locations: number;
}

export default function Home() {
  const [cities, setCities] = useState<City[]>(citiesJSON)  
  
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
              {cities.slice(0,4).map(city => (
                <Card
                  key={city.id}
                  city={city.name}
                  imageUrl={city.imageUrl}
                  locations={city.locations}
                />
              ))}
            </div>

            <div className={styles.col}>
              {cities.slice(3,5).map(city => (
                <Card
                  key={city.id}
                  city={city.name}
                  imageUrl={city.imageUrl}
                  locations={city.locations}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}