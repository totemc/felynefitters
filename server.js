const express = require('express');
const request = require('request');
const htmlConverter = require('html-to-json');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 5000; 


app.get('/api/hello', (req, res) => {

});

app.listen(port, () => console.log(`Listening on port ${port}`));