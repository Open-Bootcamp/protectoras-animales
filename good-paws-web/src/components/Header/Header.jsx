import React, { useState } from "react";
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo.svg" alt="Good Pawns Logo" />
            </Link>
          </div>
          <button onClick={handleOpen} className={styles.nav_toggle}>
            <span className={isOpen ? styles.burguer1 : styles.brgOpn1}></span>
            <span className={isOpen ? styles.burguer2 : styles.brgOpn2}></span>
            <span className={isOpen ? styles.burguer3 : styles.brgOpn3}></span>
          </button>
          <ul className={isOpen ? styles.nav_menu : `${styles.nav_menu} ${styles.nav_menu_visible}`}>
            <div className={styles.options}>
              <li className={styles.nav_item}><a className={styles.nav_item_link} href="/">Quiero adoptar</a></li>
              <li className={styles.nav_item}><a className={styles.nav_item_link} href="/">Protectoras</a></li>
              <li className={styles.nav_item}><a className={styles.nav_item_link} href="/">Colaborar</a></li>
            </div>
            <div className={styles.buttons}>
              <li><button className={styles.nav_btn1}>Soy protectora</button></li>
              <li><button className={styles.nav_btn2}>Iniciar sesión</button></li>
            </div>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
