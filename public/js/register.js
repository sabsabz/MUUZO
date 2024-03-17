



const form = document.getElementById("myForm");


form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form controls
  const firstName = document.getElementById("FirstName");
  const lastName = document.getElementById("LastName");
  const phoneNumber = document.getElementById("PhoneNumber");
  const emailAddress = document.getElementById("EmailAddress");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("ConfirmPassword");

  // Validate the form controls
  if (firstName.value === "") {
    alert("First name is required.");
    return;
  }
  if (lastName.value === "") {
    alert("First name is required.");
    return;
  }
  if (phoneNumber.value === "") {
    alert("Phone number is required.");
    return;
  }
  if (!phoneNumber.value.match(/^[0-9]{12}$/)) {
    alert("Phone number must be 12 digits.");
    return;
  }
  if (emailAddress.value === "") {
    alert("Email address is required.");
    return;
  }
  if (!emailAddress.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    alert("Email address is invalid.");
    return;
  }
  if (password.value === "") {
    alert("Password is required.");
    return;
  }
  if (password.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }
  if (confirmPassword.value === "") {
    alert("Confirm password is required.");
    return;
  }
  if (confirmPassword.value !== password.value) {
    alert("Confirm password must match password.");
    return;
  }

  // If everything is valid, submit the form
  // form.submit();

  fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      first_name: firstName.value,
      last_name: lastName.value,
      phone_number: phoneNumber.value,
      email: emailAddress.value,
      password: password.value,
     
    })
  })
  .then(response => {
    if (response.ok) {
      console.log("User created successfully!");
      window.location.href = "/sign-in";
    } else {
      console.log("Error creating user:", response.status);
      // Handle the error
    }
  }
  // .catch(error => {
  //   console.log("Error creating user:", error);
  )
});
