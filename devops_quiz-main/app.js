const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Node.js Web App!');
});

// API route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.get('/name', (req, res) => {
    res.send('<h1>แนะนำตัว</h1> <br> Hello my name is Pongtham <br> Lastname: Deebookum <br>  Student ID:653129'
    );
});