'use strict';
import {
    fib
} from './lab2.js';
/**
 * Программа возвращает дробную часть числа
 * @param {number} num 
 * @returns дробную часть числа
 */
export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }

    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(10);
    }
}


/**
 * Функция  возвращает строку str с заглавным первым символом
 * @param {string} str 
 * @returns  возвращает строку str с заглавным первым символом
 */
export function ucFirst(str) {
    if (!str) {
        return str;
    }
    else {
        return str[0].toUpperCase() + str.slice(1);
    }
}


/**
 * Функция возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
 * @param {string} str 
 * @returns возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
 */
export function checkSpam(str) {
    let newstr = str.toLowerCase();
    return newstr.includes('viagra') || newstr.includes('xxx');
}


/**
 * Функция проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…"
 * @param {string} str 
 * @param {number} maxlength 
 * @returns отформатированная строка 
 */
export function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    else {
        return str.slice(0, maxlength - 1) + '…';
    }
}


/**
 *  Функция преобразует строку вида 'var-test-text' в 'varTestText'
 * @param {string} str 
 * @returns строка вида'varTestText'
 */
export function camelize(str) {
    let str_copy = str.split("-");
    let strnew = "";
    for (let i = 0; i <= str_copy.length - 1; i++) {
        if (i == 0) strnew = str_copy[0];
        else strnew += ucFirst(str_copy[i]);
    }
    return strnew;
}
/**
 * Функция  возвращает массив, заполненный числами Фибоначчи до n-го (не включая его)
 * @param {number} n 
 * @returns  массив, заполненный числами Фибоначчи до n-го (не включая его)
 */
export function fibs(n) {
    let mas = [];
    for (let i = 0; i < n; i += 1) {
        mas.push(fib(i));
    }
    return mas;
}
/**
 * Функция возвращает массив из тех же элементов, но отсортированный по убыванию
 * @param {array} arr 
 * @returns  массив из тех же элементов, но отсортированный по убыванию
 */
export function arrReverseSorted(arr) {
    let arr_copy = arr.slice();
    return arr_copy.sort(function (a, b) {
        return b - a;
    })
}
/**
 * Функция массив уникальных, не повторяющихся значений массива arr
 * @param {array} arr 
 * @returns массив уникальных, не повторяющихся значений массива arr
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}