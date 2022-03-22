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
        return "This is a valid card"
    } else {
        return "This is NOT a valid card"
    };
}
     
let digits = "79927398713";

console.log(luhnChecker(digits));
