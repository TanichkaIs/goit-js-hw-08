import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formObject = {};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

// updateInputForm();
initForm();

function onInputForm(evt) {
  formObject[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
}

function initForm() {
  let persistedFilters = localStorage.getItem(STORAGE_KEY)
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
   Object.entries(persistedFilters).forEach (([name, value]) => {
    formObject[name] = value;
   form.elements[name].value = value;
   });
  }
}


function onSubmitForm(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;
  const formData = { email: email.value, message: message.value };

  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка, заповніть пусті рядочки!');
  }
  formObject = {};
  console.log("Відправляємо форму ", formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
