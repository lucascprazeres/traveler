import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CityCard } from '../components/CityCard'

import styles from '../styles/Cities.module.css'

import citiesJSON from '../../cities.json'
import { City } from '.'
import { FiSearch, FiX } from 'react-icons/fi'
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

  function handleClearSearch() {
    setSearch('')
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
            <FiSearch size={18} color={search ? '#F25D27' : '#617480'} />
            <input
              type="text"
              placeholder="Qual cidade você procura?"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            {search && <FiX size={18} onClick={handleClearSearch} />}
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
                  <Link href={`/city/${city.id}`} key={city.id}>
                    <a>
                      <CityCard
                        city={city.name}
                        imageUrl={city.imageUrl}
                        locations={city.locations}
                        disabled={!filteredCityIds.includes(city.id)}
                      />
                    </a>
                  </Link>
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