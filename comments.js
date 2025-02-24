// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  { username: 'tammy', comment: 'lololol' },
  { username: 'sk84', comment: 'hahahah' },
  { username: 'brian', comment: 'heheheh' }
];

// Create GET route
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Listen for requests
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});