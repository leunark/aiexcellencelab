import { Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ContactSection = () => {
  const title = useScrollReveal();
  const card = useScrollReveal(0.1, 100);

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-16`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground">
            Contact
          </h2>
        </div>

        <div ref={card.ref} className={`reveal ${card.isVisible ? 'active' : ''} max-w-2xl mx-auto`}>
          <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl p-12 text-center shadow-lg">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Ready to equip your organisation with real AI capability?
            </p>

            <button
              onClick={() => window.location.href = 'mailto:info@aiexcellencelabs.com'}
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 mb-12"
            >
              Book a discovery call
            </button>

            <div className="space-y-4 pt-8 border-t border-gray-200 dark:border-border">
              <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base">Berlin, Germany</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600 dark:text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@aiexcellencelabs.com"
                  className="text-base hover:text-primary transition-colors"
                >
                  info@aiexcellencelabs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
