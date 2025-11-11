import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from '@/components/LogoMark';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'program', label: 'Program' },
  { id: 'why', label: 'Why Now' },
  { id: 'approach', label: 'Approach' },
  { id: 'how', label: 'How We Work' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'who', label: 'Who We Serve' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const programSection = document.getElementById('program');
      if (programSection) {
        const rect = programSection.getBoundingClientRect();
        setScrolled(rect.top <= 0);
      }

      const sections = navLinks.map((link) => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? 'bg-white/50 dark:bg-background/50 shadow-sm border-b border-gray-200 dark:border-border'
            : 'bg-black/50 dark:bg-background/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg font-bold transition-all duration-300 ${
                scrolled
                  ? 'text-gray-900 dark:text-foreground hover:text-primary'
                  : 'text-white hover:text-primary'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-2xl bg-white/80 p-1.5 shadow-sm ring-1 ring-black/5 transition-all dark:bg-white/10 dark:ring-white/20">
                  <LogoMark className="h-7 w-7" />
                </span>
                <span className="text-base font-semibold tracking-tight">
                  AI Excellence Lab
                </span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'text-primary bg-primary/5'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => window.location.href = 'mailto:info@aiexcellencelab.com'}
                className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-md transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-background border-b border-gray-200 dark:border-border shadow-lg">
            <div className="px-4 py-6 space-y-1">
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => window.location.href = 'mailto:info@aiexcellencelab.com'}
                className="block w-full mt-4 px-4 py-3 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
