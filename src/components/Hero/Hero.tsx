'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    badge: "Healthcare Strategy",
    headline: <>Advancing Health Systems Through <span className={styles.tealText}>Strategy</span> and <span className={styles.orangeText}>Partnerships</span></>,
    subheadline: "PharmediQa works at the intersection of healthcare, technology, policy, and capital—designing scalable solutions that strengthen systems and unlock funding.",
    cta: "Partner With Us",
    align: 'left'
  },
  {
    id: 2,
    badge: "Co-creation & Impact",
    headline: <>Designing <span className={styles.orangeText}>Scalable</span> Solutions for <span className={styles.tealText}>Global Impact</span></>,
    subheadline: "We design and manage high-impact partnerships that bring together governments, donors, and private sector players around shared health outcomes.",
    cta: "Explore Our Work",
    align: 'right'
  },
  {
    id: 3,
    badge: "AI & Data Intelligence",
    headline: <>Transforming <span className={styles.tealText}>Complex Data</span> into <span className={styles.orangeText}>Actionable Intelligence</span></>,
    subheadline: "We apply AI and data science to move from reporting to foresight—responsibly, transparently, and at scale for better population outcomes.",
    cta: "See Our Expertise",
    align: 'left'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.bgVideo}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className={`${styles.content} ${styles[slides[currentSlide].align]}`}
            initial={{ opacity: 0, x: slides[currentSlide].align === 'left' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: slides[currentSlide].align === 'left' ? 50 : -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              {slides[currentSlide].badge}
            </div>
            <h1 className={styles.headline}>
              {slides[currentSlide].headline}
            </h1>
            <p className={styles.subheadline}>
              {slides[currentSlide].subheadline}
            </p>
            
            <div className={styles.ctas}>
              <button className={styles.primaryBtn}>{slides[currentSlide].cta}</button>
              <button className={styles.secondaryBtn}>Learn More</button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.navDots}>
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`${styles.dot} ${currentSlide === i ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
