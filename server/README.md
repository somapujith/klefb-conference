# IEEE Payment Server

Backend server for payment processing and Supabase integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
PORT=5000
NODE_ENV=development
```

3. Run locally:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### POST /api/payments
Save payment data to Supabase

Request:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "country": "India",
  "paymentMethod": "upi",
  "transactionId": "TXN123456",
  "items": [...],
  "total": "₹500",
  "currency": "INR"
}
```

### GET /api/payments
Get all payments (admin use)

## Deploy to Render

1. Push code to GitHub
2. Go [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repo
5. Set environment variables in Render dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `PORT` (Render sets this automatically)
6. Start command: `npm start`
7. Deploy

Your server URL will be something like: `https://ieee-payment-server.onrender.com`

Then update frontend `.env.local`:
```
REACT_APP_API_URL=https://ieee-payment-server.onrender.com
```
