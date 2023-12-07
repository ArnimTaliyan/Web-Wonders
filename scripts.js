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
function toggleLoginPanel() {
    const loginPanel = document.getElementById('loginPanel');
    loginPanel.style.display = (loginPanel.style.display === 'none' || loginPanel.style.display === '') ? 'block' : 'none';
}
function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
}
function toggleMenu() {
    const nav = document.querySelector('.tesla-nav');
    nav.classList.toggle('show');
}