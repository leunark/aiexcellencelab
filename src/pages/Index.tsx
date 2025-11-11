import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramSection } from '@/components/sections/ProgramSection';
import { WhySection } from '@/components/sections/WhySection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { HowSection } from '@/components/sections/HowSection';
import { OutcomesSection } from '@/components/sections/OutcomesSection';
import { WhoSection } from '@/components/sections/WhoSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-body">
      <Navigation />
      <main>
        <HeroSection />
        <ProgramSection />
        <WhySection />
        <ApproachSection />
        <HowSection />
        <OutcomesSection />
        <WhoSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
