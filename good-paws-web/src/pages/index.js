
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/Banner';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protectora de animales</title>
        <meta name="description" content="Adoptando un animal, le das una segunda vida a aquellos que no han tenido tanta suerte" />
        <link rel="icon" href="/accent.svg" />
      </Head>
      <Header />
      <Banner />
      <main className={styles.main}>
      </main>
      <Footer />
    </div>
  )
}
