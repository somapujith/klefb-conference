import { Card } from '../ui/Card';
import { Globe, BookOpen, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connecting researchers from over 80 countries in a unified platform.',
  },
  {
    icon: BookOpen,
    title: 'Open Access',
    description: 'All selected research papers available for the global academic community.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Recognizing groundbreaking contributions with prestigious awards.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-slate-50/50 border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Why Attend
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4 font-sans" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Advancing Research Globally
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-light">
            AIQSEC 2027 brings together leading researchers and industry practitioners to share insights, present groundbreaking research, and build lasting networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

