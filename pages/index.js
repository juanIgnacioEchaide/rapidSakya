import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Promos from '../UI/organism/promos/index'
import Link from 'next/link'
import useQuery from '../utils/useQuery';

function getServerSivedProps(){
  const { data }= useQuery('getPromos');
  if(data.loading){
    return (<div> loading...</div>)}
    else {
      return data;
  }
} 

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>
      <main>
        <Promos promos={data} />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
