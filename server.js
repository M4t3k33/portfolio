const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const reviews = [];

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

app.post('/reviews', (req, res) => {
    const { rating, comment } = req.body;
    const newReview = { rating, comment };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});