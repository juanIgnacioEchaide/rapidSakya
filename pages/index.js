import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Promos from '../UI/organism/promos/index'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>

      <main>
        <Promos/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
