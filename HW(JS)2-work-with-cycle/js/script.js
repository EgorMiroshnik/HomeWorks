let startNumber;
let stopNumber;
let sumNumber = 0;
do {
    startNumber = Number(prompt('Введіть ціле число від якого будемо рахувати', 0));
} while(!Number.isInteger(startNumber) || startNumber < 0);
do {
    stopNumber = Number(prompt('Введіть ціле число до якого будемо рахувати', 0));
} while(!Number.isInteger(stopNumber) || stopNumber < 0 || stopNumber < startNumber);

let skipNumber = confirm(`Чи потрібно пропускати парні числа?`);
for ( let i = startNumber; i <= stopNumber; i++) {
    if (!skipNumber) {
        sumNumber += i;
    } else if ( i % 2 !== 0) {
        sumNumber += i;
    }
};
alert(`Сума ${!skipNumber ? 'з врахуванням' : 'без врахування'} парних чисел = ${sumNumber}`);