import { CreditCard, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '../hooks/useToast';

const REGISTRATION_STORAGE_KEY = 'aiqsec_registration_selections';

export function Registration() {
  const { addToast } = useToast();
  const [region, setRegion] = useState(() => {
    if (typeof window === 'undefined') return 'india';
    const saved = localStorage.getItem(REGISTRATION_STORAGE_KEY);
    return saved ? JSON.parse(saved).region : 'india';
  });

  const [selectedItems, setSelectedItems] = useState(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem(REGISTRATION_STORAGE_KEY);
    return saved ? JSON.parse(saved).items : [];
  });

  // Save selections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify({ items: selectedItems, region }));
  }, [selectedItems, region]);

  const handleItemSelect = (itemName, itemPrice, isAddon = false) => {
    setSelectedItems(prev => {
      const exists = prev.find(item => item.name === itemName);

      if (exists) {
        // Remove if already selected
        return prev.filter(item => item.name !== itemName);
      } else {
        if (isAddon) {
          // Add-ons can be multiple
          return [...prev, { name: itemName, price: itemPrice, isAddon: true }];
        } else {
          // Main categories are mutually exclusive - replace previous main category
          const addOns = prev.filter(item => item.isAddon);
          return [...addOns, { name: itemName, price: itemPrice, isAddon: false }];
        }
      }
    });
  };

  const calculateTotal = () => {
    if (selectedItems.length === 0) return '₹0';

    const total = selectedItems.reduce((sum, item) => {
      const priceStr = item.price.replace(/[₹$,]/g, '').trim();
      return sum + parseFloat(priceStr);
    }, 0);

    const isCurrency = selectedItems[0].price.includes('$');
    if (isCurrency) {
      return `$${total.toFixed(2)}`;
    } else {
      return `₹${total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    }
  };

  const getMainCategory = () => selectedItems.find(item => !item.isAddon);
  const getAddOns = () => selectedItems.filter(item => item.isAddon);

  const handleProceedToPayment = () => {
    const mainCategory = getMainCategory();
    if (!mainCategory) {
      addToast('Please select a registration category (Student, Professional, or Attendee)', 'error');
      return;
    }

    // Encode selected items
    const encodedItems = encodeURIComponent(JSON.stringify(selectedItems));
    const totalAmount = calculateTotal();
    window.location.href = `/payment?items=${encodedItems}&total=${encodeURIComponent(totalAmount)}&region=${region}`;
  };

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
          Select your registration category and complete the payment to secure your participation at AIQSEC 2027.
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
                {category.items.map((item, itemIdx) => {
                  const isSelected = selectedItems.some(s => s.name === item.name);
                  return (
                    <div
                      key={itemIdx}
                      onClick={() => handleItemSelect(item.name, item.price, false)}
                      className={`rounded-2xl p-6 transition-all duration-200 cursor-pointer group ${
                        isSelected
                          ? 'bg-blue-50 border-2 border-blue-600 shadow-lg'
                          : 'bg-white border border-slate-200 hover:shadow-lg hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className={`text-base font-semibold transition-colors ${
                            isSelected ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                          }`}>
                            {item.name}
                          </h3>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className={`text-2xl font-bold tabular-nums ${
                            isSelected ? 'text-blue-600' : 'text-blue-600'
                          }`}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                          <Check size={18} />
                          Selected
                        </div>
                      )}
                    </div>
                  );
                })}
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
              {currentData.addOns.map((addon, addonIdx) => {
                const isSelected = selectedItems.some(s => s.name === addon.name);
                return (
                  <div
                    key={addonIdx}
                    onClick={() => handleItemSelect(addon.name, addon.price, true)}
                    className={`rounded-2xl p-6 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-2 border-blue-600 shadow-lg'
                        : 'bg-slate-50 border border-slate-200 hover:shadow-md hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`text-base font-semibold ${
                          isSelected ? 'text-blue-600' : 'text-slate-700'
                        }`}>
                          {addon.name}
                        </h3>
                      </div>
                      <p className={`text-xl font-bold tabular-nums flex-shrink-0 ${
                        isSelected ? 'text-blue-600' : 'text-slate-600'
                      }`}>
                        {addon.price}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        <Check size={18} />
                        Selected
                      </div>
                    )}
                  </div>
                );
              })}
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
          {getMainCategory() && (
            <div className="mb-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wide">Your Selection</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                  <span className="text-base font-semibold text-slate-900">{getMainCategory().name}</span>
                  <span className="text-xl font-bold text-blue-600">{getMainCategory().price}</span>
                </div>
                {getAddOns().length > 0 && (
                  <>
                    {getAddOns().map((addon, idx) => (
                      <div key={idx} className="flex items-center justify-between text-slate-700">
                        <span className="text-sm">+ {addon.name}</span>
                        <span className="text-sm font-semibold text-slate-900">{addon.price}</span>
                      </div>
                    ))}
                  </>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-blue-200">
                  <span className="text-base font-bold text-slate-900">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-600">{calculateTotal()}</span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleProceedToPayment}
            className="inline-flex items-center gap-3 bg-white/30 text-black font-bold text-base px-12 py-4 rounded-full cursor-pointer transition-all duration-200 border border-black backdrop-blur-sm"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)'; }}
          >
            <CreditCard size={18} />
            Proceed to Payment
          </button>
          <p className="text-xs text-slate-500 mt-8">Secure payment powered by your preferred gateway</p>
        </div>
      </div>
    </div>
  );
}
