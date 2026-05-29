import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './AdminLogin.css';

const ADMIN_PASSWORD = 'admin123';

export function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminAuth', 'true');
        onLogin();
      } else {
        setError('Invalid password');
        setPassword('');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-content">
          <div className="logo-section">
            <img src="/klh.png" alt="KLH Logo" className="logo-image" />
          </div>

          <h1 className="title">Admin Access</h1>
          <p className="subtitle">Payment Dashboard</p>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-alert">
                <p>{error}</p>
              </div>
            )}

            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={loading}
                autoFocus
                className="password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
                disabled={loading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="submit-btn"
            >
              {loading ? 'Verifying...' : 'Sign In'}
            </button>
          </form>

          <p className="footer">IEEE AIQSEC 2024</p>
        </div>
      </div>
    </div>
  );
}
