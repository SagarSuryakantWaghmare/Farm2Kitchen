// controllers/contactController.js
const Contact = require('../models/Contact');

// Handle contact form submission
const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save(); // Save the contact data to the database
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting the form', error });
  }
};

module.exports = {
  submitContactForm,
};
