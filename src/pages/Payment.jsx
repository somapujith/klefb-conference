import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export function Payment() {
  const [formData, setFormData] = useState({
    category: 'IEEE Student Member',
    amount: '₹8,000',
    currency: 'INR',
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    paymentMethod: 'card',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Payment processing would happen here
      alert('Payment processing started. Redirecting to payment gateway...');
    } else {
      setErrors(newErrors);
    }
  };

  const InputField = ({ label, name, type = 'text', required = true, placeholder = '' }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errors[name]
            ? 'border-red-500 bg-red-50'
            : 'border-slate-200 bg-white hover:border-slate-300'
        }`}
      />
      {errors[name] && <p className="text-xs text-red-600">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen pb-20">
      {/* ── Header ── */}
      <div className="pt-32 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
          Complete Payment
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Secure payment for AIQSEC 2026 registration
        </p>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Order Summary (Left) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h2>

                {/* Category */}
                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Registration Category
                    </p>
                    <p className="text-base font-semibold text-slate-900">
                      {formData.category}
                    </p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 py-6 border-b border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Registration Fee</span>
                    <span className="font-semibold text-slate-900">{formData.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Taxes & Fees</span>
                    <span className="font-semibold text-slate-900">Included</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-6 mb-6">
                  <span className="text-base font-bold text-slate-900">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-600">{formData.amount}</span>
                </div>

                {/* Security Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-3">
                  <Lock className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-green-900">Secure Payment</p>
                    <p className="text-xs text-green-700">SSL encrypted & PCI compliant</p>
                  </div>
                </div>

                {/* Back Button */}
                <button
                  onClick={() => window.history.back()}
                  className="w-full mt-6 flex items-center justify-center gap-2 py-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span className="text-sm font-medium">Back to Registration</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Payment Form (Right) ── */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Personal Information */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <InputField label="Full Name" name="fullName" placeholder="John Doe" />
                  <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
                  <InputField label="Phone Number" name="phone" type="tel" placeholder="+91 9876543210" />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Payment Method</h3>

                <div className="space-y-3">
                  {/* Card Payment */}
                  <label className="relative flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 transition-colors"
                    style={{ borderColor: formData.paymentMethod === 'card' ? '#3b82f6' : '#e2e8f0' }}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-slate-900">Credit / Debit Card</p>
                      <p className="text-xs text-slate-500">Visa, Mastercard, American Express</p>
                    </div>
                  </label>

                  {/* UPI Payment */}
                  <label className="relative flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-slate-900">UPI</p>
                      <p className="text-xs text-slate-500">Google Pay, PhonePe, Paytm</p>
                    </div>
                  </label>

                  {/* Net Banking */}
                  <label className="relative flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={formData.paymentMethod === 'netbanking'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-slate-900">Net Banking</p>
                      <p className="text-xs text-slate-500">All major banks supported</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Card Details (shown only when card is selected) */}
              {formData.paymentMethod === 'card' && (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Card Details</h3>
                  <div className="space-y-4">
                    <InputField label="Card Number" name="cardNumber" placeholder="1234 5678 9012 3456" />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField label="Expiry Date" name="expiryDate" placeholder="MM/YY" />
                      <InputField label="CVV" name="cvv" placeholder="123" />
                    </div>
                    <InputField label="Cardholder Name" name="cardholderName" placeholder="John Doe" />
                  </div>
                </div>
              )}

              {/* Terms & Conditions */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 mt-0.5 rounded" />
                  <span className="text-sm text-slate-700">
                    I agree to the <a href="#" className="text-blue-600 font-semibold hover:underline">terms and conditions</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">privacy policy</a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white/30 text-black font-bold text-base px-12 py-4 rounded-full cursor-pointer transition-all duration-200 border border-black backdrop-blur-sm flex items-center justify-center gap-3"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)'; }}
              >
                <CreditCard size={20} />
                Complete Payment - {formData.amount}
              </button>

              {/* Secure Info */}
              <p className="text-xs text-slate-500 text-center">
                Your payment is processed securely. No payment information is stored on our servers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
