const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));

app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));