'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const passwordInput = prompt('Введите пароль администратора');

if(ADMIN_PASSWORD !== true) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if(ADMIN_PASSWORD === true) {
    message = 'Добро пожаловать!';
    console.log(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message)
}