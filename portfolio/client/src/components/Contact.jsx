import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import api from '../utils/api';
import styles from './Contact.module.css';

export default function Contact({ personal }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setError('Please fill in all required fields.'); return; }
    setStatus('loading'); setError('');
    try {
      await api.post('/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.error || 'Something went wrong. Email me directly!');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div ref={ref} className={styles.inner}
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.left}>
            <span className="section-label">Contact</span>
            <h2 className="section-heading">Let's talk</h2>
            <p className={styles.sub}>Open to internships, collaborations, and entry-level roles. Whether you have a project in mind or just want to connect — my inbox is open.</p>

            <div className={styles.links}>
              <a href={`mailto:${personal.email}`} className={styles.link} onClick={e=>{e.preventDefault();window.location.href=`mailto:${personal.email}`;}}><FiMail size={14}/>{personal.email}</a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}><FiGithub size={14}/>GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}><FiLinkedin size={14}/>LinkedIn</a>
            </div>
          </div>

          <div className={styles.right}>
            {status === 'success' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}><label className={styles.label}>Name *</label><input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Your name"/></div>
                  <div className={styles.field}><label className={styles.label}>Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="your@email.com"/></div>
                </div>
                <div className={styles.field}><label className={styles.label}>Subject</label><input name="subject" value={form.subject} onChange={handleChange} className={styles.input} placeholder="What's this about?"/></div>
                <div className={styles.field}><label className={styles.label}>Message *</label><textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder="Tell me about your project..." rows={5}/></div>
                {error && <p className={styles.err}>{error}</p>}
                <button type="submit" className={styles.btn} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : <><span>Send Message</span><FiSend size={13}/></>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
