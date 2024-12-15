// TASK 1

// Якщо емейл і пароль користувача збігаються, зберігати дані з форми при сабміті у локальне сховище
// і змінюй кнопку login на logout і роби поля введення недоступними для змін.

// При перезавантаженні сторінки, якщо користувавч залогінений ми маємо бачити logout - кнопку та недоступні для змін поля з даними користувача.

// Клік по кнопці logout повертає вас до початкового вигляду і видаляє дані користувача з локального сховища.

// Якщо введені дані не збігаються з потрібними даними викликайте alert і повідомляйте про помилку.

// const USER_DATA = {
//   email: 'user@mail.com',
//   password: 'secret',
// };

// const LS_KEY = 'user-data';

// const form = document.querySelector('.login-form');
// const btn = document.querySelector('.login-form button');
// const email = document.querySelector('[name="email"]');
// const password = document.querySelector('[name="password"]');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (btn.textContent === 'Logout') {
//     form.reset();

//     localStorage.removeItem(LS_KEY);
//     btn.textContent = 'Login';
//     email.removeAttribute('readonly');
//     password.removeAttribute('readonly');
//     return;
//   }

//   if (emailValue === '' || passwordValue === '') {
//     return alert('Fill all fields!');
//   }

//   if (emailValue === USER_DATA.email && passwordValue === USER_DATA.password) {
//     localStorage.setItem(
//       LS_KEY,
//       JSON.stringify({ email: emailValue, password: passwordValue })
//     );
//     btn.textContent = 'Logout';
//     email.setAttribute('readonly', true);
//     password.setAttribute('readonly', true);
//   } else {
//     alert('Wrong data!');
//   }
// }

// if (localStorage.getItem(LS_KEY)) {
//   const parsedData = JSON.parse(localStorage.getItem(LS_KEY));
//   email.value = parsedData.email || '';
//   password.value = parsedData.password || '';
//   btn.textContent = 'Logout';
//   email.setAttribute('readonly', true);
//   password.setAttribute('readonly', true);
// }

// TASK 2

// Використовуй prompt та повертай значення звідти.
// Створи функцію яка буде набувати значення з prompt і повертати проміс.
// Якщо значення не є числом повертай проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 сек.
// Якщо значення непарне, вирішуй проміс та повертай "odd" через 2 сек.

// const promptValue = prompt('Enter value');

// function handlePrompt(promptValue) {
//   return new Promise((resolve, reject) => {
//     const promptValueNum = Number(promptValue);
//     if (isNaN(promptValueNum)) {
//       reject('error');
//     }
//     if (promptValueNum % 2 === 0) {
//       setTimeout(() => {
//         resolve('even');
//       }, 1000);
//     }
//     if (!promptValueNum % 2 === 0) {
//       setTimeout(() => {
//         resolve('odd');
//       }, 2000);
//     }
//   });
// }

// handlePrompt(promptValue)
//   .then(response => console.log(response))
//   .catch(reject => console.log(error));

// TASK 3

// Додай зображення дати і часу в реальному часі.

// const currentData = new Date().toLocaleString('ua');
// const setData = document.querySelector('.data span');

// update();
// function update() {
//   setData.textContent = new Date().toLocaleString('ua');
// }
// setData.textContent = currentData;

// setInterval(update, 1000);

// TASK 4

// Напиши функцію calculateAge(birthData), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте обєкт Data для обчислення різниці між сьогоднішньою датою і датою народження.

// function calculateAge(birthData) {
//   const currentDate = new Date();
//   const birth = new Date(birthData);
//   let different = currentDate.getFullYear() - birth.getFullYear();
//   const monthDifferent = currentDate.getMonth() - birth.getMonth();
//   const dateDifferent = currentDate.getDate() - birth.getDate();

//     console.log(monthDifferent);
//     console.log(dateDifferent);
//     console.log(different);

//   if (monthDifferent < 0 || (dateDifferent < 0 && monthDifferent === 0)) {
//     different -= 1;
//   }
//   return different;
// }

// console.log(calculateAge('1988-12-17'));

// TASK 5

// Зробити перемикач теми. Зберігати тему у локальне сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем.

const input = document.querySelector('.checkbox');

const STYLE_PAGE = 'theme';
input.addEventListener('change', handleChange);

function handleChange(event) {
  if (event.target.checked) {
    document.body.classList.add('dark');
    localStorage.setItem(STYLE_PAGE, 'dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    localStorage.setItem(STYLE_PAGE, 'light');
    document.body.classList.remove('dark');
  }
}

if (localStorage.getItem(STYLE_PAGE) === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  input.checked = true;
}
