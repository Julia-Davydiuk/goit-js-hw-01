'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const passwordInput = prompt('Введите пароль администратора' || 'Отменено пользователем!') ;


if(ADMIN_PASSWORD === passwordInput) {
    message = 'Добро пожаловать!';
    console.log(message);
} 
else  if(ADMIN_PASSWORD !== passwordInput) {
        message = 'Доступ запрещен, неверный пароль!';
        console.log(message)
    } else {
        message = 'Отменено пользователем!';
        console.log(message);
    }

// if(passwordInput === NaN) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else 
// if(ADMIN_PASSWORD === passwordInput) {
//     message = 'Добро пожаловать!';
//     console.log(message);
// } else if(ADMIN_PASSWORD !== passwordInput) {
// message = 'Доступ запрещен, неверный пароль!';
// console.log(message)
// }