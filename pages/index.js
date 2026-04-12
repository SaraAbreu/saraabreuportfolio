import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Manifesto from '../components/Manifesto';
import ProcessWork from '../components/ProcessWork';
import ArtGallery from '../components/ArtGallery';
import MindWorld from '../components/MindWorld';
import CyberSpace from '../components/CyberSpace';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';

const SectionAutomation = dynamic(() => import('../components/SectionAutomation'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main id="content">
        <HeroSection />
        <MindWorld />
        <Manifesto id="manifesto" />
        <ProcessWork id="proceso" />
        <ArtGallery id="galeria" />
        <CyberSpace id="trabajo" />
        <SectionAutomation id="automation" />
        <Footer />
      </main>
    </div>
  );
}
