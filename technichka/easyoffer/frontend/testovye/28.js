Написать, что выведет в консоль JS
console.clear();

/*

Асинхронность
*/
function task1() {
console.log(1);

setTimeout(function () {
    console.log(2);
}, 0);

const p = new Promise((resolve, reject) => {
    console.log(3);
    setTimeout(() => {
        resolve();
        reject();
    });
});

p.then(() => {
    console.log(4);
}).catch(() => {
    console.log(5);
});

console.log(6);
}

//task1();

function task2() {
const innerFunc1 = async () => console.log(1);
const innerFunc2 = async () => {
console.log(2);
await innerFunc1();
console.log(3);
};
innerFunc2();
console.log(4);
}

// task2();

/*

Замыкание
*/
const var1 = 5;

function tmp() {
console.log('>>>>>>>>', var1);
}

function main() {
const var1 = 10;
tmp();
console.log(var1);
}

// main()

function createCounter() {
let count = 0;

let msg = `Count is ${count}`;

const increase = () => (count += 1);
const printMsg = () => console.log(msg);
const printCount = () => console.log(count);

return [increase, printMsg, printCount];
}
function runCreateCounter() {
const [increase, printMsg, printCount] = createCounter();
increase();
increase();
increase();
printMsg();
printCount();
}
// runCreateCounter()

/*

Контекст
*/
function printContext() {
console.log(this);
}

const printContextBind = printContext.bind({ a: 1 }).bind({ a: 2 });
// printContextBind()
// printContextBind.call({a:3})
// new printContextBind()

const myObj = {
a: 10,
method1() {
const printThis = () => console.log(this);
printThis();
},
method2: () => {
const printThis = () => console.log(this);
printThis();
},
};

// myObj.method1()
// myObj.method2();

// myObj.method1.call({a:1})
// myObj.method2.call({a:1})

/*

Классы
*/
class A {
constructor() {
this.name = 'foo';
this.getName();
}

getName() {
    console.log('foo ' + this.name);
}
}

class B extends A {
constructor() {
super();
this.name = 'bar';
this.getName();
}

getName() {
    console.log('bar ' + this.name);
}
}

// new B()