document.getElementById("pubButton").onclick = () => {
    // fetch("http://localhost:3000/mqtt", {

    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: {
    //         message: JSON.stringify("HELLO MQTT")
    //     }
    // }).then(res => {
    //     console.log("req posted: ", res);
    // }).catch((err) => {
    //     console.log("error: ", err);
    // })
    fetch(
        "http://localhost:3000/mqtt"
        // "https://jsonplaceholder.typicode.com/posts"
        , {

            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "no-cors",
            body: {
                message: "LKASJDl"
            }
        }).then(res => {
            console.log("req posted: ", res);
        }).catch((err) => {
            console.log("error: ", err);
        })
}


// fetch(
//     "http://localhost:3000/m").then(res => {
//         // console.log(res);
//     })
