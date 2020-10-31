/* Вычисление суммы массива
Напиши функцию reduceArray(array), которая принимает числовой массив array. Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for. Для подсчета суммы используй переменную total. Функция должна возвращать 0 если массив пустой и значение total в противном случае. */

function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let loginValid = false;

  if (login.length >= min && login.length <= max) {
    loginValid = true;
  } else {
    loginValid = false;
  }

  return loginValid;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  let loginUnique = true;

  for (const loginToFind of allLogins) {
    if (loginToFind === login) {
      loginUnique = false;
    }
  }

  return loginUnique;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  let loginValid = isLoginValid(login);
  let loginUnique = isLoginUnique(allLogins, login);

  if (loginValid === false) {
    return (message = ERROR);
  }

  if (loginUnique === false) {
    return (message = REFUSAL);
  }

  allLogins.unshift(login);

  return SUCCESS;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
