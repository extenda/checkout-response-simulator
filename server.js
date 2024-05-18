const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to simulate delay
app.get('/simulate-delay', (req, res) => {
    const delay = parseInt(req.query.delay, 10);
    if (isNaN(delay) || delay < 0) {
        return res.status(400).send('Invalid delay');
    }
    setTimeout(() => {
        res.send(`Response received after ${delay} ms.`);
    }, delay);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

