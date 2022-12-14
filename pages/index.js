import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import FeaturedMusic from '../components/FeaturedMusic'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="icon" href="/favicon.ico" />

      </Head>

      {/* FIX THIS */}
      <section className={styles.mobile_logo_container}>
        <Link href="/">
          <a>
            <picture className={styles.mobile_logo_picture}>
              <source srcSet="../images/whiteLogo.png" type="image/png" />
              <img className={styles.main_logo} src="../images/whiteLogo.png" alt="logo" />
            </picture>
          </a>
        </Link>
      </section>

      {/* END FIX THIS */}
      <Header className={styles.header_components} />
      <main className={styles.main}>
        <picture className={styles.img_container}>
          <source srcSet="../images/pexels-cn-tower.jpg" type="image/jpeg" />
          <img src="../images/pexels-cn-tower.jpg" alt="pexels-cn-tower" />
        </picture>
        <FeaturedMusic />
      </main>



    </div>
  )
}