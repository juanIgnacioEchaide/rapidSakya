import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const linkprod = "productos"
  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>

      <main className={styles.main}>
        <h1>Rapid Sakya</h1>
      </main>
     {/*  <Link href='${linkdprod}'><a>Productos</a></Link> */}
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
