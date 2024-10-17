const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Load the MONGO_URI from the .env file
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // Options no longer needed since Mongoose 6+
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        // Exit process with failure if unable to connect
        process.exit(1);
    }
};

module.exports = connectDB;
