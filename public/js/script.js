document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendEmailButton').addEventListener('click', function () {
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Construct mailto link
        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const mailtoLink = `mailto:centralfloridawebdev@gmail.com?subject=${subject}&body=${body}`;

        // Open mail app
        window.location.href = mailtoLink;
    });
});
