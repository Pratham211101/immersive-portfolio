import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Scene3D from '@/components/Scene3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Scene3D />
      <Navigation />
      <main className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
