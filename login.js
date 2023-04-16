
const signupButton = document.createElement('button');

signupButton.innerText = 'Sign Up';


signupButton.setAttribute('onclick', 'signup()');

// xsdocument.body.appendChild(signupButton);

function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  window.location.href = 'dashboard.html';
}