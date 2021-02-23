import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Promos from '../UI/organism/promos/index'
import Link from 'next/link'
import useQuery from '../utils/useQuery';
import { GET_PROMOS } from '../utils/constants';

export async function getServerSideProps(context){
  
  const { data }= useQuery( GET_PROMOS );
  return { props: { 
                    promos: data 
                  }}
} 

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rapid Sakya</title>
      </Head>

      <main>
        <Promos promos={props.promos} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
