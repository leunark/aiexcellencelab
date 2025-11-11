import { AlertTriangle, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const WhySection = () => {
  const title = useScrollReveal();
  const intro = useScrollReveal(0.1, 100);
  const subtitle = useScrollReveal(0.1, 200);
  const card1 = useScrollReveal(0.1, 300);
  const card2 = useScrollReveal(0.1, 400);
  const conclusion = useScrollReveal(0.1, 500);

  return (
    <section id="why" className="py-24 bg-gray-50 dark:bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-12`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            Why This Is Needed Now
          </h2>
        </div>

        <div ref={intro.ref} className={`reveal ${intro.isVisible ? 'active' : ''} max-w-4xl mx-auto mb-12`}>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            AI is no longer optional exploration. Boards and executive teams expect measurable 
            productivity gains — while regulators and risk committees expect control, transparency 
            and alignment with the EU AI Act.
          </p>
        </div>

        <div ref={subtitle.ref} className={`reveal ${subtitle.isVisible ? 'active' : ''} text-center mb-12`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-foreground">
            Most companies struggle with two gaps simultaneously:
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div ref={card1.ref} className={`reveal ${card1.isVisible ? 'active' : ''}`}>
            <div className="h-full bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-foreground mb-2">Knowledge gap</h4>
                  <p className="text-base text-gray-600 dark:text-muted-foreground">
                    What is possible and how to operationalise it
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={card2.ref} className={`reveal ${card2.isVisible ? 'active' : ''}`}>
            <div className="h-full bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-foreground mb-2">Governance gap</h4>
                  <p className="text-base text-gray-600 dark:text-muted-foreground">
                    What is acceptable and how to remain compliant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={conclusion.ref} className={`reveal ${conclusion.isVisible ? 'active' : ''} text-center`}>
          <p className="text-xl md:text-2xl font-semibold text-primary max-w-3xl mx-auto">
            We design programs that close both — in one coherent enablement architecture.
          </p>
        </div>
      </div>
    </section>
  );
};
