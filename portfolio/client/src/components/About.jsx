import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import styles from './About.module.css';

export default function About({ about, personal, education }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref}
          className={styles.grid}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.left}>
            <span className="section-label">About</span>
            <h2 className="section-heading">A bit about me</h2>
            <p className={styles.bio}>{about}</p>
            <div className={styles.contacts}>
              <div className={styles.cItem}><FiMapPin size={13}/><span>{personal.location}</span></div>
              <div className={styles.cItem}><FiMail size={13}/><a href={`mailto:${personal.email}`} onClick={e=>{e.preventDefault();window.location.href=`mailto:${personal.email}`;}}>{personal.email}</a></div>
              <div className={styles.cItem}><FiPhone size={13}/><span>{personal.phone}</span></div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <span className="section-label" style={{display:'block',marginBottom:'1rem'}}>Education</span>
              {education.map((edu, i) => (
                <div key={i} className={styles.eduRow}>
                  <span className={edu.status === 'ongoing' ? styles.dotOn : styles.dotOff}/>
                  <div className={styles.eduInfo}>
                    <span className={styles.degree}>{edu.degree}</span>
                    <span className={styles.institution}>{edu.institution}</span>
                    <span className={styles.period}>{edu.period}</span>
                    {edu.status === 'ongoing' && <span className={styles.inProgress}>In Progress</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              {[
                ['Focus','Data Science · AI · Research'],
                ['Also','Full Stack Development'],
                ['Stack','Python · React · .NET · PostgreSQL'],
              ].map(([label, val]) => (
                <div key={label} className={styles.infoRow}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
