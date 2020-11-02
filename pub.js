var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var mqtt = require("mqtt")

var topic = "testTopic"
var message = "Hello mqtt, listen to me"


var client = mqtt.connect("mqtt://localhost:1234")

client.on("connect", () => {
    console.log("Client Pub connected!");

})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.post("/mqtt", function (req, res) {
    console.log("request at mqtt: ", req.body);
    client.publish(topic, "HELLOW")
    res.status(200).send("Message sent to mqtt");
});

app.get('/', (req, res) => {
    // console.log("get at /", req);
    return res.send('Received a GET HTTP method');
});

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});