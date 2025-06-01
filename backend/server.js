require('dotenv').config(); // To load environment variables from .env file
console.log('DEBUG: MONGO_URI from process.env:', process.env.MONGO_URI);
console.log('DEBUG: PORT from process.env:', process.env.PORT);
const express = require('express');
const mongoose = require('mongoose'); // Require Mongoose
const cors = require('cors'); // Corrected: require('cors') not new require('cors')

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection
const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  console.error('Error: MONGO_URI is not defined in .env file');
  process.exit(1); // Exit the process if MONGO_URI is not found
}

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process on connection error as well
  });

// Basic route to check if server is up
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});


// Simple Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend API is responding successfully!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
EOF && \
echo "backend/server.js has been overwritten with corrected content."
EOF && echo "Added debugging console.log statements to backend/server.js."
