// TASK 1

// Якщо емейл і пароль користувача збігаються, зберігати дані з форми при сабміті у локальне сховище
// і змінюй кнопку login на logout і роби поля введення недоступними для змін.

// При перезавантаженні сторінки, якщо користувавч залогінений ми маємо бачити logout - кнопку та недоступні для змін поля з даними користувача.

// Клік по кнопці logout повертає вас до початкового вигляду і видаляє дані користувача з локального сховища.

// Якщо введені дані не збігаються з потрібними даними викликайте alert і повідомляйте про помилку.

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'user-data';

const form = document.querySelector('.login-form');
const btn = document.querySelector('.login-form button');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    return alert('Fill all fields!');
  }

  if (emailValue === USER_DATA.email && passwordValue === USER_DATA.password) {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({ email: emailValue, password: passwordValue })
    );
    btn.textContent = 'Logout';
    email.setAttribute('readonly', true);
    password.setAttribute('readonly', true);
  } else {
    alert('Wrong data!');
  }
}
