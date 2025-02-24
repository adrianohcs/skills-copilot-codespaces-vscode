// create web server
const express = require('express');
const app = express();
const port = 3000;

// add middleware
app.use(express.static('public'));

// create route for comments
app.get('/comments', (req, res) => {
  res.json({ comments: [{ username: 'Todd', comment: 'lol' }] });
});

// start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});