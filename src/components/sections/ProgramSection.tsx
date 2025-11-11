import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ProgramSection = () => {
  const title = useScrollReveal();
  const card = useScrollReveal(0.1, 100);

  return (
    <section id="program" className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-16`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            Program & Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            Structured, high-impact training designed for enterprise teams
          </p>
        </div>

        <div ref={card.ref} className={`reveal ${card.isVisible ? 'active' : ''} max-w-4xl mx-auto`}>
          <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-foreground mb-4">
                3-Day AI Enablement Intensive
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-primary">€1,800</span>
                <span className="text-xl text-gray-600 dark:text-muted-foreground">per participant</span>
              </div>
              <p className="text-base text-gray-600 dark:text-muted-foreground">
                Standard cohort format – up to 25 participants
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Structured 3-day training program',
                'Virtual or on-site delivery format',
                'Typically 4–6 weeks lead time from contract signature',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base text-gray-700 dark:text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = 'mailto:info@aicapabilitylab.com'}
              className="w-full px-6 py-3 text-base font-semibold text-primary bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all"
            >
              Request detailed agenda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
