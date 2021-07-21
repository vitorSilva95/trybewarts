const login = document.querySelector('#login');
const password = document.querySelector('#password');

function checkLoginAndPassword() {
  if (login.value === 'tryber@teste.com' && password.value === 123456) {
    alert('Olá, Tryber!');
  } else if (login.value === 'tryber@teste.com' || password.value === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', checkLoginAndPassword);
