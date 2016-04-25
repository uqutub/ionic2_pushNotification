var express = require('express');
var GCM = require('gcm').GCM;
var app = express();

var apiKey = 'AIzaSyCsCOzXB8Ewo2XcM1_YTUkFTnmIPNKD95s';
var gcm = new GCM(apiKey);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/gcm/api', function (req, res) {
  
  var message = {
    registration_id: 'fnAaeIWIUoI:APA91bHb6qFUcg7m3JfVPRTDHib8mr5d1gJf3KnAepNLyNVoqIAv98SnKP8kBjFz5onR-Tv7FMdhJe5Rv2qN1C_mfEla7uIQTf22iEMWjr6KWHuFwO-lf7wgm_c6xvXGl5XzSgPlhxph', // required
    collapse_key: 'Collapse key', 
    'data.key1': 'value1',
    'data.key2': 'value2'
  };

  gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!", err);
        res.send("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
        res.send("Sent with message ID: " + messageId);
    }
  });

  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});