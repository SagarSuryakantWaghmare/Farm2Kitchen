// ES module syntax
import express from 'express';  
import cors from 'cors';       
import mongoose from 'mongoose';
import FormDataModel from './models/FormData.js';  

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://sagarwaghmare1384:VoHVrWrijmOP2r4e@Userdatabase.7znk7.mongodb.net/mydatabase?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register route
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered");
      } else {
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.status(500).json(err));
      }
    })
    .catch(err => res.status(500).json(err));
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        // Check if the password matches
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("No records found!");
      }
    })
    .catch(err => res.status(500).json(err));
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
