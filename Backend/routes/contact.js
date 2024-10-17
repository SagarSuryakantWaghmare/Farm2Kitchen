// routes/contact.js
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Define POST route for the contact form
router.post('/contact', submitContactForm);

module.exports = router;
