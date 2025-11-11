import { User } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const team = [
  {
    name: 'Hichem Dhouib',
    title: 'Machine Learning & AI Engineer',
    bio: "Hichem is a Machine Learning and AI Engineer with experience developing and deploying applied AI systems in enterprise and advanced engineering settings. He holds a Master's in Computer Engineering from TU Berlin, focusing on machine learning, cloud computing, and scalable model pipelines. His work spans retrieval-augmented generation, time-series modelling, computer vision, and end-to-end ML system design. Hichem brings a rigorous, engineering-driven perspective to applying AI responsibly and effectively within organisations.",
  },
  {
    name: 'Paul Gosch',
    title: 'Innovation & AI Transformation',
    bio: "Paul is an AI transformation and innovation professional with experience leading enterprise-scale AI initiatives across Europe's transport sector. He has managed multi-million-euro AI portfolios, built executive reporting frameworks, and driven alignment across technology, finance, and governance units. His expertise includes commercial evaluation, investment rationale, and regulatory compliance under the EU AI Act — combining strategic opportunity with organisational feasibility and risk control.",
  },
  {
    name: 'Leunar Kalludra',
    title: 'Machine Learning Engineer, Robert Bosch GmbH',
    bio: "Leunar is a Machine Learning Engineer at Robert Bosch GmbH, specialised in deep learning for computer vision and embedded perception systems. His work covers sensor fusion, ground-truth estimation, and ML-based auto-labelling pipelines for radar and camera data in safety-critical domains. He holds a Computer Science background with graduate-level research at TU Berlin and co-founded Talent Ohne Grenzen, a national non-profit advancing access to education and careers. Leunar brings deep technical rigour and a systems-level view to how AI capabilities are built and scaled in organisations.",
  },
];

export const AboutSection = () => {
  const title = useScrollReveal();
  const intro = useScrollReveal(0.1, 100);
  const card1 = useScrollReveal(0.1, 200);
  const card2 = useScrollReveal(0.1, 300);
  const card3 = useScrollReveal(0.1, 400);

  const cards = [card1, card2, card3];

  return (
    <section id="about" className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={title.ref} className={`reveal ${title.isVisible ? 'active' : ''} text-center mb-12`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            About Us
          </h2>
          <div ref={intro.ref} className={`reveal ${intro.isVisible ? 'active' : ''}`}>
            <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              Developed by engineers and strategists with experience in enterprise-grade AI systems 
              across Europe's leading industrial and mobility organisations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const cardRef = cards[index];
            return (
              <div key={index} ref={cardRef.ref} className={`reveal ${cardRef.isVisible ? 'active' : ''}`}>
                <div className="h-full bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-foreground mb-2">{member.name}</h3>
                  <p className="text-base font-medium text-primary mb-4">{member.title}</p>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
