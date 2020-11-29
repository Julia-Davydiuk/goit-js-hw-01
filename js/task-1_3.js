'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const answer = prompt('Введите пароль администратора');

if(answer === null) {
    message = 'Отменено пользователем!';
} else if(ADMIN_PASSWORD === answer) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
} alert(message);

console.log(message);