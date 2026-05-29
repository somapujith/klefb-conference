import { Lock, ArrowLeft, ShieldCheck, CheckCircle2, QrCode, AlertCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { savePayment } from '../utils/supabaseClient';
import './Payment.css';

const STORAGE_KEY = 'aiqsec_payment_form';
const REGISTRATION_STORAGE_KEY = 'aiqsec_registration_selections';

const getInitialFormData = () => {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const itemsJson = params.get('items');
  const total = params.get('total');
  const region = params.get('region') || 'india';

  // If URL has items, use them (coming from Registration page)
  if (itemsJson && total) {
    let items = [];
    try {
      items = JSON.parse(decodeURIComponent(itemsJson));
    } catch (e) {
      items = [];
    }
    return {
      items,
      total,
      currency: region === 'international' ? 'USD' : 'INR',
      fullName: '',
      email: '',
      phone: '',
      country: region === 'international' ? 'International' : 'India',
      paymentMethod: 'upi',
      transactionId: '',
    };
  }

  // If no URL params, try to load from localStorage (continuing a previous payment)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }

  // Default fallback
  return {
    items: [],
    total: '₹0',
    currency: 'INR',
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    paymentMethod: 'upi',
    transactionId: '',
  };
};

const InputField = ({ label, name, type = 'text', required = true, placeholder = '', value, onChange, error }) => (
  <div className="input-group">
    <label className="input-label">
      {label} {required && <span className="required">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-field ${error ? 'error' : ''}`}
    />
    {error && <p className="error-msg">{error}</p>}
  </div>
);

export function Payment() {
  const [formData, setFormData] = useState(getInitialFormData);

  const [errors, setErrors] = useState({});
  const [successState, setSuccessState] = useState(false);
  const [qrFullscreen, setQrFullscreen] = useState(false);
  const [qrHovered, setQrHovered] = useState(false);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  // Check if required details are filled
  const isFormComplete = formData.fullName.trim() && formData.email.trim() && formData.phone.trim();

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
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const result = await savePayment(formData);

      if (result.success) {
        setSuccessState(true);
        setTimeout(() => {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(REGISTRATION_STORAGE_KEY);
          // Could redirect here: window.location.href = '/confirmation';
        }, 2000);
      } else {
        setErrors({ submit: `Failed to save payment: ${result.error}` });
      }
    } else {
      setErrors(newErrors);
    }
  };

  // Fullscreen QR Modal
  if (qrFullscreen) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}
        onClick={() => setQrFullscreen(false)}
      >
        <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setQrFullscreen(false)}
            style={{
              position: 'absolute',
              top: '-3rem',
              right: 0,
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <X size={32} />
          </button>
          <img
            src="/qr-code.jpg"
            alt="UPI QR Code"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '1rem'
            }}
          />
        </div>
      </div>
    );
  }

  // Success State
  if (successState) {
    return (
      <div className="payment-page">
        <div className="payment-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <div className="payment-card" style={{ textAlign: 'center', maxWidth: '500px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#d1fae5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                marginBottom: '2rem'
              }}>
                <CheckCircle2 size={48} color="#10b981" />
              </div>
            </div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
              Transaction Successful!
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '2rem', lineHeight: '1.625' }}>
              Your payment for <span style={{ fontWeight: '600' }}>{formData.total}</span> has been processed successfully.
            </p>
            <div style={{
              background: '#f0fdf4',
              border: '1px solid #dcfce7',
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <p style={{ fontSize: '0.875rem', color: '#166534', marginBottom: '0.5rem' }}>
                <strong>Transaction ID:</strong> {formData.transactionId}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#166534', marginBottom: '0.5rem' }}>
                <strong>Amount:</strong> {formData.total}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#166534' }}>
                <strong>Registration Name:</strong> {formData.fullName}
              </p>
            </div>
            <a
              href="/registration"
              style={{
                display: 'inline-block',
                background: '#111827',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                fontWeight: '600',
                marginTop: '1rem'
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* Header */}
      <div className="payment-header">
        <h1 className="payment-title">Complete Your Registration</h1>
        <p className="payment-subtitle">
          Enter your details, select payment method, and complete the transaction.
        </p>
      </div>

      {/* Main Content */}
      <div className="payment-content">
        {/* Left: Form */}
        <div className="payment-form-section">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Step 1: Required Personal Information */}
            <div className="payment-card">
              <div style={{ marginBottom: '2rem' }}>
                <h3 className="payment-card-title">Step 1: Your Details</h3>
                <p className="payment-card-desc">Enter your details (required to proceed)</p>
              </div>

              <div className="form-grid">
                <div className="col-span-2">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                  />
                </div>
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </div>
            </div>

            {/* Step 2: Payment Method (Only if form complete) */}
            {isFormComplete && (
              <>
                <div className="payment-card">
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 className="payment-card-title">Step 2: Choose Payment Method</h3>
                    <p className="payment-card-desc">Select how you'd like to pay</p>
                  </div>

                  <div className="method-grid">
                    <label className={`method-label ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                      <div className="method-header">
                        <span className="method-title">UPI Transfer</span>
                        {formData.paymentMethod === 'upi' && <CheckCircle2 className="method-icon" />}
                      </div>
                      <p className="method-desc">Google Pay, PhonePe, Paytm</p>
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
                      <p className="method-desc">Direct NEFT/RTGS/IMPS</p>
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
                </div>

                {/* Step 3: Payment Details */}
                <div className="payment-card">
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 className="payment-card-title">Step 3: Complete Payment</h3>
                    <p className="payment-card-desc">
                      {formData.paymentMethod === 'upi' ? 'Scan QR code to pay' : 'Transfer to our account'}
                    </p>
                  </div>

                  <div className="conditional-details">
                    {formData.paymentMethod === 'upi' && (
                      <div className="qr-section">
                        <div
                          className="qr-container"
                          style={{ cursor: 'pointer', position: 'relative' }}
                          onClick={() => setQrFullscreen(true)}
                          onMouseEnter={() => setQrHovered(true)}
                          onMouseLeave={() => setQrHovered(false)}
                        >
                          <img src="/qr-code.jpg" alt="UPI QR Code" style={{ width: '140px', height: '140px', objectFit: 'contain' }} />
                          {qrHovered && (
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', transition: 'all 0.2s' }}>
                              <span style={{ fontSize: '0.75rem', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontWeight: '500' }}>Click to enlarge</span>
                            </div>
                          )}
                        </div>
                        <div className="qr-text-container">
                          <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Scan to Pay</h4>
                          <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.625' }}>
                            Open any UPI app and scan to complete payment of <span style={{ fontWeight: 'bold', color: '#111827' }}>{formData.total}</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === 'bank' && (
                      <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #f3f4f6' }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Bank Account Details</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.875rem' }}>
                          <div>
                            <p style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '0.25rem' }}>Account Name</p>
                            <p style={{ fontWeight: '500', color: '#111827' }}>IEEE AIQSEC Conference</p>
                          </div>
                          <div>
                            <p style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '0.25rem' }}>Account Number</p>
                            <p style={{ fontWeight: '500', color: '#111827', fontFamily: 'monospace' }}>1234567890</p>
                          </div>
                          <div>
                            <p style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '0.25rem' }}>IFSC Code</p>
                            <p style={{ fontWeight: '500', color: '#111827', fontFamily: 'monospace' }}>SBIN0001234</p>
                          </div>
                          <div>
                            <p style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '0.25rem' }}>Bank Name</p>
                            <p style={{ fontWeight: '500', color: '#111827' }}>State Bank of India</p>
                          </div>
                          <div style={{ gridColumn: '1 / -1' }}>
                            <p style={{ fontSize: '0.6875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '0.25rem' }}>Amount to Transfer</p>
                            <p style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '1.125rem' }}>{formData.total}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 4: Transaction ID */}
                <div className="payment-card">
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 className="payment-card-title">Step 4: Transaction ID</h3>
                    <p className="payment-card-desc">Enter the transaction ID after completing payment</p>
                  </div>

                  <InputField
                    label="Transaction ID"
                    name="transactionId"
                    placeholder="TXN123456789"
                    value={formData.transactionId}
                    onChange={handleInputChange}
                    error={errors.transactionId}
                  />
                  <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
                    Find this in your UPI/Bank app or confirmation email
                  </p>
                </div>

                {/* Submit */}
                <div className="submit-section">
                  {errors.submit && (
                    <div style={{
                      background: '#fee2e2',
                      border: '1px solid #fecaca',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      gap: '0.75rem'
                    }}>
                      <AlertCircle size={20} color="#dc2626" style={{ flexShrink: 0 }} />
                      <p style={{ fontSize: '0.875rem', color: '#991b1b' }}>
                        {errors.submit}
                      </p>
                    </div>
                  )}
                  <button type="submit" className="submit-btn">
                    <CheckCircle2 size={18} className="submit-icon" />
                    Confirm Payment
                  </button>
                  <p className="terms-text">
                    By submitting, you confirm the payment and transaction ID.
                  </p>
                </div>
              </>
            )}

            {!isFormComplete && (
              <div style={{
                background: '#fef3c7',
                border: '1px solid #fcd34d',
                borderRadius: '0.75rem',
                padding: '1rem',
                display: 'flex',
                gap: '0.75rem'
              }}>
                <AlertCircle size={20} color="#d97706" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.875rem', color: '#92400e' }}>
                  Fill in all required details above to proceed to payment
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Right: Order Summary (Sticky) */}
        <div className="order-summary-section">
          <div className="summary-container payment-card">
            <h2 className="summary-title">Order Summary</h2>

            {formData.items && formData.items.length > 0 ? (
              <>
                <div className="space-y-2">
                  {formData.items.map((item, idx) => {
                    const isAddon = item.isAddon;
                    return (
                      <div key={idx} className="summary-row">
                        <div>
                          <p className={`${isAddon ? 'text-xs text-slate-500' : 'summary-label'}`}>
                            {isAddon ? '+ ' : ''}{item.name}
                          </p>
                        </div>
                        <span className={`${isAddon ? 'text-sm text-slate-600' : 'summary-value'}`}>
                          {item.price}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="summary-divider"></div>

                <div className="summary-subtotal-row">
                  <span>Subtotal</span>
                  <span className="summary-subtotal-value">{formData.total}</span>
                </div>
                <div className="summary-subtotal-row">
                  <span>Taxes & Fees</span>
                  <span className="summary-free">Included</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total-row">
                  <span className="summary-total-label">Total Amount</span>
                  <span className="summary-total-value">{formData.total}</span>
                </div>
              </>
            ) : (
              <>
                <div className="summary-row">
                  <div>
                    <p className="summary-label">Registration</p>
                  </div>
                  <span className="summary-value">{formData.total}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total-row">
                  <span className="summary-total-label">Total</span>
                  <span className="summary-total-value">{formData.total}</span>
                </div>
              </>
            )}

            <div className="secure-badge">
              <ShieldCheck className="secure-icon" />
              <p>Guaranteed safe & secure</p>
            </div>

            <button
              onClick={() => window.location.href = '/registration'}
              className="back-btn"
            >
              <ArrowLeft size={16} />
              <span className="back-text">Change Selection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
