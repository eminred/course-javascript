/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный в параметре

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(foo) {
  return foo;
}

console.log(returnFirstArgument(123));
console.log(returnFirstArgument('ls'));

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.2 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */

  function sumWithDefaults(a, b=100) {
    return a+b
  }
  
  console.log(sumWithDefaults(1, 2)); 
  console.log(sumWithDefaults(10, -2)); 
  console.log(sumWithDefaults(10));
  console.log(sumWithDefaults(-2)); 


/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
function returnFnResult() {
  const value = Math.random();
  function fn() {
  return value;
    }
    
    return fn();
  }
  const result = returnFnResult(); 
  
  console.log(result);

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */


function returnCounter(n=0) {
    
  const result = function F(){
      n += 1; //n = n+1 
      return n;
  }

  return result;
}

const result1 = returnCounter(10);
const result2 = returnCounter();

console.log(result1());
console.log(result1());
console.log(result1());

console.log(result2());
console.log(result2());
console.log(result2());

/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
   function returnArgumentsArray(...args) {
    console.log(args)
    let Array = [];
    for (let i = 0; i < arguments.length; i++) {
        Array.push(arguments[i]);
   }
   return Array;
}

   returnArgumentsArray(1,2,3);
   returnArgumentsArray('l','s');
   returnArgumentsArray();

export {
  returnFirstArgument,
  sumWithDefaults,
  returnArgumentsArray,
  returnFnResult,
  returnCounter,
};
