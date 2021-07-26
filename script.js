const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const loginButton = document.getElementById('login-button');

function checkLoginAndPassword() {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === 123456) {
    alert('Olá, Tryber!');
  } else if (inputLogin.value === 'tryber@teste.com' || inputPassword.value === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLoginAndPassword);

const evaluateTrybe = document.getElementById('evaluate-trybe-radio');

for (let index = 1; index < 11; index += 1) {
  const div = document.createElement('div');
  div.className = 'form-check';
  evaluateTrybe.appendChild(div);
  const label = document.createElement('label');
  label.innerText = index;
  label.className = 'form-check-label';
  div.appendChild(label);
  const inputRadio = document.createElement('input');
  inputRadio.setAttribute('type', 'radio');
  inputRadio.setAttribute('value', index);
  inputRadio.setAttribute('name', 'rate');
  div.appendChild(inputRadio);
}

const counterTextArea = document.getElementById('counter');
const textArea = document.querySelector('#textarea');

textArea.addEventListener('keyup', () => {
  const inputLength = textArea.value.length;
  counterTextArea.innerText = 500 - (inputLength);
});

const agreementBox = document.querySelector('#agreement');
const submitButton = document.getElementById('submit-btn');

function checkSelectedButton() {
  if (agreementBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreementBox.addEventListener('click', checkSelectedButton);

const forms = document.getElementById('evaluation-form');

function allSubjects() {
  const matter = document.querySelectorAll('.subject');
  let subjects = '';
  for (let index = 0; index < matter.length; index += 1) {
    if (matter[index].checked === true) {
      subjects = `${subjects} ${matter[index].value},`;
    }
  }
  return subjects;
}

function createObjectsValues() {
  return {
    name: document.getElementById('input-name').value,
    lastName: document.getElementById('input-lastname').value,
    email: document.getElementById('input-email').value,
    home: document.getElementById('house').value,
    family: document.querySelector('input[name="family"]:checked').value,
    comments: document.getElementById('textarea').value,
    assessment: document.querySelector('input[name="rate"]:checked').value,
    subjects: allSubjects(),
  };
}

const dados = (value) =>
  `Nome:  ${value.name} ${value.lastName}
  Email: ${value.email}
  Casa: ${value.home}
  Família: ${value.family}
  Matérias: ${value.subjects}
  Avaliação: ${value.assessment}
  Observações: ${value.comments}`;

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const value = createObjectsValues();
  forms.innerText = '';
  const p = document.createElement('p');
  const h1 = document.createElement('h1');
  h1.innerText = 'Dados Cadastrados';
  p.className = 'p-style';
  p.innerText = dados(value);
  forms.appendChild(h1);
  forms.appendChild(p);
});
