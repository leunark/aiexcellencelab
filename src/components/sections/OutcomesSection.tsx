import { CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const outcomes = [
  'Employees can perform selected AI workflows independently',
  'Consistent mental models across the organisation about how to use AI',
  'Reduced confusion and reduced risk of harmful experimentation',
  'A coherent basic understanding of what is allowed (and not allowed) under EU AI expectations',
];

export const OutcomesSection = () => {
  const title = useScrollReveal();
  const card1 = useScrollReveal(0.1, 100);
  const card2 = useScrollReveal(0.1, 200);
  const card3 = useScrollReveal(0.1, 300);
  const card4 = useScrollReveal(0.1, 400);

  const cards = [card1, card2, card3, card4];

  return (
    <section id="outcomes" className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-16`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            Outcomes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {outcomes.map((outcome, index) => {
            const cardRef = cards[index];
            return (
              <div key={index} ref={cardRef.ref} className={`reveal ${cardRef.isVisible ? 'active' : ''}`}>
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-base text-gray-700 dark:text-foreground pt-1">{outcome}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
