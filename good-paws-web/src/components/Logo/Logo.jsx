import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
        <Link href="/">
        <img src="/logo.svg" alt="Good Pawns Logo" />
        </Link>
    </div>
  )
}

export default Logo;