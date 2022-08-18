// 1 Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// 2 Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.

// 3 Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

// 4 Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
//  Для цього додай до проекту і використовуй бібліотеку lodash.throttle
import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onInputWrite, 500));
form.addEventListener('submit', onSubmitForm);

function onInputWrite(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
  console.log(localStorage.getItem(FORM_KEY));
}

function onSubmitForm(e) {
  e.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    return alert('please fill in all fields');
  }

  console.log(formData);

  e.currentTarget.reset();
  localStorage.clear(FORM_KEY);
}

if (FORM_KEY) {
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY)) || '';
  form.elements['email'].value = savedData.email || '';
  form.elements['message'].value = savedData.message || '';
}
