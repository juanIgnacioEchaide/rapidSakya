import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Promo from '../UI/organism/promo/index'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>

     <Promo/>
  {/*     <button onClick={checkMedia}>CHECK</button> */}
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
