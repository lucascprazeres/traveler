import Head from 'next/head'
import { Card } from '../components/Card'
import { SearchHeader } from '../components/SearchHeader'

import styles from '../styles/Cities.module.css'

export default function Cities() {
  return (
    <div className={styles.container}>
      <Head>
        <title>traveler | cities</title>
      </Head>

      <SearchHeader />

      <main>
        <div className={styles.heading}>
          <h1>Selecione uma cidade</h1>

          <span></span>
        </div>

        <section className={styles.cards}>
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
        </section>
      </main>
    </div>
  )
}