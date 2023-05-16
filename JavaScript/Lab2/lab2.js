function pow(x, n) {
    //Функция возвращает x в степени n
    let result = x ** n;
    return result;
}

function sumTo(n) {
    //вычисляет сумму чисел от 1 до n включительно
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
}

function factorial(n) {
    return (n != 1) ? n = factorial(n - 1) : 1;
}