const form = document.getElementById("login")


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  
    if(!email || !password){
        alert("Fileds cannot be blank")
    }
    else {
        await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId) {
                localStorage.setItem('userId', data.userId); // Store the user ID in local storage
                window.location.href = "/OTP"; // Redirect to the OTP page
            } else {
                alert(data.message); // Show error message from server
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while logging in");
        });
    }
       
  
    
})