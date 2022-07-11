import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>traveler | home</title>
      </Head>

      <h1>Hello, world</h1>
    </div>
  )
}

export default Home
