import { Cpu, Users, Scale } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const domains = [
  {
    icon: Cpu,
    domain: 'Technical capability',
    focus: 'Applied AI tooling & workflow transformation',
    example: 'Designing evaluable use-cases, the difference between patterns & models',
  },
  {
    icon: Users,
    domain: 'Communication & change',
    focus: 'Enable teams + middle-management to adopt AI sustainably',
    example: 'Narrative framing, adoption levers, how to build "champions"',
  },
  {
    icon: Scale,
    domain: 'Governance & regulation',
    focus: 'Align usage to organisational policies and EU AI Act',
    example: 'Risk classes, documentation requirements, accountability design',
  },
];

export const ApproachSection = () => {
  const title = useScrollReveal();
  const intro = useScrollReveal(0.1, 100);
  const card1 = useScrollReveal(0.1, 200);
  const card2 = useScrollReveal(0.1, 300);
  const card3 = useScrollReveal(0.1, 400);
  const footer = useScrollReveal(0.1, 500);

  const cards = [card1, card2, card3];

  return (
    <section id="approach" className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-12`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            Our Approach
          </h2>
          <div ref={intro.ref} className={`reveal ${intro.isVisible ? 'active' : ''}`}>
            <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              We deliver structured learning modules for technical teams and non-technical stakeholders, 
              anchored in three domains:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {domains.map((item, index) => {
            const Icon = item.icon;
            const cardRef = cards[index];
            return (
              <div key={index} ref={cardRef.ref} className={`reveal ${cardRef.isVisible ? 'active' : ''}`}>
                <div className="h-full bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-foreground mb-3">{item.domain}</h3>
                  <p className="text-base font-medium text-primary mb-4">{item.focus}</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
                    Example: {item.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={footer.ref} className={`reveal ${footer.isVisible ? 'active' : ''} text-center`}>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
            Each program is tailored to your industry, your use cases, and your current maturity level.
          </p>
        </div>
      </div>
    </section>
  );
};
