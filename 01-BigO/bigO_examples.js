// "O большое" используентся
// описания производительности алгоритмов 
// (времени выполнения или использования памяти) 
// в зависимости от размера входных данных.

function addUpTo(n) {
    // значение O для функции: 
    // O(n)
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))


function addUpTo(n) {
    // значение O для функции: 
    // O(1)
    return n * (n + 1) / 2;
}

console.log(addUpTo(6))


function printAllPairs(n) {
    // значение O для функции: 
    // O(n**2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

printAllPairs(3)
