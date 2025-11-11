import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { LogoMark } from '@/components/LogoMark';

export const HeroSection = () => {
  const hero1 = useScrollReveal();
  const hero2 = useScrollReveal(0.1, 100);
  const hero3 = useScrollReveal(0.1, 200);
  const hero4 = useScrollReveal(0.1, 300);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div ref={hero1.ref} className={`reveal ${hero1.isVisible ? 'active' : ''}`}>
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-white/80 shadow-lg ring-1 ring-white/20 backdrop-blur">
                <LogoMark className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">
                  AI Excellence Lab
                </span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Equip your organisation with real AI capability
            </h1>
          </div>

          <div ref={hero2.ref} className={`reveal ${hero2.isVisible ? 'active' : ''}`}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialised training programs for enterprise teams, combining applied technical skills, 
              change enablement, and up-to-date EU AI Act requirements.
            </p>
          </div>

          <div ref={hero3.ref} className={`reveal ${hero3.isVisible ? 'active' : ''}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm font-medium">Turn AI from "experimentation" into institutional competence</span>
            </div>
          </div>

          <div ref={hero4.ref} className={`reveal ${hero4.isVisible ? 'active' : ''}`}>
            <button
              onClick={() => window.location.href = 'mailto:info@aicapabilitylab.com'}
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
