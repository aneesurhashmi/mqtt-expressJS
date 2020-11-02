// var express = require("express");
// var bodyParser = require("body-parser");
// var app = express();
// var mqtt = require('mqtt')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

// // var client  = mqtt.connect('mqtt://test.mosquitto.org')

// // console.log(client);

// var mqttClient = new mqtt();
// mqttClient.connect();

// // Routes
// app.post("/send-mqtt", function (req, res) {
//     mqttClient.sendMessage(req.body.message);
//     res.status(200).send("Message sent to mqtt");
// });

// var server = app.listen(3000, function () {
//     console.log("app running on port.", server.address().port);
// });

// = 

var mosca = require("mosca")
var settings = { port: 1234 }
var broker = new mosca.Server(settings)

broker.on("ready", () => {
    console.log("Broker is ready");
})




