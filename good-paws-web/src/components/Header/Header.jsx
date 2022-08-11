import React, { useState } from "react";
import styles from './Header.module.css';
import Logo from "../Logo/Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoimg}>
          <Logo />
        </div>
        <button onClick={handleOpen} className={styles.nav_toggle}>
          <span className={isOpen ? styles.brgOpn1 : styles.burguer1}></span>
          <span className={isOpen ? styles.brgOpn2 : styles.burguer2}></span>
          <span className={isOpen ? styles.brgOpn3 : styles.burguer3}></span>
        </button>
        <ul className={isOpen ? `${styles.nav_menu} ${styles.nav_menu_visible}` : styles.nav_menu}>
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
