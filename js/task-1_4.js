const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const answer = prompt('Сколько дроидов вы хотите купить?');
console.log(answer)


if(answer === null) {
    console.log('Отменено пользователем!');
} else if(totalPrice = answer * pricePerDroid && totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} 
// } else {balanceOfCredits = credits - totalPrice;
//     console.log(`Вы купили ${answer} дроидов, на счету осталось ${balanceOfCredits} кредитов.`);
// }

// if(totalPrice > credits) {
//     message = 'Недостаточно средств на счету!';
//     console.log(message)
// }

// balanceOfCredits = credits - totalPrice;
// message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${balanceOfCredits} кредитов.`;
// console.log(message)
