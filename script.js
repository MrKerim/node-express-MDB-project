
//making a request to the server
fetch("http://localhost:3000/user")

// when we get a response from the server we convert it to json
// to do this we assume response is a application/json type
.then(response => response.json())
// then get the data out from the initial recieved package and assing
.then(data => {
    console.log(data);
    console.log(typeof data);
    document.getElementById("userName").innerText = data.name;
    document.getElementById("userAge").innerText = data.age;
    document.getElementById("userOccupation").innerText = data.occupation;
})
.catch(error => console.error(error));


// When the form has been clicked
document.getElementById("submitForm").addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();
    const name = document.getElementById("formName").value;
    const age = document.getElementById("formAge").value;
    const occupation = document.getElementById("formOccupation").value;
    
    // Assinging the inputs into our object
    const user_send = {
        name: name,
        age: age,
        occupation: occupation
    }

    // Send the user data to the server
    fetch('http://localhost:3000/submituser', {
        method: 'POST', // or 'PUT' if you're updating the user data
        headers: {
            'Content-Type': 'application/json',
        },
        // convert the object to a json string
        body: JSON.stringify(user_send),
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        console.log('Success:', data.message);
        // Here, you can also update the UI to indicate success or handle the received data
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors, for example, by showing an error message to the user
    });
    
});