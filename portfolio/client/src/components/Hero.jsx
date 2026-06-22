import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero({ personal }) {
  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="home">
      <div className={styles.dotPattern} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className={styles.dot} />
            <span>Open to opportunities</span>
          </motion.div>

          <motion.h1 className={styles.name}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {personal.name}
          </motion.h1>

          <motion.div className={styles.typeRow}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Turning data into insight.',2400,
                'Researching smarter systems.',2400,
                'Engineering what matters.',2400,
                'Where AI meets real problems.',2400,
                'Curious. Analytical. Builder.',2400,
              ]}
              wrapper="span" speed={58} repeat={Infinity}
              className={styles.typeText}
            />
          </motion.div>

          <motion.p className={styles.tagline}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            BSc Computing student focused on data science, AI, and building systems that solve real problems.
          </motion.p>

          <motion.div className={styles.actions}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className={styles.btnPrimary} onClick={() => scroll('#projects')}>View Projects</button>
            <button className={styles.btnSecondary} onClick={() => scroll('#contact')}>Get in Touch</button>
          </motion.div>

          <motion.div className={styles.socials}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><FiGithub size={17}/></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><FiLinkedin size={17}/></a>
            <a href={`mailto:${personal.email}`} className={styles.socialLink} onClick={e=>{e.preventDefault();window.location.href=`mailto:${personal.email}`;}}><FiMail size={17}/></a>
            <span className={styles.sep} />
            <span className={styles.loc}>{personal.location}</span>
          </motion.div>
        </div>

        <motion.div className={styles.statsRow}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {[['8+','Projects'],['8','Certifications'],['1','Internship'],['2026','Grad. Year']].map(([n,l],i)=>(
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button className={styles.scrollBtn} onClick={() => scroll('#about')}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        aria-label="Scroll"
      >
        <FiArrowDown size={15}/>
      </motion.button>
    </section>
  );
}
