import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Productos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estos son los productos</title>
      </Head>

      <main className={styles.main}>
        <h1>Nuestros productos</h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
