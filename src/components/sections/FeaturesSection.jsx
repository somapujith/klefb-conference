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
    <section className="py-32 bg-white border-y border-slate-200 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {FEATURES.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
