const express = require('express');
const request = require('request');
const htmlConverter = require('html-to-json');

const app = express();
const port = process.env.PORT || 5000; 

app.get('/api/hello', (req, res) => {
    request('https://mhw-db.com/weapons', function(error, response, body){
        /*var promise = htmlConverter.parse(body, {
            'itemInfo':function($doc) {
                return $doc.find('.card-footer').text();
            }
        }, function(err, result){
            res.send(result);
        });*/
        res.send(body)
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));