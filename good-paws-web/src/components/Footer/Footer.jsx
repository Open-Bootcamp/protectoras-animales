import * as React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.subcont1}>
        <Logo />
        <p className={styles.parragraph}>Adoptando un animal, le das una segunda vida a aquellos que no han tenido tanta suerte.</p>
        <div className={styles.footer_menu}>
          <a href='#' className={styles.footer_item}>Overview</a>
          <a href='#' className={styles.footer_item}>Overview</a>
          <a href='#' className={styles.footer_item}>Overview</a>
          <a href='#' className={styles.footer_item}>Overview</a>
          <a href='#' className={styles.footer_item}>Overview</a>
          <a href='#' className={styles.footer_item}>Overview</a>
        </div>
      </div>
      <section className={styles.subcont2}>
        <p>© 2022 Open Devs.</p>
        <a href="https://github.com/Open-Bootcamp/protectoras-animales" target="_blank" rel='noopener noreferrer'><FaGithub size={25} /></a>
      </section>
    </footer>
  )
}

export default Footer;