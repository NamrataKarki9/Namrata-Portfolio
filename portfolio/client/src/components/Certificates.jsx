import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import styles from './Certificates.module.css';

export default function Certificates({ certificates }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-heading">Credentials</h2>
          <div className={styles.grid}>
            {certificates.map((cert, i) => (
              <motion.div key={i} className={styles.card}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <FiAward size={15} className={styles.icon} />
                <span className={styles.name}>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
