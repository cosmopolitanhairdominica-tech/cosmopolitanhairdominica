fetch("https://formspree.io/f/abcdwxyz", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName: "Catherine",
    lastName: "Phillip",
    email: "catherinap@gmail.com",
    message: "Hello!"
  })
});
