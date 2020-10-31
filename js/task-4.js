/* Задача 5-4
переиспользование методов класса
Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
Метод pad должен использовать методы append и prepend

Редактор JavaScript:
1
 // Write code under this line
2
  
3
​
4
// console.log(typeof StringBuilder);
5
// 'function'
6
​
7
​
8
// const builder = new StringBuilder('.');
9
​
10
// builder.append('^');
11
// console.log(builder.value); // '.^'
12
​
13
// builder.prepend('^');
14
// console.log(builder.value); // '^.^'
15
​
16
// builder.pad('=');
17
// console.log(builder.value); // '=^.^='
18
​
Проверить
Сбросить
Скрыть секцию результатов
Результаты:
(обновляются при нажатии на кнопку - Проверить)

©
2020
|
 */

  // Write code under this line
  class StringBuilder {
    constructor(value){
      this._value = value;
  
      console.log(this._value)
  }
    
    get value() {
    return this._value
    }
    
   append(str) {
      this._value += str
   }

   prepend(str) {
      this._value = str + this._value
   }

   pad(str) {
      this.prepend(str);
      this.append(str)
   }  
  }  

 console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
