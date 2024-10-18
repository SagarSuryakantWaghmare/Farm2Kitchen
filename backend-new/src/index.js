// ES module syntax
import express from 'express';  
import cors from 'cors';       
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import FormDataModel from './models/FormData.js';  

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await FormDataModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json("Already registered");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await FormDataModel.create({ ...req.body, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await FormDataModel.findOne({ email });
    if (!user) {
      return res.status(404).json("No records found!");
    }

    // Check if the password matches
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.json("Success");
    } else {
      res.status(401).json("Wrong password");
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
