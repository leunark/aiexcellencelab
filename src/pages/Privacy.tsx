import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 p-8 space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Datenschutzerklärung
            </p>
            <h1 className="text-3xl font-bold text-white">Datenschutz auf einen Blick</h1>
          </div>

          <div className="space-y-4 text-gray-200">
            <p>
              Diese Website verwendet keine Cookies, keine Analysetools und erhebt keine personenbezogenen Daten.
              Sie können unsere Inhalte nutzen, ohne persönliche Informationen anzugeben.
            </p>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Nach Abschluss Ihrer Anfrage
              löschen wir Ihre Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
            <p>
              Für weitere Fragen zum Datenschutz wenden Sie sich bitte an{' '}
              <a
                href="mailto:info@aiexcellencelabs.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                info@aiexcellencelabs.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
