import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.tag}>Get in Touch</span>
          <h1 className={styles.title}>Partner With <span className="text-gradient-teal">PharmediQa</span></h1>
          <p className={styles.subtitle}>
            Ready to strengthen health systems or scale your medical innovation? Or reach out to us for any inquiries.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Contact Details</h3>
              <p>Reach out to our global team directly via the channels below.</p>
              
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@pharmediqa.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin size={24} /></div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Global Healthcare Operations<br />Innovation Hub, Suite 500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="service">Services Inquiry</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={6} placeholder="How can we help your organization?" required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
