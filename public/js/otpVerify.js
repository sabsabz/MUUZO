const otpForm = document.getElementById("otpForm");

console.log(otpForm);

otpForm.addEventListener("click", async () => {
   console.log("clicked");
    const otp = document.getElementById("otp").value;
    const userId = localStorage.getItem('userId'); // Assuming you stored userId in localStorage during login

    if (!otp) {
        alert("OTP field cannot be blank");
    } else {
        await fetch("/otp/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, otp })
        }).then(response => {
            if (response.ok) {
                window.location.href = "/Food";
            } else {
                alert("Invalid or expired OTP");
            }
        }).catch(error => {
            console.error('Error:', error);
            alert("An error occurred while verifying OTP");
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 73e9a241dc004a1e6bea770f4ebf4c31357f271a
