'use client';

import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from './Expertise.module.css';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Users, DollarSign, Cpu, Lightbulb, Landmark } from 'lucide-react';

const pillars = [
  {
    title: 'Partnerships',
    icon: <Users size={48} />,
    description: 'PharmediQa designs and manages high-impact partnerships that bring together governments, donors, private sector players, and civil society around shared health outcomes.',
    details: [
      'Partnership strategy and stakeholder mapping',
      'Consortium and alliance building',
      'Governance models and partnership frameworks',
      'Facilitation of multi-sector collaboration'
    ],
    whyItMatters: 'Great ideas fail without the right partners. We ensure alignment, accountability, and momentum—so collaborations move from intent to execution.'
  },
  {
    title: 'Fundraising',
    icon: <DollarSign size={48} />,
    description: 'We help organisations unlock sustainable financing by translating impact into compelling, fundable narratives.',
    details: [
      'Fundraising strategy and pipeline design',
      'Donor and investor readiness assessments',
      'Grant concept notes and proposals',
      'Impact framing and results articulation'
    ],
    whyItMatters: 'Capital flows to clarity. We position your work so funders understand the problem, believe the solution, and trust the delivery.'
  },
  {
    title: 'AI & Data Science',
    icon: <Cpu size={48} />,
    description: 'We apply AI and data science to transform complex health data into actionable intelligence.',
    details: [
      'Data architecture and analytics design',
      'AI-enabled decision-support tools',
      'Research, modelling, and predictive insights',
      'Ethical AI and data governance frameworks'
    ],
    whyItMatters: 'Data without insight is noise. We help organisations move from reporting to foresight—responsibly, transparently, and at scale.'
  },
  {
    title: 'Strategy & Innovation',
    icon: <Lightbulb size={48} />,
    description: 'We support organisations to rethink, redesign, and future-proof their health initiatives.',
    details: [
      'Organisational and programme strategy',
      'Innovation roadmaps and pilots',
      'Systems thinking and design approaches',
      'Scale-up and sustainability planning'
    ],
    whyItMatters: 'Innovation isn’t about chasing trends—it’s about solving the right problems, the right way, at the right time.'
  },
  {
    title: 'Government Relations',
    icon: <Landmark size={48} />,
    description: 'We bridge the gap between policy, practice, and implementation.',
    details: [
      'Government engagement strategies',
      'Policy analysis and advisory',
      'Public-sector stakeholder alignment',
      'Regulatory and ecosystem navigation'
    ],
    whyItMatters: 'Health solutions only scale when they align with policy realities. We help initiatives earn trust, legitimacy, and long-term adoption.'
  }
];

const Expertise = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Use a spring for smoother horizontal movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 5 pillars: Translate from 0% to -400vw equivalent
  // Since the track is 500vw, -80% is exactly 400vw.
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        {/* Progress Bar */}
        <div className={styles.progressBarContainer}>
          <motion.div style={{ width }} className={styles.progressBar} />
        </div>

        <div className={styles.headerWrapper}>
          <div className="container">
            <span className={styles.tag}>Core Expertise</span>
            <h2 className={styles.title}>Core Content Pillars</h2>
          </div>
        </div>
        
        <motion.div style={{ x }} className={styles.horizontalTrack}>
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.cardGrid}>
                  <div className={styles.cardInfo}>
                    <div className={styles.iconWrapper}>{pillar.icon}</div>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.description}</p>
                    
                    <div className={styles.whyMatters}>
                      <h4>Why it matters</h4>
                      <p>{pillar.whyItMatters}</p>
                    </div>
                  </div>
                  
                  <div className={styles.cardDetails}>
                    <div className={styles.details}>
                      <h4>How we add value</h4>
                      <ul>
                        {pillar.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
