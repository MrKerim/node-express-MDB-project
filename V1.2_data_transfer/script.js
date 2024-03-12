document.getElementById("getData").addEventListener("click", function() {
    console.log("Data Requested...");
    fetch("http://localhost:3000/getData")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById("dataReciever").textContent = json.message;
        return json;
    })
    .catch(error => console.error(error));
});

document.getElementById("sendData").addEventListener("click", function() {
    console.log("Data Sent...");
    data = {};
    data.message = document.getElementById("dataSender").value;
    fetch("http://localhost:3000/sendData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
        console.log(json.message);
        return json;
    })
    .catch(error => console.error(error));
});