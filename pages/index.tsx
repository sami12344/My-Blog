import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../Components/Header/Header'
import styles from '../styles/Home.module.css'
import GlobalStyle from '../styles/global'
const Home: NextPage = () => {
   const [menuToggle, setMenuToggle] = useState(false)
   const menuClicked = () => {
     setMenuToggle(!menuToggle)
   }
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header menuToggle={menuToggle} menuClicked={menuClicked}/>
    </div>
  )
}

export default Home
