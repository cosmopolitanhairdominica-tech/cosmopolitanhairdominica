// Contact Page JavaScript
document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  let isValid = true;

  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const mobile = document.querySelector("input[name='mobile']");
  const message = document.getElementById("message");

  // Clear errors
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

  if (firstname.value.trim() === "") {
    alert("Please enter your first name");
    isValid = false;
  }

  if (lastname.value.trim() === "") {
    alert("Please enter your last name");
    isValid = false;
  }

  if (email.value.trim() === "") {
    alert("Please enter your email");
    isValid = false;
  }

  if (mobile.value.trim() === "") {
    alert("Please enter your mobile number");
    isValid = false;
  }

  if (message.value.trim() === "") {
    alert("Please enter a message");
    isValid = false;
  }

  if (!isValid) return;

  const data = {
    firstname: firstname.value.trim(),
    lastname: lastname.value.trim(),
    email: email.value.trim(),
    mobile: mobile.value.trim(),
    message: message.value.trim()
  };

  try {
    const response = await fetch(this.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Your message was sent successfully 💕");
      this.reset();
    } else {
      alert("Form submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
});


