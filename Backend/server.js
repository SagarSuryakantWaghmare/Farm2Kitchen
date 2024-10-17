const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config(); // This should be called to load your .env variables
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Include the auth routes
app.use('/api/auth', require('./routes/auth')); // Ensure this path is correct

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
