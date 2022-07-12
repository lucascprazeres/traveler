import Head from 'next/head'
import { SearchHeader } from '../components/SearchHeader'

import styles from '../styles/Cities.module.css'

export default function Cities() {
  return (
    <div className={styles.container}>
      <Head>
        <title>traveler | cities</title>
      </Head>

      <SearchHeader />
    </div>
  )
}