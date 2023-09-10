const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const validator = require('validator');

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressMongoSanitize());
app.use(expressRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
}));
app.use(validator());

// Require and use your API routes
const apiRoutes = require('./src/Routes/api');
app.use('/api', apiRoutes);

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
