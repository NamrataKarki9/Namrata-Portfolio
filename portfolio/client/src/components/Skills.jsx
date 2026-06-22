import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const groups = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & Libraries' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools & Concepts' },
];

export default function Skills({ skills }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-heading">Technical toolkit</h2>

          <div className={styles.grid}>
            {groups.map((g, gi) => (
              <div key={g.key} className={styles.group}>
                <span className={styles.groupLabel}>{g.label}</span>
                <div className={styles.tags}>
                  {(skills[g.key] || []).map((s, si) => (
                    <motion.span key={s} className={styles.tag}
                      initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: gi * 0.04 + si * 0.03, duration: 0.3 }}
                    >{s}</motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.softRow}>
            <span className={styles.groupLabel}>Soft Skills</span>
            <div className={styles.tags}>
              {(skills.soft || []).map(s => (
                <span key={s} className={styles.tagSoft}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
