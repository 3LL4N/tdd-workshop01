const existingCards = ["79927398713"];

function luhnChecker(digits) {

    let digitsLength = digits.length;
    let sum = 0;
    let isAlternate = false;

    for (let i = digitsLength - 1; i >= 0; i--) {

        let number = digits[i].charCodeAt() - '0'.charCodeAt();

        if (isAlternate == true)
        number = number * 2;
 
        sum += parseInt(number / 10, 10);
        sum += number % 10;
 
        isAlternate = !isAlternate;
    }

    if (sum % 10 == 0) {
        return true
    } 
    
    return false
}

function cardExists(cardNumber) {
    if (luhnChecker(cardNumber) && existingCards.includes(cardNumber)) {
        return "This card exists"
    }

    return "This card does not exist"
}
     
let creditCard = "79927398713";

console.log(cardExists(creditCard));
