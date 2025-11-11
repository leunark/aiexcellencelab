import { AlertCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const days = [
  {
    day: 'Day 1–2',
    title: 'Technical Modules',
    description: 'Selected technical modules. Topics covered will include [TBD].',
  },
  {
    day: 'Day 3',
    title: 'Adoption & Compliance',
    description:
      'Organisational adoption basics + EU AI Act essentials (communication, risk zones, permitted vs non-permitted usage categories)',
  },
];

export const HowSection = () => {
  const title = useScrollReveal();
  const intro = useScrollReveal(0.1, 100);
  const card1 = useScrollReveal(0.1, 200);
  const card2 = useScrollReveal(0.1, 300);
  const note = useScrollReveal(0.1, 400);

  const cards = [card1, card2];

  return (
    <section id="how" className="py-24 bg-gray-50 dark:bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-12`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            How We Work With You
          </h2>
          <div ref={intro.ref} className={`reveal ${intro.isVisible ? 'active' : ''}`}>
            <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              We run a structured 3-day training program — curriculum and content are predefined by us 
              based on current best practice.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {days.map((item, index) => {
            const cardRef = cards[index];
            return (
              <div key={index} ref={cardRef.ref} className={`reveal ${cardRef.isVisible ? 'active' : ''}`}>
                <div className="h-full bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8">
                  <div className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                    {item.day}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">{item.title}</h3>
                  <p className="text-base text-gray-600 dark:text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={note.ref} className={`reveal ${note.isVisible ? 'active' : ''} max-w-4xl mx-auto`}>
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-primary rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-base font-semibold text-gray-900 dark:text-foreground">Important to note:</p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  There is no co-creation, no discovery workshops, no ongoing support, no internal 
                  implementation consulting.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  This is a professional, standardised educational product designed for repeatability 
                  and consistent quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
