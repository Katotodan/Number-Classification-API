const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const isPerfect = (n) => {
    if (n <= 0) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

const isArmstrong = (n) =>{
    let numStr = n.toString();
    let numDigits = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === n;
}

const isEvenOrOdd = (n) => {
    return n % 2 === 0 ? "even" : "odd";
}

const sumOfDigits = (n) => {
    let sum = 0;
    for (let digit of n) {
        sum += Number(digit);
    }
    return sum
}

module.exports = {isPrime, isPerfect, isArmstrong, isEvenOrOdd, sumOfDigits}


