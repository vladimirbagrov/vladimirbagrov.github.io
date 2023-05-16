function pow(x, n) {
    //Функция возвращает x в степени n
    let result = x ** n;
    return result;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}