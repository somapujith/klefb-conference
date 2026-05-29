import { CheckCircle2, Shield, Crown, Medal, ArrowRight } from 'lucide-react';

export function Sponsorship() {
  const plans = [
    {
      name: "Silver Sponsor",
      priceINR: "80K",
      priceUSD: "$900",
      icon: <Medal className="w-8 h-8 text-slate-400" />,
      colorClass: "bg-slate-50 border-slate-200 text-slate-800",
      accentClass: "bg-slate-800 text-white",
      features: [
        "1 Complimentary delegate pass",
        "5 minutes pre-recorded video presentation slot in one of the breakaway sessions",
        "3mx2m (LxD) Complimentary exhibit booth",
        "Display of logo on all printed material, backdrop and website"
      ]
    },
    {
      name: "Platinum Sponsor",
      priceINR: "4.0L",
      priceUSD: "$4K",
      popular: true,
      icon: <Crown className="w-10 h-10 text-white" />,
      colorClass: "bg-slate-900 border-slate-800 text-white shadow-2xl",
      accentClass: "bg-blue-600 text-white",
      features: [
        "3 Complimentary delegate passes",
        "10 minutes presentation slot",
        "Acknowledgement during Inaugural & Valedictory Function",
        "2 no of 3mx3m Complimentary exhibit booths at Prime Location",
        "Prominent display of logo on all printed material, backdrop and website",
        "Permission to keep Company brochure in registration Kit"
      ]
    },
    {
      name: "Gold Sponsor",
      priceINR: "1.5L",
      priceUSD: "$1.5K",
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      colorClass: "bg-amber-50/30 border-amber-200/50 text-slate-900",
      accentClass: "bg-amber-500 text-slate-900",
      features: [
        "2 Complimentary delegate passes",
        "10 minutes presentation slot in one of the Breakaway sessions",
        "Acknowledgement during Valedictory Function",
        "3mx3m Complimentary exhibit booth",
        "Prominent display of logo on all printed material, backdrop and website"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4">Partner With Us</div>
          <h1 className="heading-large text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Sponsorship <span className="text-blue-600">Levels</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            On behalf of the organising committee of AIQSEC 2027, it is our great pleasure to invite you to be a valued sponsor. We offer multiple tiers of sponsorship and exhibitor opportunities to elegantly promote your organization to a highly influential audience in Hyderabad, India.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-4 pb-32">
        <div className="container mx-auto max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-10">
            {plans.map((plan, idx) => (
              <div key={idx} className={`relative flex flex-col h-full ${plan.popular ? 'md:scale-105 z-10' : ''}`}>


                <div className={`rounded-3xl border p-8 md:p-10 transition-transform duration-300 flex flex-col h-full ${plan.colorClass}`}>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100 shadow-sm'}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm font-bold opacity-60 mt-1.5">INR</span>
                    <span className="text-5xl font-bold tracking-tight">{plan.priceINR}</span>
                  </div>
                  <div className={`text-sm font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    ({plan.priceUSD}) + GST (18%)
                  </div>
                </div>

                <div className={`w-full h-px mb-8 ${plan.popular ? 'bg-slate-800' : 'bg-slate-100'}`}></div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? 'text-blue-500' : 'text-blue-600'}`} />
                      <span className={`text-sm leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>


              </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
