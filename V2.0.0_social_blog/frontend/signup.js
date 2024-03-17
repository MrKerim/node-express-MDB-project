document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        console.log('Name:', name, 'Email:', email, 'Password:', password);

        fetch("http://192.168.227.225:3000/api/user/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,email,password})
        })
        .then(response => {
            if(response.status == 201){
                alert("User created successfully! Login to continue");
                window.location.href = "./login.html";
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
    });
});
