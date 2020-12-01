let price = 0;
let result;
let normalizedInput;

const userInput = prompt('Введите страну доставки');

if(userInput !== null) {
    normalizedInput = userInput.toLowerCase();

    switch(normalizedInput) {
            case 'китай':
            result = 'Китай';
            price = 100;
            break;
        
            case 'чили':
            result = 'Чили';
            price = 250;
            break;
        
            case 'австралия':
            result = 'Австралия';
            price = 170;
            break;
        
            case 'индия':
            result = 'Индия';
            price = 80;
            break;
        
            case 'ямайка':
            result = 'Ямайка';
            price = 120;
            break;
        
            default: 
            result = 'В вашей стране доставка не доступна.';
            alert(result);
        }
         console.log(`Доставка в ${result} будет стоить ${price} кредитов.`);
} else {
    userInput === null
}