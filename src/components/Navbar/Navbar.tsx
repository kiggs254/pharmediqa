'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/pharmediqa.png" 
            alt="PharmediQa Healthcare Solutions" 
            width={240} 
            height={65}
            priority
            className={styles.logoImage}
          />
        </Link>
        <div className={styles.links}>
          <Link href="/about">About Us</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact" className={styles.cta}>Partner With Us</Link>
        </div>
        <button className={styles.mobileNavIcon}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
