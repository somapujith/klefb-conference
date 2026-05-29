import { useState, useEffect } from 'react';
import { LogOut, RefreshCw, AlertCircle, Download } from 'lucide-react';
import './AdminDashboard.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function AdminDashboard({ onLogout }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/api/payments`);
      const result = await response.json();

      if (result.success) {
        setPayments(result.data || []);
      } else {
        setError('Failed to load payments');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return 'N/A';
    const date = new Date(isoDate);
    // Convert to IST (UTC+5:30)
    const istTime = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
    return istTime.toLocaleString('en-IN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    });
  };

  const formatItems = (items) => {
    if (!items || items.length === 0) return 'None';
    return items.map(item => item.name || item).join(', ');
  };

  const exportToCSV = () => {
    if (payments.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = ['Name', 'Email', 'Phone', 'Country', 'Selected Options', 'Payment Method', 'Transaction ID', 'Amount', 'Currency', 'Submitted At'];

    const rows = payments.map(payment => [
      payment.full_name,
      payment.email,
      payment.phone,
      payment.country || 'N/A',
      formatItems(payment.items),
      payment.payment_method,
      payment.transaction_id,
      payment.amount,
      payment.currency,
      formatDate(payment.created_at),
    ]);

    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `payments-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Payment Dashboard</h1>
          <p>Total Payments: {payments.length}</p>
        </div>
        <div className="header-actions">
          <button onClick={fetchPayments} className="refresh-btn" disabled={loading}>
            <RefreshCw size={18} />
            Refresh
          </button>
          <button onClick={exportToCSV} className="export-btn" disabled={payments.length === 0}>
            <Download size={18} />
            Export CSV
          </button>
          <button onClick={onLogout} className="logout-btn">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({payments.length})
        </button>
        <button
          className={`tab ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({payments.filter(p => p.status === 'completed').length})
        </button>
        <button
          className={`tab ${filter === 'failed' ? 'active' : ''}`}
          onClick={() => setFilter('failed')}
        >
          Failed ({payments.filter(p => p.status === 'failed').length})
        </button>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {error && (
          <div className="error-banner">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {loading ? (
          <div className="loading">Loading payments...</div>
        ) : payments.length === 0 ? (
          <div className="no-data">
            <p>No payments yet</p>
          </div>
        ) : (
          <>
            {(() => {
              const filtered = filter === 'all'
                ? payments
                : payments.filter(p => p.status === filter);

              return filtered.length === 0 ? (
                <div className="no-data">
                  <p>No {filter} payments</p>
                </div>
              ) : (
                <div className="table-wrapper">
                <table className="payments-table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Selected Options</th>
                      <th>Payment Method</th>
                      <th>Transaction ID</th>
                      <th>Amount</th>
                      <th>Currency</th>
                      <th>Submitted At</th>
                      {filter === 'failed' && <th>Error Message</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((payment) => (
                      <tr key={payment.id}>
                        <td>
                          <span className={`status-badge ${payment.status || 'completed'}`}>
                            {payment.status || 'completed'}
                          </span>
                        </td>
                        <td>{payment.full_name}</td>
                        <td>{payment.email}</td>
                        <td>{payment.phone}</td>
                        <td>{payment.country || 'N/A'}</td>
                        <td className="items-cell">{formatItems(payment.items)}</td>
                        <td>
                          <span className="badge">{payment.payment_method}</span>
                        </td>
                        <td className="mono">{payment.transaction_id}</td>
                        <td>{payment.amount}</td>
                        <td>{payment.currency}</td>
                        <td>{formatDate(payment.created_at)}</td>
                        {filter === 'failed' && <td className="error-text">{payment.error_message || 'Unknown error'}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              );
            })()}
          </>
        )}
      </div>
    </div>
  );
}
