import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { fallbackPortfolio, usePortfolio } from './hooks/usePortfolio';

function App() {
  const { data, loading } = usePortfolio();
  const portfolio = data?.personal?.name ? data : fallbackPortfolio;
  const personal = portfolio.personal;
  const projects = Array.isArray(portfolio.projects) ? portfolio.projects : fallbackPortfolio.projects;

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', background: 'var(--bg)',
        fontFamily: 'DM Mono, monospace', color: 'var(--text-3)',
        fontSize: '0.78rem', letterSpacing: '0.12em'
      }}>
        loading...
      </div>
    );
  }

  return (
    <Router>
      <Navbar name={personal?.name || fallbackPortfolio.personal.name} email={personal?.email || fallbackPortfolio.personal.email} />
      <Routes>
        <Route path="/" element={<Home data={portfolio} />} />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
