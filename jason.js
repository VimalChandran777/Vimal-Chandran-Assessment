const username = document.getElementById('username');
const password = document.getElementById('password');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value === localStorage.getItem('username') && password.value === localStorage.getItem('password')) {
        location.href =  "/Staff.html"
    } else {
        alert('Invalid Credentials')
    }
})