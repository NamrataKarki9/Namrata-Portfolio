import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { usePortfolio } from './hooks/usePortfolio';

function App() {
  const { data, loading } = usePortfolio();

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
      <Navbar name={data.personal.name} email={data.personal.email} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/project/:id" element={<ProjectDetail projects={data.projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
