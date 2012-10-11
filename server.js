var express = require('express');
var app = express();
var analyze = require('Sentimental').analyze;

app.get('/analyze/:text', function(req, res){
    var text = req.params.text;
    var polarity = JSON.stringify(analyze(text));
    res.send(text + ': ' + polarity);
});

app.listen(process.env.PORT);