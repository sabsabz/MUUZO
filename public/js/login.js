const form = document.getElementById("login")


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
  
    if(!email || !password){
        alert("Fileds cannot be blank")
    }else{
       await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
          }).then(response =>{
            if(response.ok){
                window.location.href = "/OTP"
            } else {
                alert("Invalid phone number or password")
            }
          })
        
        }
  
    
})