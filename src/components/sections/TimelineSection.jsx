import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const TIMELINE_EVENTS = [
  {
    title: 'Paper Submission Opens',
    description: 'Share your groundbreaking research in AI, advanced computing systems, and sustainable technology with our global community.',
  },
  {
    title: 'Paper Submission Deadline',
    description: 'Submit your complete research papers through our secure online portal with all required documentation.',
  },
  {
    title: 'Notification of Acceptance',
    description: 'Receive detailed peer review feedback and acceptance decisions from our expert review committee.',
  },
  {
    title: 'Camera Ready & Registration',
    description: 'Prepare final camera-ready versions of your papers and complete your conference registration.',
  },
  {
    title: 'Conference Dates',
    description: 'Join us at KL University for three days of keynotes, presentations, networking, and collaborative workshops.',
  },
];

export function TimelineSection() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-sans">Event Timeline</h2>
              <p className="text-xs text-slate-500 font-sans mt-0.5">Key milestones for AIQSEC 2027</p>
            </div>
          </div>
          <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5">
            <span className="text-xs font-semibold text-slate-600 font-sans">AIQSEC 2027</span>
          </div>
        </div>

        <div className="space-y-4">
          {TIMELINE_EVENTS.map((event, index) => (
            <div
              key={index}
              className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-6 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900 font-sans mb-1.5">
                {event.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm font-sans font-light">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6 font-sans text-xs">
            More details coming soon. Stay tuned for updates.
          </p>
          <Button href="/submission" variant="primary">
            Submit Your Paper
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
