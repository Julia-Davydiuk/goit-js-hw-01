const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const quantityDroid = prompt('Сколько дроидов вы хотите купить?');
console.log(quantityDroid)


// if(quantityDroidt = null) {
//         message = 'Отменено пользователем!';
//         console.log(message);
//     }

totalPrice = quantityDroid * pricePerDroid;
console.log(totalPrice)

if(totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    console.log(message)
}

balanceOfCredits = credits - totalPrice;
message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${balanceOfCredits} кредитов.`;
console.log(message)

