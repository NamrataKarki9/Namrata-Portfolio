require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const contactRoutes = require('./routes/contact');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
