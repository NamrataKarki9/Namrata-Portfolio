import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ data }) {
  return (
    <main>
      <Hero personal={data.personal} />
      <About about={data.about} personal={data.personal} education={data.education} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Certificates certificates={data.certificates} />
      <Contact personal={data.personal} />
      <Footer personal={data.personal} />
    </main>
  );
}
