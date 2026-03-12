import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Expertise from '@/components/Expertise/Expertise';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      
      {/* Introduction / About Summary with Premium Background */}
      <section className={`section-padding ${styles.aboutSection}`}>
        <div className={styles.aboutBgWrapper}>
          <Image 
            src="/images/about-bg.png" 
            alt="Healthcare Network" 
            fill 
            className={styles.aboutBgImage}
          />
          <div className={styles.aboutOverlay}></div>
        </div>
        
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.tag}>Who We Are</span>
              <h2 className={styles.aboutTitle}>Bridging the gap between policy, practice, and implementation.</h2>
              <p className={styles.aboutText}>
                PharmediQa is a strategic advisory firm dedicated to advancing health systems globally. 
                We bring together governments, donors, private sector players, and civil society around 
                shared health outcomes—ensuring that innovation solves the right problems, the right way, 
                at the right time.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <h3>Systems</h3>
                  <p>Strengthening local infrastructure for resilient healthcare delivery.</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Ethics</h3>
                  <p>Pioneering responsible AI and transparent data governance models.</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Impact</h3>
                  <p>Delivering measurable improvements in population health outcomes.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.aboutVisual}>
              <div className={styles.glassCard}>
                <div className={styles.glassCardHeader}>
                  <div className={styles.dot}></div>
                  <span>System Integrity Report</span>
                </div>
                <div className={styles.glassCardContent}>
                  <div className={styles.line}></div>
                  <div className={styles.line} style={{ width: '80%' }}></div>
                  <div className={styles.line} style={{ width: '60%' }}></div>
                </div>
                <div className={styles.glassCardFooter}>
                  <span className={styles.percentage}>98.5%</span>
                  <span>Efficiency Gain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Expertise />
      <HowWeWork />
      
      {/* Call to Action Section - Extremely Bold */}
      <section className={`section-padding ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaBadge}>Join the Movement</div>
            <h2>Ready to Transform Global Health Systems?</h2>
            <p>Collaborate with PharmediQa to design, fund, and scale the future of healthcare.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>Partner With Us Now</button>
              <button className={styles.secondaryCta}>Request Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
