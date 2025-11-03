import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FocusAreas } from './components/FocusAreas';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FullPortfolio } from './components/FullPortfolio';
import { ProjectDetail } from './components/ProjectDetail';
import { PortfolioCompany } from './data/portfolio';

type Page = 'home' | 'portfolio' | 'project';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioCompany | null>(null);

  const handleViewAllPortfolio = () => {
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: PortfolioCompany) => {
    setSelectedProject(project);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentPage('portfolio');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header 
        onNavigateHome={handleBackToHome}
        showNavigation={currentPage === 'home'}
      />
      
      {currentPage === 'home' && (
        <>
          <main>
            <Hero />
            <FocusAreas />
            <Portfolio 
              onViewAll={handleViewAllPortfolio}
              onSelectProject={handleSelectProject}
            />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      {currentPage === 'portfolio' && (
        <FullPortfolio 
          onBack={handleBackToHome}
          onSelectProject={handleSelectProject}
        />
      )}

      {currentPage === 'project' && selectedProject && (
        <ProjectDetail 
          project={selectedProject}
          onBack={handleBackToPortfolio}
        />
      )}
    </div>
  );
}
