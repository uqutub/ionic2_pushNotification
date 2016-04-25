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
    registration_id: 'c1qEzi-I8SA:APA91bE_FdvQvJzJ8ioG8Ss7fP-M5K4-R_tLa9fzaD_mjGPf7GXpo9naS6os364eTCCcSrcRoEfnBQdV7sRsLI3CU93ZOQa_fxHnr7LiR_82lVpc8X9gh7rfR-_NxSNNhz1Vldw0ZJ1v', // required
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