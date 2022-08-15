// Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// SET UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

// SET UP EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET UP EXPRESS APP TO SERVE STATIC FILE
app.use(express.static(__dirname));

// DISPLAY ROUTER
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// API ROUTER
require('./routes/routes')(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  