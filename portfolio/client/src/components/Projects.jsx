import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import styles from './Projects.module.css';

const categories = ['All', 'AI / ML', 'Machine Learning', 'Full Stack / AI', 'Full Stack', 'Mobile / Desktop', 'Web App', 'Python App'];

export default function Projects({ projects }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const activeCategories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <div className={styles.head}>
            <h2 className="section-heading">Things I've built</h2>
            <div className={styles.filters}>
              {activeCategories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                  onClick={() => { setFilter(cat); setShowAll(false); }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {displayed.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  inView={inView}
                  onClick={() => navigate(`/project/${project.id}`)}
                />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length > 6 && !showAll && (
            <div className={styles.moreWrap}>
              <button className={styles.moreBtn} onClick={() => setShowAll(true)}>
                Show {filtered.length - 6} more
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView, onClick }) {
  return (
    <motion.article
      className={`${styles.card} ${project.highlight ? styles.featured : ''}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      {/* Color accent bar */}
      <div className={styles.accentBar} style={{ background: project.color || 'var(--accent)' }} />

      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <div className={styles.categoryRow}>
            <span className={styles.category}>{project.category}</span>
            {project.highlight && (
              <span className={styles.starBadge}>
                <FiStar size={10} />
                Featured
              </span>
            )}
          </div>
          <span className={styles.typePill}>{project.type}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.cardBottom}>
          <div className={styles.techRow}>
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className={styles.tech}>{t}</span>
            ))}
            {project.tech.length > 4 && (
              <span className={styles.techMore}>+{project.tech.length - 4}</span>
            )}
          </div>
          <span className={styles.viewLink}>
            View <FiArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
