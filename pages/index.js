import NewNavigation from '../components/NewNavigation';
import NewHero from '../components/NewHero';
import Services from '../components/Services';
import ProjectsSection from '../components/ProjectsSection';
import MarketingSection from '../components/MarketingSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import NewFooter from '../components/NewFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NewNavigation />

      <main>
        <NewHero />
        <Services />
        <ProjectsSection />
        <MarketingSection />
        <AboutSection />
        <CTASection />
        <NewFooter />
      </main>
    </div>
  );
}
