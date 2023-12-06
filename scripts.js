function performLogin() {
    // For simplicity, just show an alert for successful login
    alert('Login successful!');
}

document.addEventListener('DOMContentLoaded', function () {
    // Toggle the visibility of the login section
    const loginSection = document.getElementById('login');
    const loginLink = document.querySelector('a[href="#login"]');

    loginLink.addEventListener('click', function () {
        loginSection.classList.toggle('hidden');
    });
});
