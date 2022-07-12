import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '../components/Card'

import styles from '../styles/Cities.module.css'

import citiesJSON from '../../cities.json'
import { City } from '.'
import { FiSearch } from 'react-icons/fi'
import { Logo } from '../components/Logo'
import { RestrictedAccess } from '../components/RestrictedAccess'

interface CitiesListingProps {
  cities: City[];
}

export default function CitiesListing({ cities }: CitiesListingProps) {
  const [search, setSearch] = useState('')
  const [filteredCityIds, setFilteredCityIds] = useState<number[]>(() => {
    return cities.map(city => city.id)
  })

  useEffect(handleChangeSearch, [search])

  function handleChangeSearch() {
    const filteredCities = cities.filter(filterCitiesBySeachTerm)
    const filteredIds = filteredCities.map(city => city.id)

    setFilteredCityIds(filteredIds)
  }

  function filterCitiesBySeachTerm({ name }: City) {
    const cityNameLowered = name.toLowerCase()
    const searchTermLowered = search.toLowerCase()

    return cityNameLowered.startsWith(searchTermLowered)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>traveler | cities</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Logo />

          <div className={styles.inputContainer}>
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="Qual cidade você procura?"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </div>

          <RestrictedAccess />
        </div>
      </header>

      <div className={styles.content}>
        {filteredCityIds.length > 0
          ? (
            <main>
              <div className={styles.heading}>
                <h1>Selecione uma cidade</h1>

                <span></span>
              </div>

              <section className={styles.cards}>
                {cities.map(city => (
                  <Card
                    key={city.id}
                    city={city.name}
                    imageUrl={city.imageUrl}
                    locations={city.locations}
                    disabled={!filteredCityIds.includes(city.id)}
                  />
                ))}
              </section>
            </main>
          )
          : (
            <div className={styles.fallback}>
              <img src="/sad-emoji.svg" alt="" />
              <p>Sem resultados.</p>
              <p>Tente outra busca</p>
            </div>
          )}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      cities: citiesJSON
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}