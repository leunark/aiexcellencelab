import { LogoMark } from '@/components/LogoMark';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-background border-t border-gray-200 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center justify-center rounded-3xl border border-gray-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
              <LogoMark className="h-9 w-9" />
            </div>
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              AI Excellence Labs
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-muted-foreground">
            We do not collect or store any training data from client systems.
          </p>
          
          <div className="text-sm text-gray-600 dark:text-muted-foreground space-y-1">
            <p>AI Excellence Labs · Berlin, Germany</p>
            <p>
              contact:{' '}
              <a
                href="mailto:info@aiexcellencelabs.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                info@aiexcellencelabs.com
              </a>
            </p>
          </div>

          <div className="flex justify-center gap-4 text-sm font-medium text-gray-600 dark:text-muted-foreground">
            <Link
              to="/impressum"
              className="hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <span className="text-gray-300 dark:text-white/30">|</span>
            <Link
              to="/datenschutz"
              className="hover:text-primary transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </div>

          <p className="text-xs text-gray-500 dark:text-muted-foreground/60 pt-4">
            © {currentYear} AI Excellence Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
