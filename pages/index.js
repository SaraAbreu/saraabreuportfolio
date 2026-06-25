import NewNavigation from '../components/NewNavigation';
import NewHero from '../components/NewHero';
import Services from '../components/Services';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import NewFooter from '../components/NewFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <NewNavigation />

      <main>
        <NewHero />
        <Services />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <CTASection />
        <NewFooter />
      </main>
    </div>
  );
}
