var mqtt = require("mqtt")
var client = mqtt.connect("mqtt://localhost:1234")
var topic = "testTopic"

client.on("connect", () => {
    client.subscribe(topic)
    console.log("CLient sub connected!");
})


client.on("message", (tpc, message) => {
    // client.publish(message)
    console.log(message.toString());
})