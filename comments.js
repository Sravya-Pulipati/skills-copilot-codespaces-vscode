// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Use EJS as view engine
app.set('view engine', 'ejs');

// Use static file
app.use(express.static('public'));

// Routing
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  res.render('comments');
});

app.post('/comments', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;

  const data = {
    name: name,
    comment: comment,
  };

  res.render('comments', { data: data });
});

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));