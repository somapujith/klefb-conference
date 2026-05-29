import { CreditCard, Check } from 'lucide-react';
import { useState } from 'react';

export function Registration() {
  const [region, setRegion] = useState('india');

  const pricingData = {
    india: {
      categories: [
        {
          label: 'Student',
          items: [
            { name: 'Any Society + IEEE', price: '₹7,500' },
            { name: 'IEEE Student Member', price: '₹8,000' },
            { name: 'Non-IEEE Student', price: '₹9,500' },
          ]
        },
        {
          label: 'Professional',
          items: [
            { name: 'IEEE Professional + Society', price: '₹8,500' },
            { name: 'IEEE Professional Only', price: '₹9,000' },
            { name: 'Professional Non-IEEE', price: '₹10,500' },
          ]
        },
        {
          label: 'Attendee',
          items: [
            { name: 'Attendee Only', price: '₹3,500' },
          ]
        }
      ],
      addOns: [
        { name: 'Extra per page', price: '₹500' },
        { name: 'Additional Certificate', price: '₹500' },
      ]
    },
    international: {
      categories: [
        {
          label: 'Student',
          items: [
            { name: 'IEEE Student + Society', price: '$120' },
            { name: 'IEEE Student Member', price: '$170' },
            { name: 'Non-IEEE Student', price: '$220' },
          ]
        },
        {
          label: 'Professional',
          items: [
            { name: 'IEEE Professional + Society', price: '$220' },
            { name: 'IEEE Professional Only', price: '$250' },
            { name: 'Professional Non-IEEE', price: '$350' },
          ]
        },
        {
          label: 'Attendee',
          items: [
            { name: 'Attendee Only', price: '$120' },
          ]
        }
      ],
      addOns: [
        { name: 'Extra per page', price: '$50' },
        { name: 'Additional Certificate', price: '$50' },
      ]
    }
  };

  const currentData = region === 'india' ? pricingData.india : pricingData.international;

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* ── Header ── */}
      <div className="pt-48 pb-20 text-center px-6 mt-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
          Conference <span className="text-blue-600">Registration</span>
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Select your registration category and complete the payment to secure your participation at AIQSEC 2026.
        </p>
      </div>

      {/* ── Region Toggle ── */}
      <div className="max-w-4xl mx-auto px-6 mb-12 mt-12">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setRegion('india')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap backdrop-blur-sm ${
              region === 'india'
                ? 'bg-white/30 text-black border border-black shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            India (INR)
          </button>
          <button
            onClick={() => setRegion('international')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap backdrop-blur-sm ${
              region === 'international'
                ? 'bg-white/30 text-black border border-black shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            International (USD)
          </button>
        </div>
      </div>

      {/* ── Pricing Categories ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main Categories */}
          {currentData.categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">{category.label}</h2>
              </div>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-2xl font-bold text-blue-600 tabular-nums">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Charges Section */}
          <div className="mt-12 pt-8 border-t-2 border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-1 bg-slate-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-slate-900">Additional Charges</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.addOns.map((addon, addonIdx) => (
                <div
                  key={addonIdx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-slate-700">
                      {addon.name}
                    </h3>
                    <p className="text-xl font-bold text-slate-600 tabular-nums flex-shrink-0">
                      {addon.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex gap-4">
            <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Prices include access to all technical sessions, workshops, and conference materials. Payment plans available for eligible participants.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/payment"
            className="inline-flex items-center gap-3 bg-white/30 text-black font-bold text-base px-12 py-4 rounded-full cursor-pointer transition-all duration-200 border border-black backdrop-blur-sm"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)'; }}
          >
            <CreditCard size={18} />
            Proceed to Payment
          </a>
          <p className="text-xs text-slate-500 mt-8">Secure payment powered by your preferred gateway</p>
        </div>
      </div>
    </div>
  );
}
