Имеется функция someFn. Необходимо реализовать метод .delay(ms), который будет возвращать новую функцию, выполняющую исходный вызов с задержкой

function someFn(...args) {
    console.log(...args);
}
someFn.delay(2000)('Hello', 'World'); 
// Через 2 секунды выведет: Hello World