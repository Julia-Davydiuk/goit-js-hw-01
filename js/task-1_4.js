const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const answer = prompt('Сколько дроидов вы хотите купить?');
// console.log(answer)

totalPrice = answer * pricePerDroid;
// console.log(totalPrice)

if(answer === null) {
    console.log('Отменено пользователем!');

} else if(totalPrice > credits) {
    console.log('Недостаточно средств на счету!');

} else { const balanceOfCredits = credits - totalPrice;
    console.log(`Вы купили ${answer} дроидов, на счету осталось ${balanceOfCredits} кредитов.`);
}