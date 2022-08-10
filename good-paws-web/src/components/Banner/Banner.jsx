import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

function Banner() {
  return (
    <section className={styles.section}>
        <div className={styles.info}>
            <h1>Unimos protectoras y adoptantes</h1>
            <p>Adoptando un animal, le das una segunda vida a aquellos que no han tenido tanta suerte</p>
            <button className={styles.button}>Encuentra a tu mejor amigo</button>
        </div>
        <div className={styles.arrow}>
            <Image src="/arrow.svg" alt="Good Pawns Logo" width={230} height={260} />
        </div>
        <div className={styles.image}>
            <Image src="/illustration.svg" alt="Good Pawns Logo" width={500} height={426} />
        </div>
    </section>
  )
}

export default Banner;