import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Promo from '../UI/organism/promo/index'
import Link from 'next/link'

export default function Home({size}) {
  console.log(size);
  
  const linkprod = "productos"
  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>

     <Promo/>
     {/*  <Link href='${linkdprod}'><a>Productos</a></Link> */}
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
