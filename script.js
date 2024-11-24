document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a message (you can replace this with actual form submission logic)
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Thank you, ${name}. Your message has been sent!`;

    // Optionally, clear the form
    document.getElementById('contact-form').reset();
});
