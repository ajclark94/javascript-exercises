const sumAll = function(num1, num2) {
    let low = 0;
    let high = 0;
    if (num1 < num2) {
        low = num1;
        high = num2;
    } else if (num1 > num2) {
        low = num2;
        high = num1;
    }
    let sum = 0;
    let next = 1;
    let steps = Math.abs(high - low) + 1
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < steps; i++) {
            sum += next;
            next++;
        }
    }
    return sum;  
};

// Do not edit below this line
module.exports = sumAll;
