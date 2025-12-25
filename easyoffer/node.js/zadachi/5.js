В каком порядке будут выведены числа при запуске данного кода?

const { readFile } = require('fs');

readFile('./async.txt', 'utf-8', console.log); // 0

Promise.resolve(console.log(1)).then(console.log);

Promise.resolve(2).then(console.log(3));

setTimeout(() => console.log(4), 0);

console.log(5);

Promise.resolve(6).then(() => console.log(7));

process.nextTick(() => { console.log(8) });