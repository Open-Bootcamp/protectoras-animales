import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
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
      <main className={styles.main}>
      </main>
    </div>
  )
}
