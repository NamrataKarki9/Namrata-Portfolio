import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

export default function Experience({ experience }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Where I've worked</h2>

          {experience.map((job, i) => (
            <motion.div key={job.id} className={styles.card}
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.accentLine} />
              <div className={styles.cardBody}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <div className={styles.company}>
                      <span className={styles.companyName}>{job.company}</span>
                      <span className={styles.sep}>·</span>
                      <span className={styles.loc}>{job.location}</span>
                    </div>
                  </div>
                  <div className={styles.rightMeta}>
                    <span className={styles.period}>{job.period}</span>
                    <span className={styles.typeBadge}>{job.type}</span>
                  </div>
                </div>

                <ul className={styles.points}>
                  {job.points.map((p, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.pointDot}/>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className={styles.techRow}>
                  {job.tech.map(t => <span key={t} className={styles.tech}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
