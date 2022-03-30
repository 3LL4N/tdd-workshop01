const existingCards = ["79927398713", "6389369724428351"];

function luhnChecker(digits: string) {

    let digitsLength = digits.length;
    let sum = 0;
    let isAlternate = false;

    for (let i = digitsLength - 1; i >= 0; i--) {

        let number = digits[i].charCodeAt(0) - '0'.charCodeAt(0);

        if (isAlternate == true)
        
        number = number * 2;
 
        sum += parseInt((number / 10).toString(), 10);

        sum += number % 10;
 
        isAlternate = !isAlternate;
    }

    if (sum % 10 == 0) {
        return true
    } 
    
    return false
}

export default function cardExists(cardNumber: string) {
    if (luhnChecker(cardNumber.replace(/\s/g, "")) && existingCards.includes(cardNumber)) {
        return true
    }

    return false
}
     
let creditCard = "79927398713";

console.log(cardExists(creditCard));
