function pow(x, n) {
    //Функция возвращает x в степени n
    let result = x ** n;
    return result;//возвращаем х в степени n
}

function sumTo(n) {
    //вычисляет сумму чисел от 1 до n включительно
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;//возвращаем сумму
}

    
function factorial(n) {  
    //возвращает факториал числа n 
    if (n<=1) return 1n;
    else {
        res = BigInt (n) * BigInt(factorial(n-1))
        return res;
    }  
}

function fib(n){
    //функция возвращает n-е число Фибоначчи
    a = BigInt(1); // первое число Фиббоначи
    b=BigInt(1); //второе число Фиббоначи
    if (n== BigInt(0))
    {
        return BigInt(0); //возвращаем ноль при n=0
    }
    else
    { 
        for (i = BigInt(3); i<=n; i++) //алгоритм фибоначчи
        {
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
}

//функция принимает целочисленное значение x и возвращает анонимную функцию. Анонимная функция возвращает результат сравнения значений y и x
function compare(x)
{
return function(y)
{
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}

//функция возвращает сумму всех своих аргументов.
function sum()
{
    var result=0; 
    for (var i=0; i<arguments.length; i++)
    {
        result+=arguments[i] 
    }
    return result;
}