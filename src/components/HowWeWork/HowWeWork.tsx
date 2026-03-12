'use client';

import React from 'react';
import styles from './HowWeWork.module.css';
import { motion } from 'framer-motion';
import { Search, PenTool, Truck, Maximize } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    icon: <Search size={24} />,
    description: 'We start by understanding the landscape, identifying gaps, and aligning with stakeholder realities.'
  },
  {
    title: 'Design',
    icon: <PenTool size={24} />,
    description: 'Evidence-driven solutions are crafted with scalability and impact at the core.'
  },
  {
    title: 'Deliver',
    icon: <Truck size={24} />,
    description: 'Execution-focused implementation with a commitment to accountability and momentum.'
  },
  {
    title: 'Scale',
    icon: <Maximize size={24} />,
    description: 'Future-proofing health initiatives and expanding their reach for long-term sustainability.'
  }
];

const HowWeWork = () => {
  return (
    <section className={`section-padding ${styles.howWeWork}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>Emphasis on collaboration and co-creation—a clear articulation of our methodology.</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>
                {step.icon}
                <span className={styles.stepNumber}>0{index + 1}</span>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
