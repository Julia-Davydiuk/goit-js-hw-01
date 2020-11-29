const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const answer = prompt('Сколько дроидов вы хотите купить?');
// console.log(answer)

totalPrice = answer * pricePerDroid;
// console.log(totalPrice)

if(answer === null) {
    message = 'Отменено пользователем!';

} else if(totalPrice > credits) {
    message = 'Недостаточно средств на счету!';

} else { const balanceOfCredits = credits - totalPrice;
    message = `Вы купили ${answer} дроидов, на счету осталось ${balanceOfCredits} кредитов.`;
}

console.log(message)