document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        console.log('Email:', email, 'Password:', password);

        fetch("http://localhost:3000/api/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
        .then(response => {
            if(response.status == 200){
                alert("Logged in successfully!");
                window.location.href = "./pages/main.html";
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
