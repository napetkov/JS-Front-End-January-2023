function passwordValidator(password){

let validLength = (password) => password.length >= 6 && password.length <= 10;
let validLetterAndDigit = password => (/^[A-Za-z0-9]*$/g).test(password);
let validTwoDigits = password => {
    let numberOfDigits = password
    .split('')
    .filter((symbol) => !isNaN(symbol))       //(/[0-9]/g).test(symbol)
    .length;

    return numberOfDigits >= 2;
}

let flagForValidPassword = validLength(password) && validLetterAndDigit(password) && validTwoDigits(password);
let errorMassage = '';

if(!validLength(password)){
    errorMassage += 'Password must be between 6 and 10 characters \n';
}

if(!validLetterAndDigit(password)){
    errorMassage += "Password must consist only of letters and digits \n";
}

if(!validTwoDigits(password)){
    errorMassage += "Password must have at least 2 digits \n"
}

return flagForValidPassword ? "Password is valid" : errorMassage;
}

console.log(passwordValidator('MyPass123'));