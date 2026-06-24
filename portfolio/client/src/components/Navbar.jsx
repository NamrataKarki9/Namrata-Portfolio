import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ name, email }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    if (!isHome) { window.location.href = '/' + href; return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>NK</span>
            <span className={styles.logoName}>{name}</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                type="button"
                className={styles.link}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
            <button
              type="button"
              className={styles.themeBtn}
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
            </button>
            <a
              href={`mailto:${email}`}
              className={styles.ctaBtn}
              onClick={e => { e.preventDefault(); window.location.href = `mailto:${email}`; }}
            >
              Hire Me
            </a>
          </nav>

          <div className={styles.mobileRight}>
            <button type="button" className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
              {theme === 'light' ? <FiMoon size={15} /> : <FiSun size={15} />}
            </button>
            <button type="button" className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span className={`${styles.bar} ${menuOpen ? styles.b1 : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.b2 : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            {navLinks.map(link => (
              <button key={link.label} type="button" className={styles.mobileLink} onClick={() => handleNav(link.href)}>
                {link.label}
              </button>
            ))}
            <a href={`mailto:${email}`} className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
