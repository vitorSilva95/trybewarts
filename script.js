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
const evaluateTrybe = document.getElementById('evaluate-trybe-radio');

for (let index = 1; index < 11; index += 1) {
  const div = document.createElement('div');
  div.className = 'form-check';
  evaluateTrybe.appendChild(div);

  const label = document.createElement('label');
  label.innerText = index;
  div.appendChild(label);
  label.className = 'form-check-label';

  const inputRadio = document.createElement('input');
  inputRadio.setAttribute('type', 'radio');
  inputRadio.setAttribute('value', index);
  inputRadio.setAttribute('name', 'rate');
  div.appendChild(inputRadio);
}
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', checkLoginAndPassword);

const mandatorybutton = document.querySelector('#agreement');
const enablebutton = document.querySelector('#submit-btn');

function checkSelectedButton () {
  enablebutton.disabled = false;
}
mandatorybutton.addEventListener('click', checkSelectedButton);