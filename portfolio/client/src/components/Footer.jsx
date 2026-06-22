import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer({ personal }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.name}>{personal.name}</span>
            <span className={styles.sub}>Data Science · AI · Full Stack · Kathmandu, Nepal</span>
          </div>
          <div className={styles.links}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}><FiGithub size={16}/></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}><FiLinkedin size={16}/></a>
            <a href={`mailto:${personal.email}`} className={styles.link} onClick={e=>{e.preventDefault();window.location.href=`mailto:${personal.email}`;}}><FiMail size={16}/></a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>Designed & built by {personal.name} · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
