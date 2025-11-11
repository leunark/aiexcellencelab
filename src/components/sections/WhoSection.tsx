import { Building2, GraduationCap, Cog } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const audiences = [
  {
    icon: Building2,
    text: 'Corporate innovation & transformation leaders',
  },
  {
    icon: GraduationCap,
    text: 'HR / People & Culture owners of L&D portfolios',
  },
  {
    icon: Cog,
    text: 'Technical teams that need structured, compliant direction',
  },
];

export const WhoSection = () => {
  const title = useScrollReveal();
  const card1 = useScrollReveal(0.1, 100);
  const card2 = useScrollReveal(0.1, 200);
  const card3 = useScrollReveal(0.1, 300);
  const cta = useScrollReveal(0.1, 400);

  const cards = [card1, card2, card3];

  return (
    <section id="who" className="py-24 bg-gray-50 dark:bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-16`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            Who We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            const cardRef = cards[index];
            return (
              <div key={index} ref={cardRef.ref} className={`reveal ${cardRef.isVisible ? 'active' : ''}`}>
                <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-base text-gray-700 dark:text-foreground">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={cta.ref} className={`reveal ${cta.isVisible ? 'active' : ''} max-w-4xl mx-auto`}>
          <div className="bg-gradient-to-br from-primary to-deep-blue rounded-2xl p-12 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your team's AI capabilities?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book a discovery call — let's define a program for your organisation.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:info@aicapabilitylab.com'}
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
