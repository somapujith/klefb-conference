require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Root
app.get('/', (req, res) => {
  res.json({ message: 'IEEE Payment API Server', status: 'running' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

// Save payment endpoint
app.post('/api/payments', async (req, res) => {
  try {
    const { fullName, email, phone, country, paymentMethod, transactionId, items, total, currency, status } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !transactionId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('payments')
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          country,
          payment_method: paymentMethod,
          transaction_id: transactionId,
          items,
          amount: total,
          currency,
          status: 'completed',
        },
      ]);

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      data,
      message: 'Payment saved successfully',
    });
  } catch (err) {
    console.error('Payment save error:', err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Log failed payment endpoint
app.post('/api/payments/failed', async (req, res) => {
  try {
    const { fullName, email, phone, country, paymentMethod, transactionId, items, total, currency, error_message, status } = req.body;

    const { data, error } = await supabase
      .from('payments')
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          country,
          payment_method: paymentMethod,
          transaction_id: transactionId || 'N/A',
          items,
          amount: total,
          currency,
          status: 'failed',
          error_message,
        },
      ]);

    if (error) {
      console.error('Failed to log payment failure:', error);
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Error logging failed payment:', err);
    res.status(500).json({ success: false });
  }
});

// Get all payments (for admin)
app.get('/api/payments', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
