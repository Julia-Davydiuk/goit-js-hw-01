let price = 0;
let result;

const userInput = prompt('Введите страну доставки');
const normalizedInput = userInput.toLowerCase();

const country = normalizedInput;

switch(country) {
    case 'китай':
    result = 'Китай';
    price = 100;
    console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
    break;

    case 'чили':
    result = 'Чили';
    price = 250;
    console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
    break;

    case 'австралия':
    result = 'Австралия';
    price = 170;
    console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
    break;

    case 'индия':
    result = 'Индия';
    price = 80;
    console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
    break;

    case 'ямайка':
    result = 'Ямайка';
    price = 120;
    console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
    break;

    default: 
    result = 'В вашей стране доставка не доступна.';
    alert(result);
}