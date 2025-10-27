
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}  


// getDigit(873, 0)  --> 3
// getDigit(873, 1)  --> 7
// getDigit(873, 2)  --> 8
// getDigit(873, 3)  --> 0

console.log(getDigit(-873, 1))