import Head from 'next/head'
import styles from '../../styles/home.module.scss'
import { Ads } from '../components/Ads/index'
import { AdsFooter } from '../components/AdsFooter/index'


export default function Home() {

  return (
    <>
      <Head>
        <title>Blog Builder Seu Negócio Online - Home</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.sectionContent}>
          <nav>
            <br />
            <Ads />
          </nav>
          <article>
            <AdsFooter />
          </article>
        </section>
        
      </main>
    </>
  )
}