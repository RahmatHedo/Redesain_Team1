const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('IGRS Backend API is running!');
});

// Import Routes
const gamesRoutes = require('./routes/games');
app.use('/api/v1/games', gamesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
