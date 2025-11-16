import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground">
      <Navigation />
      <main className="flex-1 pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg shadow-black/30 p-8 space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Impressum
            </p>
            <h1 className="text-3xl font-bold text-white">Angaben gemäß § 5 TMG</h1>
          </div>

          <div className="space-y-4 text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">AI Excellence Labs</p>
              <p>Leunar Kalludra</p>
              <p>Kanstr. 64</p>
              <p>10627 Berlin</p>
            </div>

            <div>
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:info@aiexcellencelabs.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  info@aiexcellencelabs.com
                </a>
              </p>
              <p>Steuernummer: auf Anfrage</p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="font-semibold text-white">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </p>
              <p>Leunar Kalludra</p>
              <p>Adresse wie oben</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
