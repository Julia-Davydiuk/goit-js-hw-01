'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const answer = prompt('Введите пароль администратора');

if(answer === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if(ADMIN_PASSWORD === answer) {
    message = 'Добро пожаловать!';
    console.log(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
} alert(message);