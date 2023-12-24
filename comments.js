// Create web server

// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// Create express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments');

// Configure app
app.use(cors());
app.use(bodyParser.json());

// Create routes
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ comments });
    }
  });
});

app.post('/comments', (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ comment });
    }
  });
});

// Start server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});