import { Lock, ArrowLeft, ShieldCheck, CheckCircle2, QrCode } from 'lucide-react';
import { useState } from 'react';
import './Payment.css';

export function Payment() {
  const [formData, setFormData] = useState({
    category: 'IEEE Student Member',
    amount: '₹8,000',
    currency: 'INR',
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    paymentMethod: 'upi',
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
      alert('Payment processing started. Redirecting to payment gateway...');
    } else {
      setErrors(newErrors);
    }
  };

  const InputField = ({ label, name, type = 'text', required = true, placeholder = '' }) => (
    <div className="input-group">
      <label className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`input-field ${errors[name] ? 'error' : ''}`}
      />
      {errors[name] && <p className="error-msg">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="payment-page">
      {/* ── Header ── */}
      <div className="payment-header">
        <h1 className="payment-title">Complete Your Registration</h1>
        <p className="payment-subtitle">
          Secure payment for AIQSEC 2026. Please review your details and complete the payment below.
        </p>
      </div>

      {/* ── Main Content ── */}
      <div className="payment-content">
        
        {/* ── Payment Form (Left on Desktop) ── */}
        <div className="payment-form-section">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Personal Information */}
            <div className="payment-card">
              <div style={{ marginBottom: '2rem' }}>
                <h3 className="payment-card-title">Personal Information</h3>
                <p className="payment-card-desc">Please ensure these details match your registration.</p>
              </div>
              
              <div className="form-grid">
                <div className="col-span-2">
                  <InputField label="Full Name" name="fullName" placeholder="e.g. Jane Doe" />
                </div>
                <InputField label="Email Address" name="email" type="email" placeholder="jane@example.com" />
                <InputField label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="payment-card">
              <div style={{ marginBottom: '2rem' }}>
                <h3 className="payment-card-title">Payment Method</h3>
                <p className="payment-card-desc">Select how you would like to pay.</p>
              </div>

              <div className="method-grid">
                <label className={`method-label ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <div className="method-header">
                    <span className="method-title">UPI Transfer</span>
                    {formData.paymentMethod === 'upi' && <CheckCircle2 className="method-icon" />}
                  </div>
                  <p className="method-desc">Google Pay, PhonePe, Paytm, etc.</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                </label>

                <label className={`method-label ${formData.paymentMethod === 'bank' ? 'selected' : ''}`}>
                  <div className="method-header">
                    <span className="method-title">Bank Transfer</span>
                    {formData.paymentMethod === 'bank' && <CheckCircle2 className="method-icon" />}
                  </div>
                  <p className="method-desc">Direct NEFT/RTGS/IMPS to our account.</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {/* Conditional Payment Details */}
              <div className="conditional-details">
                {formData.paymentMethod === 'upi' && (
                  <div className="qr-section">
                    <div className="qr-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '130px', minHeight: '130px', background: '#f9fafb' }}>
                      <QrCode size={64} color="#6b7280" />
                    </div>
                    <div className="qr-text-container">
                      <h4>Scan to Pay</h4>
                      <p>
                        Open any UPI app on your phone and scan the QR code to complete the payment of <span>{formData.amount}</span>.
                      </p>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'bank' && (
                  <div>
                    <h4 className="bank-details-title">Bank Account Details</h4>
                    <div className="bank-grid">
                      <div>
                        <p className="bank-item-label">Account Name</p>
                        <p className="bank-item-value">IEEE AIQSEC Conference</p>
                      </div>
                      <div>
                        <p className="bank-item-label">Account Number</p>
                        <p className="bank-item-value font-mono">1234567890</p>
                      </div>
                      <div>
                        <p className="bank-item-label">IFSC Code</p>
                        <p className="bank-item-value font-mono">SBIN0001234</p>
                      </div>
                      <div>
                        <p className="bank-item-label">Bank Name</p>
                        <p className="bank-item-value">State Bank of India</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button & Terms */}
            <div className="submit-section">
              <button type="submit" className="submit-btn">
                <Lock size={18} className="submit-icon" />
                Pay {formData.amount} Securely
              </button>

              <p className="terms-text">
                By clicking this button, you agree to our <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>.
              </p>
            </div>
          </form>
        </div>

        {/* ── Order Summary (Right on Desktop) ── */}
        <div className="order-summary-section">
          <div className="summary-container payment-card">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-row">
              <div>
                <p className="summary-label">{formData.category}</p>
                <p className="summary-sublabel">Registration Fee</p>
              </div>
              <span className="summary-value">{formData.amount}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-subtotal-row">
              <span>Subtotal</span>
              <span className="summary-subtotal-value">{formData.amount}</span>
            </div>
            <div className="summary-subtotal-row">
              <span>Taxes & Fees</span>
              <span className="summary-free">Included</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total-row">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-value">{formData.amount}</span>
            </div>

            <div className="secure-badge">
              <ShieldCheck className="secure-icon" />
              <p>Guaranteed safe & secure checkout</p>
            </div>

            <button
              onClick={() => window.history.back()}
              className="back-btn"
            >
              <ArrowLeft size={16} />
              <span className="back-text">Back to details</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
