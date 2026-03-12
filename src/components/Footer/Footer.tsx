'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image 
              src="/images/pharmediqa.png" 
              alt="PharmediQa Logo" 
              width={250} 
              height={80}
              className={styles.logo}
            />
            <p className={styles.brandDesc}>
              Designing scalable solutions that strengthen health systems, unlock funding, and improve population outcomes across the globe.
            </p>
            <div className={styles.socials}>
              <Link href="#"><Linkedin size={22} /></Link>
              <Link href="#"><Twitter size={22} /></Link>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4>Expertise</h4>
            <Link href="#">Partnerships</Link>
            <Link href="#">Fundraising</Link>
            <Link href="#">AI & Data Science</Link>
            <Link href="#">Strategy & Innovation</Link>
            <Link href="#">Government Relations</Link>
          </div>

          <div className={styles.linksColumn}>
            <h4>Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Our Work</Link>
            <Link href="#">Insights</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
          </div>

          <div className={styles.contactColumn}>
            <h4>Contact Us</h4>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>info@pharmediqa.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>Global Healthcare Operations</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} PharmediQa Healthcare Solutions. Leading with strategy, data, and integrity.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
