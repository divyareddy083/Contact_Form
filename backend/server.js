const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Initialize app
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // 
    password: 'divya023', // 
    database: 'contact_us_db'   // 
});

// Connect to DB
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL Database ✅');
});

// API Route to handle form submission
app.post('/api/contact', (req, res) => {
    const { fullName, contactNumber, email, organization, interestedIn, message } = req.body;

    if (!fullName || !contactNumber || !email || !organization || !interestedIn || !message) {
        return res.status(400).json({ message: 'Please fill all fields!' });
    }

    const sql = 'INSERT INTO contacts (fullName, contactNumber, email, organization, interestedIn, message) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [fullName, contactNumber, email, organization, interestedIn, message];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Server Error. Try again later.' });
        }
        return res.status(200).json({ message: 'Form submitted successfully!' });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 🚀`);
});
