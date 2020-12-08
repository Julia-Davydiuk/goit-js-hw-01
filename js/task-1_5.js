let price;
let result;
let normalizedInput;
let message;

const userInput = prompt('Введите страну доставки');

if(userInput === null) {
    message = "Отменено пользователем!";
} else {
    normalizedInput = userInput.toLowerCase();

    switch(normalizedInput) {
            case 'китай':
            price = 100;
            break;
        
            case 'чили':
            price = 250;
            break;
        
            case 'австралия':
            price = 170;
            break;
        
            case 'индия':
            price = 80;
            break;
        
            case 'ямайка':
            price = 120;
            break;
        
            default: 
            message = 'В вашей стране доставка не доступна.';
        }

        if (price !== undefined) {
        message = `Доставка в ${userInput} будет стоить ${price} кредитов`;
        }
   } alert(message);