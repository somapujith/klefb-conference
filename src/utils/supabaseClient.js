const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function savePayment(paymentData) {
  try {
    const response = await fetch(`${API_URL}/api/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...paymentData, status: 'completed' }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to save payment');
    }

    return { success: true, data: result.data };
  } catch (err) {
    console.error('Payment save error:', err.message);
    logFailedPayment(paymentData, err.message);
    return { success: false, error: err.message };
  }
}

async function logFailedPayment(paymentData, errorMessage) {
  try {
    await fetch(`${API_URL}/api/payments/failed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...paymentData,
        status: 'failed',
        error_message: errorMessage,
      }),
    });
  } catch (err) {
    console.error('Failed to log payment failure:', err);
  }
}
