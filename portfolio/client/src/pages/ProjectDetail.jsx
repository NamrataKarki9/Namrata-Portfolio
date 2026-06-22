import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiImage } from 'react-icons/fi';
import Footer from '../components/Footer';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects?.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>← Back home</button>
      </div>
    );
  }

  const personal = { name: 'Namrata Karki', email: 'karkinamrata030@gmail.com', github: 'https://github.com', linkedin: 'https://linkedin.com', location: 'Kathmandu, Nepal' };

  return (
    <>
      <div className={styles.page}>
        {/* Header bar with color */}
        <div className={styles.colorBar} style={{ background: project.color || 'var(--accent)' }} />

        <div className={styles.container}>
          {/* Back nav */}
          <motion.button
            className={styles.back}
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FiArrowLeft size={15} />
            All Projects
          </motion.button>

          {/* Hero block */}
          <motion.div
            className={styles.heroBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.type}>{project.type}</span>
            </div>

            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.tagline}>{project.tagline}</p>

            <div className={styles.techRow}>
              {project.tech.map(t => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Main content grid */}
          <div className={styles.mainGrid}>
            {/* Left: description + screenshots */}
            <motion.div
              className={styles.left}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.prose}>
                {project.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Screenshots */}
              <div className={styles.screenshotsSection}>
                <h2 className={styles.subsectionTitle}>Screenshots</h2>
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className={styles.screenshotGrid}>
                    {project.screenshots.map((src, i) => (
                      <div key={i} className={styles.screenshotFrame}>
                        {/* 
                          Place your screenshots in:
                          client/public/screenshots/{project.id}/{filename}
                          e.g. client/public/screenshots/agriscan/agriscan-1.png
                        */}
                        <img
                          src={`/screenshots/${project.id}/${src}`}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className={styles.screenshot}
                          onError={e => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className={styles.screenshotPlaceholder} style={{ display: 'none' }}>
                          <FiImage size={24} />
                          <span>Add screenshot:</span>
                          <code>public/screenshots/{project.id}/{src}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noScreenshots}>
                    <FiImage size={20} />
                    <div>
                      <p>Add screenshots to:</p>
                      <code>client/public/screenshots/{project.id}/</code>
                      <p style={{ marginTop: '0.4rem', fontSize: '0.78rem' }}>
                        Then update the <code>screenshots</code> array in the portfolio data.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: sidebar info */}
            <motion.aside
              className={styles.sidebar}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Key highlights */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Highlights</h3>
                <ul className={styles.highlights}>
                  {project.highlights.map((h, i) => (
                    <li key={i} className={styles.highlight}>
                      <span className={styles.highlightDot} style={{ background: project.color || 'var(--accent)' }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Tech Stack</h3>
                <div className={styles.techStack}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techBig}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Project info */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Details</h3>
                <div className={styles.infoList}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Type</span>
                    <span className={styles.infoVal}>{project.type}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Category</span>
                    <span className={styles.infoVal}>{project.category}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Stack size</span>
                    <span className={styles.infoVal}>{project.tech.length} technologies</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Other projects */}
          <div className={styles.otherSection}>
            <h2 className={styles.otherTitle}>Other Projects</h2>
            <button className={styles.backToAll} onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>
              View all projects →
            </button>
          </div>
        </div>
      </div>
      <Footer personal={personal} />
    </>
  );
}
